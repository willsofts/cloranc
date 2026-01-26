$(function(){
	$(this).mousedown(function(e) { setMouseCoordinate(e); });
	try { startApplication("factor"); }catch(ex) { console.error("ex",ex); }
	initialApplication();
});
function initialApplication() {
	setupComponents();
	setupAlertComponents();
}
function setupComponents() {
	$("#savebutton").click(function() { 
		save(); return false;
	});
	$("#factorcode").on("keydown", function (e) {
		e.stopPropagation();
		if(e.which==13) { $("#savebutton").trigger("click"); return false; }
	}).focus();
	$("a.factor-linker").each(function(index,element) {
		$(element).on("click",function() { openFactorInfo(); });
	});
}
function clearingFields() {
	//do nothing
}
function validForm() {
	clearAlerts();
	let validator = null;
	if($.trim($("#factorcode").val())=="") {
		$("#factorcode").parent().addClass("has-error");
		$("#factorcode_alert").show();
		if(!validator) validator = "factorcode";
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
	if(!validForm()) return false;
	if(!aform) aform = fsentryform;
	let data = serializeDataForm(aform);
	startWaiting();
	jQuery.ajax({
		url: API_URL+"/api/factor/verify",
		data: data.jsondata,
		headers : data.headers,
		type: "POST",
		dataType: "html",
		contentType: defaultContentType,
		error : function(transport,status,errorThrown) {
			submitFailure(transport,status,errorThrown);
		},
		success: function(data,status,transport){
			stopWaiting();
			try { 
				window.parent.gotoAfterLogin(); 
			} catch(ex) { console.error("ex",ex); }
		}
	});	
	return true;
}
function openFactorInfo() {
	$("#dialogpanel").find(".modal-dialog").draggable();
	$("#fsmodaldialog_layer").modal("show");
}
