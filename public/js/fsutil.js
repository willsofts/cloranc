var defaultContentType = "application/x-www-form-urlencoded; charset=UTF-8";
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (err) { return false; }
}
function load_page(appid,params,callback){	
	if(!$currPage || $currPage=="") {
		$currPage = $("#page_0");
	}	
	$currPage.hide();
	$currPage.removeClass("pt-page-current pt-page-moveFromRight pt-page-moveFromLeft");	
	try{ closeMenuBar(); }catch(ex) { }
	loadApplication(appid,params,callback);
	$("#pagecontainer").show();
	$("#workingframe").hide();
	$("#languagemenuitem").hide();
}
function loadApplication(appid,params,callback) {
	let fs_useruuid = $("#main_useruuid").val();
	let fs_user = $("#main_user").val();
	let appurl = BASE_URL+"/gui/"+appid; //+"?seed="+Math.random()+"&useruuid="+fs_useruuid+"&userid="+fs_user+(params?"&"+params:"");
	console.log("load application url",appurl);
	let prm = { useruuid: fs_useruuid, userid: fs_user, language: fs_default_language };
	if(params) {
		let pr = params.split("&");
		for(let i=0;i<pr.length;i++) {
			let kary = pr[i].split("=");
			prm[kary[0]] = kary[1];
		}
	}
	console.log("prm",prm);
	let authtoken = getAccessorToken();
	startWaiting();
	jQuery.ajax({
		url: appurl,
		data: prm,
		headers : { "authtoken": authtoken },
		type: "POST",
		dataType: "html",
		contentType: defaultContentType,
		error : function(transport,status,errorThrown) { 
			stopWaiting();
			let txt = $.trim(transport.responseText);
			let $div = $("<div class='protection-error'></div>").html(txt);
			$("#pagecontainer").html($div);
		},
		success: function(data,status,transport){ 
			stopWaiting();
			$("#pagecontainer").html(data);
			$currPage = $("#pagecontainer").children("div").eq(0);
			$currPage.addClass("pt-page-current pt-page-moveFromRight");
			$currPage.show();
			if(callback) callback();
		}
	});	
}
function open_page(opts) {
	let { appid, newflag, caption, treepath } = opts;
	console.log("open_page: ",opts);
	let fs_newflag = "1" == $("#accessor_label").data("NEW")  || "1" == newflag;
	if(!fs_newflag) {
		if(!$currPage || $currPage==""){
			$currPage = $("#page_0");
		}	
		$currPage.hide();
		$currPage.removeClass("pt-page-current pt-page-moveFromRight pt-page-moveFromLeft");	
		try{ closeMenuBar(); }catch(ex) { }
		$("#languagemenuitem").hide();
	}
	if(caption && caption.trim().length > 0) {
		show_subheader(appid,caption,treepath);
	}
	open_program(opts);
}
var except_apps = ["page_profile","page_change","page_first","page_login","page_work","page_forgot","page_register"];
function open_program(opts) {
	let { appid, url, params, path, newflag, openmethod, caption, treepath, target } = opts;
	let fs_newwindows = "1" == $("#accessor_label").data("NEW") || "1" == newflag;
	console.log("open_program(appid="+appid+", path="+path+", url="+url+", params="+params+", newflag="+newflag+", openmethod="+openmethod+")");
	let html = false; 
	let appurl = "/gui/"+appid; //+"?seed="+Math.random()+(params?"&"+params:"");
	if(path && $.trim(path)!="") {
		appurl = path;
		html = path.indexOf(".html") > 0;
	}
	if(url && $.trim(url)!="") {
		appurl = "/load/"+appid; //+"?seed="+Math.random()+(params?"&"+params:"");
	}
	console.log("open : "+appurl);
	html = openmethod == "GET" ? "GET" : html;
	$("#page_login").hide();
	let authtoken = getAccessorToken();
	if(fs_newwindows) {
		let awin = openNewWindow({
			method: html?"GET":"POST",
			url : appurl,
			windowName: "fs_window_"+appid,
			params: "seed="+Math.random()+"&authtoken="+authtoken+"&language="+fs_default_language+(params?"&"+params:"")
		});
		awin.focus();
	} else {
		if(!target) target = "workingframe";
		$("#pagecontainer").hide();
		$("#"+target).show();
		submitWindow({
			method: html?"GET":"POST",
			url : appurl,
			windowName: target,
			params: "seed="+Math.random()+"&authtoken="+authtoken+"&language="+fs_default_language+(params?"&"+params:"")
		});
		startWaiting();
	}
	recentApplication(appid,url,params,path,newflag,openmethod,caption,treepath);
}
function recentApplication(appid,url,params,path,newflag,openmethod,caption,treepath) {
	let $rlist = $("#recentmenulist");
	let $items = $rlist.find("li");
	if($items.length>15) return;
	let found = false;
	$(except_apps).each(function(idx,elem) { if(elem==appid) { found = true; return false; } });	
	$items.each(function(idx,elem) { if($(elem).attr("appid")==appid) { found = true; return false; }});
	if(found) return;	
	let authtoken = getAccessorToken();
	jQuery.ajax({
		url: API_URL+"/api/apps/find",
		data: { programid: appid },
		headers : { "authtoken": authtoken },
		type: "POST",
		dataType: "html",
		contentType: defaultContentType,
		success: function(data){ 
			let json = $.parseJSON(data);
			if(json && json.body.rows.length>0) {
				let row = json.body.rows[0];
				let $li = $("<li></li>");
				let $alink = $("<a href='javascript:void(0)'></a>");
				let description = row["description"];
				$alink.addClass("dropdown-item").click(() => { open_page({appid,url,params,path,newflag,openmethod,caption: description,treepath}); }).html(description);
				$li.append($alink).attr("appid",appid).attr("url",url).appendTo($rlist);	
				$("#recentcaret").show();
			}
		}
	});
}
function startWaiting() { 
	//do nothing
}
function stopWaiting() {
	//do nothing
}

function show_subheader(itemname, nameprogram, treepath) {
	console.log("show_subheader: ",itemname,", ",nameprogram,", ",treepath);
    $("#kt_subheader").removeClass("dp-none");
    let subheraderlink = '<span class="icon-subheader"><i class="flaticon2-shelter"></i></span>';
    if (treepath && treepath.trim().length > 0) {
        let cuttree = treepath.split("#CUT#");
		let spans = cuttree.map((item) => {
			if(item.trim().length > 0) {
    			return '<span class="kt-subheader__breadcrumbs-separator"></span><span class="text-subheader">' + item + '</span>';
			}
			return "";
		});
		subheraderlink += spans.join("");
    }
    subheraderlink += '<span class="kt-subheader__breadcrumbs-separator"></span>' +
        '<span class="text-subheader">' + nameprogram + ' </span>';

    $("#subheader_link").html(subheraderlink);
    $("#subheader_wrapper").html('<span style="width: 100px;"><span class="btn btn-bold btn-sm btn-font-sm btn-label-brand">' + itemname + '</span></span>');
    let x = window.matchMedia("(max-width: 1024px)");
    if (x.matches) {
        $(".kt-content").css("padding", "40px 0px 0px 0px");
        $("#kt_subheader").addClass("subheader-display");
    } else {
        $(".kt-content").css("padding", "40px 0px 0px 0px");
        $("#kt_subheader").addClass("dp-flex");
        $("#kt_subheader").show();
    }
}
function clearSubHeader() {
	$("#kt_subheader").removeClass("dp-none");
	$("#subheader_link").empty();
	$("#subheader_wrapper").empty();
}
