		var mouseX = 0;
		var mouseY = 0;
		var $currPage = "";
		var $ACCESS_TOKEN;
		var ALERT_BEFORE_TIMEOUT = META_INFO.ALERT_BEFORE_TIMEOUT;
		var ALERT_BEFORE_TIMEOUT = META_INFO.ALERT_BEFORE_TIMEOUT;
        var sessionTimeout = META_INFO.SESSION_TIMEOUT || (30 * 60 * 1000); // 30 minutes
        var alertBeforeTimeout = META_INFO.ALERT_BEFORE_SESSION_TIMEOUT || (5 * 60 * 1000); // 5 minutes before
        var timeoutAlert;
		console.log("index.js: ALERT_BEFORE_TIMEOUT",ALERT_BEFORE_TIMEOUT,", sessionTimeout",sessionTimeout,", alertBeforeTimeout",alertBeforeTimeout);
		function validInputUser() {
			if($.trim($("#main_username").val())=="") { alertbox("User is undefined"); return false; }
			return true;
		}
		function connectServer() {	
			if(!validInputUser()) return;
			logIn();
		}
		function disConnectServer(){
			logOut();
		}
		function logIn(){
			startWaiting();
			let params = {};
			let main_fields = {"main_username":"username", "main_pass":"password", "main_state":"state", "main_nonce":"nonce"};
			for(let field in main_fields) {				
				params[main_fields[field]] = $("#"+field).val();
			}
			let requestid = getRequestID();
			console.log("login: params",params,", requestid",requestid);
			jQuery.ajax({
				url: API_URL+"/api/sign/signin",
				type: "POST",
				contentType: defaultContentType,
				data: params, 
				headers : { "x-request-id": requestid },
				dataType: "html",
				error : function(transport,status,errorThrown) { 
					console.error("logIn: error",transport.responseText);
					stopWaiting();
					errorThrown = parseErrorThrown(transport, status, errorThrown);
					alertbox(errorThrown);
				},
				success: function(data,status,xhr){ 
					console.log("logIn: success"+xhr.responseText);
					stopWaiting();
					loginSuccess(data);
				}
			});			
		}
		function loginSuccess(data) {
			console.log("loginSuccess: data",data);
			let json = $.parseJSON(data);
			if(json.head.errorflag=="Y") {
				alertbox(json.head.errordesc);
			} else {
				showUserDetail(json);
				saveAccessorInfo(json.body);
				setupDiffie(json);
				console.log("loginSuccess: body",json.body);
				verifyAfterLogin(json.body,json.body?.firstpage);
			}			
		}
		function showUserDetail(json) {
			$("#main_useruuid").val(json.body.useruuid);
			$("#main_user").val(json.body.userid);
			let userdetail = json.body.displayname;
			if(!userdetail || userdetail.trim().length==0) userdetail = json.body.name+" "+json.body.surname;
			$("#accessor_label").html(userdetail);
			$("#accessor_label").data("NEW",json.body.newflag);
			$("#lastdate_label").html(json.body.accessdate+" "+json.body.accesstime);
			$("#last_access_label").html(json.body.accessdate+" "+json.body.accesstime);
			$("#userchangeitem").show();
			$("#accessor_change_link").show();
			if(json.body.activeflag=="1" || json.body.activeflag=="true" || json.body.tokentype=="D") {
				$("#userchangeitem").hide();
				$("#accessor_change_link").hide();
			}
			$("#name_profile").html(userdetail);
			$("#rolename_profile").html("");
        	$("#kt_header_mobile").removeClass("not_login").addClass("success_login");
		}		
		function verifyAfterLogin(body,firstpage) {
			$("#fsworkinglayer").addClass("working-control-class");
			if(body?.factorverify && body?.factorid!="" && (body?.factorcode==undefined || body?.factorcode=="")) {
				resetBackground();
				open_page({appid:"factor",params:"factorid="+body.factorid, target: "workingframe2"});			
			} else {
				checkAfterLogin(body,firstpage);
			}
		}
		function checkAfterLogin(body,firstpage) {
			$("#fsworkinglayer").addClass("working-control-class");
			if(body?.changeflag && body?.changeflag=="1") {
				resetBackground();
				open_page({appid:"page_change",params:"changed=force", target: "workingframe2"});
			} else if(body?.expireflag && body?.expireflag=="1") {					
				resetBackground();
				open_page({appid:"page_change",params:"changed=expire", target: "workingframe2"});
			} else {
				doAfterLogin(body,firstpage);
			}
		}
		function doAfterLogin(body,firstpage) {
			if(body) firstpage = body.firstpage;
			startWorking(firstpage);
			refreshScreen();
			if(body) {
				showBackground(body.background);
				let avatar = body.avatar;
				if(avatar && avatar.trim().length>0) {					
					showAvatar(avatar);
				} else {
					fetchAvatar(body.userid,body.photoimage);
				}
			}
			startNotify();
			startChating();
			startReceiveBroadcast();
		}
		function showAvatar(avatar) {
			if(!avatar || avatar.trim().length==0) return;
			//$("#avatarimage").attr("src",avatar);
			$("#fs_image_profile_select").attr("src",avatar);
			$("#fs_image_profile").attr("src",avatar);
		}
		function fetchAvatar(userid,photoimage) {
			let authtoken = getAccessorToken();
			console.log("fetchAvatar: userid="+userid);
			$.ajax({ 
				url : API_URL+"/api/avatar/image", 
				data: { userid: userid, photoimage: photoimage }, 
				headers : { "authtoken": authtoken }, 
				type : "POST",
				dataType: "json",
				contentType: defaultContentType,
				success: function(data) { 
					showAvatar(data?.avatar);
				}
			});
		}
		function startWorking(firstpage) {
			resetBackground();
			hideWorkSpace();
			$("#navigatebar").removeClass("fa-hidden");
			$('#page_login').hide();
			createMenu(); 
			startupPage(firstpage); 
		}
		function createMenu(){
			$("#aside_header").show();
			$("#sidebarmenu").show();
			$("#homelayer").show();
			$("#mainmenu").show();
			$("#usermenuitem").show();
			$("#favormenuitem").show();
			$("#loginlayer").hide();
			$("#languagemenuitem").removeClass("language-menu-item");
		}
		function startupPage(firstpage){
			load_sidebar_menu(firstpage,fs_default_language,function() {
				load_first_page(firstpage);
			});
			load_favor_menu();
			load_prog_item();
			$("#languagemenuitem").show();
			$("#fsworkinglayer").addClass("working-control-class");
		}
		function load_page_first() {
			load_page("page_first",null,function() { 
				$("#page_first").find("a.fa-link-app").each(function(index,element) {
					$(element).click(function() {
						let $e = $(this);
						let pid = $e.attr("data-pid");
						let url = $e.attr("data-url");
						open_page({appid:pid, url:url, path:$e.attr("data-path"), newflag:$e.attr("data-new"), openmethod:$e.attr("data-method"), caption: $e.attr("data-caption"), treepath: $e.attr("data-tree")});
					});
				});
				show_subheader("favorite","Short Cut Menu");
			});
			$("#languagemenuitem").show();
			hideWorkSpace();
		}
		function load_first_page(firstpage) {
			if(!firstpage) {
				let body = getAccessorInfo();
				firstpage = body?.firstpage;
			}
			let pages = null; 
			if(firstpage && firstpage.trim().length>0) {
				pages = $("a[data-pid="+firstpage+"]",$("#sidebarlayer"));
			} else {
				pages = $("a[data-pid=worklist]",$("#sidebarlayer"));
			}
			if(pages && pages.length>0) {
				pages.eq(0).trigger("click");
				$("#kt_subheader").addClass("dp-none");
				$("#kt_content").addClass("no-subheader");
				$(window).trigger("resize");
			} else {
				load_page_first();
			}
		}
		function hideMenu() {
			$("#page_first").hide();
		}
		function fs_changingPlaceholder(lang) {
			if(!lang) return;
			let u_placeholder = fs_getLabelName("login_user_placeholder","index",lang);
			let p_placeholder = fs_getLabelName("login_pass_placeholder","index",lang);
			if(u_placeholder) {
				$("#main_username").attr("placeholder",u_placeholder);
				$("#loginframe").contents().find("#main_username").attr("placeholder",u_placeholder);
			}
			if(p_placeholder) {
				$("#main_pass").attr("placeholder",p_placeholder);
				$("#loginframe").contents().find("#main_pass").attr("placeholder",p_placeholder);
			}
			let last_label = fs_getLabelName("lastaccess_label","index",lang);
			if(last_label) $("#lastaccess_label").html(last_label);
			let log_label = fs_getLabelName("logout_label","index",lang);
			if(log_label) {
				$("#logingout_label").html(log_label);
				$("#logout_label").html(" "+log_label);
			}
			let changepwd_label = fs_getLabelName("changepwd_label","index",lang);
			if(changepwd_label) $("#changepwd_label").html(" "+changepwd_label);
			let profile_label = fs_getLabelName("profile_label","index",lang);
			if(profile_label) $("#profile_label").html(" "+profile_label);
			let signin_label = fs_getLabelName("signin_label","index",lang);
			if(signin_label) $("#loginmenutrigger").html(signin_label);
			console.log("fs_changingPlaceholder: lang = "+lang+" : "+log_label);
			let login_header_label = fs_getLabelName("login_label","index",lang); 
			if(login_header_label) {
				$("#loginframe").contents().find("#login_label").html(login_header_label);
			}
			let login_button_label = fs_getLabelName("login_button","index",lang); 
			if(login_button_label) {
				$("#loginframe").contents().find("#login_button").val(login_button_label);
			}
			let eng_label = fs_getLabelName("englishlanguage","index",lang);
			let thi_label = fs_getLabelName("thailanguage","index",lang);
			if(eng_label) $("#englishlanguage").html(eng_label);
			if(thi_label) $("#thailanguage").html(thi_label);
		}
		function goHome() {
			load_first_page();
		}
		function forceLogout() {
			let useruuid = $("#main_useruuid").val();
			let authtoken = getAccessorToken();
			console.log("forceLogout: useruuid="+useruuid+", authtoken="+authtoken);
			$.ajax({ url : API_URL+"/api/sign/signout", data: { useruuid: useruuid }, headers : { "authtoken": authtoken }, type : "POST" });
		}
		function profileClick() {
			open_page({appid:"page_profile", params:"userid="+$("#main_user").val(), caption: "User Profile"});
		}
		function changeClick() {
			open_page({appid:"page_change", caption: "Change Password"});
		}
		function forgotClick() {
			hideLoginForm();
			resetBackground();
			open_page({appid:"page_forgot", caption: "Forgot Password", target: "workingframe2"});
		}
		function registerClick() {
			hideLoginForm();
			resetBackground();
			open_page({appid:"page_register", caption: "Registeration", target: "workingframe2"});
		}
		function resetBackground() {
			$("#fsworkinglayer").removeClass("working-control-class");
			$(window.document.body).removeClass("body-login");
		}
		function gotoLogin() {
			hideWorkSpace();
			doLogin();
		}
		function gotoAfterLogin(body,firstpage) {
			//this for factor page success (factor.js)
			if(!body) body = getAccessorInfo();
			checkAfterLogin(body,firstpage);
		}
		function gotoLoginPage(body,firstpage) {
			//this for change password success (page_change.js)
			doAfterLogin(body,firstpage);
			hideWorkSpace();
		}
		function logOut() {
			forceLogout();
			doLogout();
			try { doSSOLogout(); return; } catch(ex) { console.error("logOut",ex); }
			window.open("/index","_self");
		}
		function doLogout() {
			try { removeAccessorInfo(); } catch(ex) { }
			try { closeMenuBar(); }catch(ex) { }
			doLogin();
			clearBackground();
			clearAvatar();
			stopNotify();
			stopChating();
		}
		function clearAvatar() {
			showAvatar(IMG_URL+"/img/avatar.png");
		}
		function clearBackground() {
			$("body").css("background-image","none");
		}
		function showBackground(bgfile) {
			if(!bgfile) return;
			if($.trim(bgfile)!="") {
				$("body").attr("style","background-image: url(/img/background/"+bgfile+");");
			}
		}		
		function logInClick() {
			$(window.document.body).addClass("body-login");
			hideWorkingFrame();
			$("#page_login").show();
			try {
				main_form.reset();
			}catch(ex) { }
			$("#main_useruuid").val("");
			displayLogin();
		}
		function doLogin() {
			$("#pagecontainer").empty();
			$("#mainmenu").hide();
			if($currPage=="") $currPage = $("#page_first");
			if($currPage) {
				$currPage.removeClass('pt-page-current pt-page-moveFromRight pt-page-moveFromLeft');	
			}
			logInClick();
			hideWorkSpace();
			$("#aside_header").hide();
			$("#sidebarmenu").hide();
			$("#sidebarlayer").empty();
			$("#homelayer").hide();
			$("#mainmenu").hide();
			$("#usermenuitem").hide();
			$("#favormenuitem").hide();
			$("#favorbarmenu").empty();
			$("#languagemenuitem").addClass("language-menu-item").show();
			$("#recentmenulist").empty();
			$("#recentcaret").hide();
			$("#loginlayer").show();
			hideNewFavorItem();
			$("#kt_header_mobile").removeClass("success_login").addClass("not_login");
		}		
		function load_sidebar_menu(firstpage,language,callback) {
			let fs_user = $("#main_user").val();
			if(!language) language = fs_default_language;
			let authtoken = getAccessorToken();
			let requestid = getRequestID();
			jQuery.ajax({
				url: API_URL+"/api/menuside/html",
				data: { userid: fs_user, language: language },
				headers : { "authtoken": authtoken, "x-request-id": requestid },
				type: "POST",
				dataType: "html",
				contentType: defaultContentType,
				success: function(data){ 
					$("#sidebarlayer").html(data); 
					bindingOnSideBarMenu();
					if(callback) callback(firstpage);
				}
			});
		}
		function load_favor_menu(language) {
			let fs_user = $("#main_user").val();
			if(!language) language = fs_default_language;
			let authtoken = getAccessorToken();
			let requestid = getRequestID();
			jQuery.ajax({
				url: API_URL+"/api/menufavor/html",
				data: { userid: fs_user, language: language },
				headers : { "authtoken": authtoken, "x-request-id": requestid },
				type: "POST",
				dataType: "html",
				contentType: defaultContentType,
				success: function(data){ 
					$("#favorbarmenu").html(data); 
					bindingOnFavorMenu(); 
				}
			});
		}
		function fs_changingLanguage(fs_Language) {
			console.log("fs_changingLanguage: language = "+fs_Language);
			try{
				fs_changingPlaceholder(fs_Language);
				if(fs_currentpid && fs_currentpid!="index") {
					fs_switchingLanguage(fs_Language,"index");
				}
			}catch(ex) { }
			let fs_name = $("#accessor_label").data(fs_Language);
			if(fs_name) $("#accessor_label").html(fs_name);
			changeSiderMenuLanguage(fs_Language);			
		}
		function changeSiderMenuLanguage(lang) {
			lang = lang.toLowerCase();
			$("#sidebarlayer").find("span.span-menu-label").each(function(index,element) {
				let e = $(element);
				let text = e.attr("data-"+lang);
				if(text) e.html(text);
			});
			$("#page_first").find("span.span-menu-label").each(function(index,element) {
				let e = $(element);
				let text = e.attr("data-"+lang);
				if(text) e.html(text);
			});
		}
		function refreshScreen() {
			$(window).trigger("resize");
		}
		function getTargetFrameName() { return "workingframe"; }
		function hideLoginForm() {
			$("#page_login").hide();
		}
		function showWorkingFrame() {
			$("#pagecontainer").hide();
			$("#workingframe").show();
		}
		function hideWorkingFrame() {
			$("#navigatebar").addClass("fa-hidden");
			$("#pagecontainer").hide();
			hideWorkSpace();
		}
		function hideWorkSpace() {
			$("#workingframe").hide();
			$("#workingframe2").hide();
			window.open(BASE_URL+"/blank.html","workingframe");
			window.open(BASE_URL+"/blank.html","workingframe2");
			clearSubHeader();
		}
		function displayWorkingFrame(url) {
			let canopen = true;
			let curpid = $("#subheader_wrapper").text().trim();
			if(curpid && curpid.length > 0) {
				let screens = META_INFO.NOTIFY_UNCHECK_OPEN_SCREENS || ["favorite","worklist"];
				if(!screens.includes(curpid)) {
					canopen = false;
				}
			} 
			if(!canopen && !(String(META_INFO.NOTIFY_CHECK_OPEN)=="false")) {
				confirmDialogBox("QS0035",null,"Do you want to open this transaction? <br/>Becareful all current work will be lose",() => {
					openWorkingFrame(url);
				});
			} else {
				openWorkingFrame(url);
			}
		}
		function openWorkingFrame(url) {
			clearSubHeader();
			$("#workingframe").attr("src", url).show();
			$("#pagecontainer").hide();
		}
		function takeSwitchLanguage(lang) {
			if(lang && lang!="") {
				$("#linklang"+lang.toLowerCase()).trigger("click");
			}
		}
		function displayLogin() {
			removeAccessorInfo();
			$("#main_username").focus();
		}
		function validAccessToken(callback) {
			let json = getAccessorInfo();
			if(json && json.authtoken) {
				doAccessToken(json.authtoken,callback,json.info);
				return;
			}
			if(callback) callback(false);
		}
		function doAccessToken(token,callback,info) {
			if(token && token!="") {
				let requestid = getRequestID();
				jQuery.ajax({
					url: API_URL+"/api/sign/accesstoken",
					headers : { "authtoken": token, "x-request-id": requestid },
					type: "POST",
					contentType: defaultContentType,
					dataType: "html",
					error : function(transport,status,errorThrown) {
						if(callback) callback(false); 
					},
					success: function(data,status,xhr){ 
						accessSuccess(data,callback,info);
					}
				});	
				return;
			}		
			if(callback) callback(false); 
		}
		function accessSuccess(data,callback,info) {
			console.log("accessSuccess: data",data);
			try {
				let json = $.parseJSON(data);
				if(json && json.head.errorflag=="N") {
					showUserDetail(json);
					if(info) json.body.info = info;
					console.log("accessSuccess: body",json.body);
					saveAccessorInfo(json.body);
					let accessToken = getStorage("access_token");
					if(accessToken) setupDiffie(json);
					removeStorage("access_token");
					if(callback) callback(true,json); 
					return;
				}
			} catch(ex) { 
				console.error("accessSuccess",ex);
			}
			if(callback) callback(false); 
		}	
		function setupComponents() {
			$("a.home-page-linker").each(function(index,element){ $(element).on("click",function() { goHome(); })});
			$("#homemenutrigger").click(function() { goHome(); });
			$("#accessor_profile_link").click(function() { profileClick(); });
			$("#accessor_change_link").click(function() { changeClick(); });
			$("#accessor_logout_link").click(function() { logOut(); });
			$("a.lang-linker").each(function(index,element) {
				let $e = $(element);
				$e.on("click",function() {
					let img = $e.attr("data-image");
					$('#languageimage').attr('src',img); 
					let lang = $e.attr("data-lang") || "EN";
					fs_switchLanguage(lang,true);
					$("li.li-lang").removeClass("kt-nav__item--active");
					$e.parent().addClass("kt-nav__item--active");
					sendMessageToFrame({type:"language",language:lang});
				});
			});
			$("#forgot_password").click(function() { forgotClick(); });
			$("#register_user").click(function() { registerClick(); });
			$("#main_button").click(function() { connectServer(); });
			$("#ssologinlayer").find("a.fa-link-sso-saml").each(function(index,element) {
				$(element).click(function() {
					let domainid = $(this).attr("data-domain");
					window.open('/auth/signin/'+domainid,'_self');
				});
			});
			$("#ssologinlayer").find("a.fa-link-sso-biz").each(function(index,element) {
				$(element).click(function() {
					let domainid = $(this).attr("data-domain");
					startSSO(domainid);
				});
			});
			$("#workingframe").on("load",function() { 
				try{stopWaiting();}catch(ex){} 
				if(ALERT_BEFORE_TIMEOUT) try{initWorkingTimer();}catch(ex){} 
			});
			$("#workingframe2").on("load",function() { 
				try{stopWaiting();}catch(ex){} 
			});
			$("#kt_header_mobile_subheader_toggler").on("click",function(){
            	$("#kt_subheader").toggleClass("dp-flex-togger");
          	});
		}
		var fs_workingframe_offset = 2;
		$(function(){
			$(this).on("mousedown",function(e) { mouseX = e.pageX; mouseY = e.pageY; });
			try { startApplication("index",true); }catch(ex) { }
			setupComponents();
			//ignore force logout coz it was invalidate when refresh
			//try { $(window).bind("unload",forceLogout); }catch(ex) { }
			$("#main_pass").on("keydown", function (e) {
				if(e.which==13) { connectServer(); }
			});
			$("#main_code").on("keydown", function (e) {
				if(e.which==13) { connectServer(); }
			});
			$(window).resize(function() { 
					let wh = $(window).height();
					let kh = 0;
					if($("#kt_header").is(":visible")) {
						kh = $("#kt_header").height();
					}
					let ksh = 0;
					if($("#kt_subheader").is(":visible")) {
						ksh = $("#kt_subheader").height();
					}
					let wfh = (wh-kh-ksh) - fs_workingframe_offset;
					console.log("workingframe: height",wfh);
					$("#workingframe").height(wfh);
			}).trigger("resize");
			let pos = $("#loginframe").position();
			if(pos) { mouseX = pos.left; mouseY = pos.top; }
			validAccessToken(function(valid,json) {
				console.log("validAccessToken: callback valid = "+valid+", json : "+json);
				if(!valid) {
					displayLogin();
				} else {
					sendMessageInterface(json.body);
					verifyAfterLogin(json.body);
				}
			});
			$(window).on("beforeunload",function(e) { 
				if(fs_winary.length > 0) {
					e.preventDefault();
					e.returnValue = "";
					return "";
				}
			}).on("unload",function() { closeChildWindows(); });
			if(ALERT_BEFORE_TIMEOUT) initSessionTimer();
			setupChating();		
		});
		window.onmessage = function(e) {
			console.log("main: onmessage:",e.data);
			try {
				let payload = JSON.parse(e.data);
				if(payload.type=="accessorinfo") {					
					sendMessageInterface();
				}
			} catch(ex) { }
		}
        function startSessionTimer() {
            clearTimeout(timeoutAlert);
            timeoutAlert = setTimeout(() => {
                alert('Your session is about to expire. Please save your work.');
            }, sessionTimeout - alertBeforeTimeout);
        }
		function initSessionTimer() {
			console.log("initSessionTimer ...");
			startSessionTimer();
			document.addEventListener('mousemove', startSessionTimer);
			document.addEventListener('keydown', startSessionTimer);	
		}
		function initWorkingTimer() {
			const iframe = document.getElementById('workingframe');
			let framedoc = iframe.contentDocument || iframe.contentWindow.document;
			framedoc.addEventListener('mousemove', startSessionTimer);
			framedoc.addEventListener('keydown', startSessionTimer);	
		}
		function setupChating() {
			$("#chatmenuitemlink").on("click",function() {
				if($("#fschatinglayer").is(":visible")) {
					$("#fschatinglayer").hide();
				} else {
					$("#fschatinglayer").show();
				}
			});
		}
		function openChating() {
			let authtoken = getAccessorToken();
			let appurl = "/gui/chat";
			submitWindow({
				method: "POST",
				url : appurl,
				windowName: "chatingframe",
				params: "seed="+Math.random()+"&authtoken="+authtoken+"&language="+fs_default_language
			});	
		}
		function startChating() {
			if(META_INFO.chat) {
				openChating();
			}
		}
		function stopChating() {
			if(META_INFO.chat) {
				$("#fschatinglayer").hide();
				window.open(BASE_URL+"/blank.html","chatingframe");			
			}
		}
		function openNotify() {
			let authtoken = getAccessorToken();
			let appurl = "/gui/notify";
			submitWindow({
				method: "POST",
				url : appurl,
				windowName: "notifyframe",
				params: "seed="+Math.random()+"&authtoken="+authtoken+"&language="+fs_default_language
			});	
		}
		function startNotify() {
			if(META_INFO.notify) {
				openNotify();
			}
		}
		function stopNotify() {
			if(META_INFO.notify) {
				$("#nn_alert_container").empty();
				$("#kt_alert_container").empty();
				window.open(BASE_URL+"/blank.html","notifyframe");			
			}
		}
