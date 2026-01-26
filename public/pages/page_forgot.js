$(function() {
	$(this).mousedown(function(e) { setMouseCoordinate(e); });
	try { startApplication("page_forgot"); }catch(ex) { console.error("ex",ex); }
	initialApplication();
});
function initialApplication() {
	setupComponents();
	setupAlertComponents();
}
function setupComponents() {
	$("#cancelbutton").on("click",function() {
		cancelClick();
	});
	$("#sendbutton").click(function() { 
		send();
		return false;
	});
	$("#secureimage_ctrl").click(function() { 
		jQuery.ajax({
			url: API_URL+"/api/captcha/create",
			type: "POST",
			data: { capid: $("#capid").val() },
			dataType: "html",
			contentType: defaultContentType,
			error : function(transport,status,errorThrown) { 
				submitFailure(transport,status,errorThrown);  
			},
			success: function(data,status,transport){ 
				try {
					let json = $.parseJSON(data);
					if(json.body.rows.id && json.body.rows.src) {
						$("#capid").val(json.body.rows.id);
						$("#secureimage").attr("src",json.body.rows.src);
					}
				} catch(ex) {
					console.log(ex);
				}
			}
		});					
		return false;
	}).trigger("click");
	$("#loginlink").click(function() { loginLinkClick(); });
	$("#email").focus();
}
function clearingFields() {
	forgotpassword_form.reset();
}
function validForm() {
	clearAlerts();
	let validator = null;
	if($.trim($("#email").val())=="") {
		$("#email").parent().addClass("has-error");
		$("#email_alert").show();
		if(!validator) validator = "email";
	}
	if($.trim($("#securecode").val())=="") {
		$("#securecode").parent().addClass("has-error");
		$("#securecode_alert").show();
		if(!validator) validator = "securecode";
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
function send(aform) {
	if(!aform) aform = forgotpassword_form;
	if(!validForm()) return false;
	confirmSend(function() {
		$("#forgotpassword_alert").hide();		
		startWaiting();
		jQuery.ajax({
			url: API_URL+"/api/forgot/password",
			type: "POST",
			data: $(aform).serialize(),
			dataType: "html",
			contentType: defaultContentType,
			error : function(transport,status,errorThrown) { 
				submitFailure(transport,status,errorThrown); 
			},
			success: function(data,status,transport){ 
				stopWaiting();
				sendsucces(function() {
					$("#page_forgot").hide();
					$("#page_forgot_success").show();
				});	
			}
		});	
	});
	return true;
}
function sendsucces(callback,params) {
	alertbox("QS0201",callback,null,params);	
}
function loginLinkClick() {
	try {
		window.parent.logInClick();
	} catch(ex) {
		console.error(ex);
		window.open(BASE_URL+"/index","_self");
	}	
}
function cancelClick() {
	try {
		window.parent.gotoLogin();
	} catch(ex) { console.error(ex); }
}
