$(function(){
	$(this).mousedown(function(e) { setMouseCoordinate(e); });
	try { startApplication("sftq001"); }catch(ex) { console.warn("error",ex); }
	initialApplication();
});
function initialApplication() {
	setupComponents();
}
function setupComponents() {
	$("#searchbutton").click(function(evt) { 
		resetFilters();
		search(); 
		return false;
	});
	$("#resetbutton").click(function(evt) { 
		clearingFields(); 
		return false;
	});
}
function resetFilters() {
	try {
		fssearchform.page.value = "1";
		fssearchform.orderBy.value = "";
		fssearchform.orderDir.value = "";
	} catch(ex) { console.warn("error",ex); }
}
function clearingFields() {
	fssearchform.reset();
	$("#datatablebody").empty();
	$("#fschapterlayer").empty();
}
function search(aform) {
	if(!aform) aform = fssearchform;
	let formdata = serializeDataForm(aform);
	startWaiting();
	jQuery.ajax({
		url: getApiUrl()+"/api/sftq001/search",
		data: formdata.jsondata,
		headers : formdata.headers,
		type: "POST",
		dataType: "html",
		contentType: defaultContentType,
		error : function(transport,status,errorThrown) { 
			submitFailure(transport,status,errorThrown);  
		},
		success: function(data,status,transport){ 
			searchComplete(transport,data);
		}
	});	
}
function searchComplete(xhr,data) {
	$("#listpanel").data("searchfilters",createParameters(fssearchform));
	stopWaiting();
	$("#listpanel").html(data);
	setupDataTable();
}
function submitChapter(aform,index) {
	let formdata = serializeDataForm(aform, $("#listpanel").data("searchfilters"));
	startWaiting();
	jQuery.ajax({
		url: getApiUrl()+"/api/sftq001/search",
		data: formdata.jsondata,
		headers: formdata.headers,
		type: "POST",
		contentType: defaultContentType,
		dataType: "html",
		error : function(transport,status,errorThrown) { 
			submitFailure(transport,status,errorThrown);  
		},
		success: function(data,status,transport){ 
			stopWaiting();
			$("#listpanel").html(data); 
			setupDataTable();
		}
	});
}
function submitOrder(src,sorter) {
	let aform = fssortform;
	aform.orderBy.value = sorter;
	let formdata = serializeDataForm(aform, $("#listpanel").data("searchfilters"));
	startWaiting();
	jQuery.ajax({
		url: getApiUrl()+"/api/sftq001/search",
		data: formdata.jsondata,
		headers: formdata.headers,
		type: "POST",
		contentType: defaultContentType,
		dataType: "html",
		error : function(transport,status,errorThrown) { 
			submitFailure(transport,status,errorThrown);  
		},
		success: function(data,status,transport){ 
			stopWaiting();
			$("#listpanel").html(data); 
			setupDataTable();
		}
	});
	return false;
}
function setupDataTable() {
	setupPageSorting("datatable",submitOrder);
	setupPagination("fschapterlayer",submitChapter,fschapterform,fssearchform);
}
