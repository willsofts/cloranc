$(function(){
	$(this).mousedown(function(e) { setMouseCoordinate(e); });
	try { startApplication("page_profile"); }catch(ex) { console.error("ex",ex); }
	initialApplication();
});
function initialApplication() {
	setupComponents();
	setupAlertComponents();
}
function setupComponents() {
	$("#savebutton").click(function() { 
		save();
		return false;
	});
	$("#usertname").focus();
}
function clearingFields() {
	//do nothing
}
function validFormField(name,validator) {
	if($.trim($("#"+name).val())=="") {
		$("#"+name).parent().addClass("has-error");
		$("#"+name+"_alert").show();
		if(!validator) validator = name;
	}
	return validator;
}
function validForm() {
	clearAlerts();
	let validator = null;
	let field_names = ["usertname","usertsurname","userename","useresurname","displayname","email"];
	for(let name of field_names) {
		validator = validFormField(name,validator);
	}
	if(validator) {
		$("#"+validator).focus();
		setTimeout(function() { 
			$("#"+validator).parent().addClass("has-error");
			$("#"+validator+"_alert").show();
		},100);
		return false;
	}
	return true;
}
function save(aform) {
	if(!aform) aform = fsentryform;
	if(!validForm()) return false;
	confirmSave(function() {
		let formdata = serializeDataForm(aform);		
		//this return json and only body.data is encrypted : formdata.headers["accept-type"] = "json/cipher"; 
		//this return encrypted string : formdata.headers["accept-type"] = "text/cipher"; 
		let accepttype = formdata.headers["accept-type"];
		startWaiting();
		jQuery.ajax({
			url: API_URL+"/api/profile/update",
			data: formdata.jsondata,
			headers : formdata.headers,
			type: "POST",
			dataType: "html",
			contentType: defaultContentType,
			error : function(transport,status,errorThrown) { 
				submitFailure(transport,status,errorThrown); 
			},
			success: function(data,status,transport){ 
				stopWaiting();
				successbox(function() { clearingFields(); });
				console.log("data",data);
				let dh = getDH();
				if(accepttype=="json/cipher") {
					let json = $.parseJSON(data);
					if(dh && json.body.data && typeof json.body.data === "string") {
						let data = dh.decrypt(json.body.data);
						console.log("body.data",data);
					}
				}
				if(accepttype=="text/cipher") {
					let jsonstr = dh.decrypt(data);
					console.log("jsonstr",jsonstr);
					if(jsonstr) {
						let json = $.parseJSON(jsonstr);
						console.log("json",json);
					}
				}
			}
		});
	});
	return true;
}

