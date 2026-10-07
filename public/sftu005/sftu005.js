let autoRefreshTimer = null;
let cachedServices = [];

$(function() {
	$(this).mousedown(function(e) { setMouseCoordinate(e); });
	try { startApplication("sftu005"); } catch(ex) { console.warn("error", ex); }
	initialApplication();
});

function initialApplication() {
	setupComponents();
	search(false);
}

function setupComponents() {
	$("#searchbutton").click(function(evt) {
		search(true);
		return false;
	});

	$("#resetbutton").click(function() {
		$("#servicename").val("");
		$("#status_filter").val("");
		renderServicesTable(cachedServices);
		return false;
	});

	$("#servicename").on("input keyup", function() {
		renderServicesTable(cachedServices);
	});

	$("#status_filter").on("change", function() {
		renderServicesTable(cachedServices);
	});

	$("#autorefresh").on("change", function() {
		if (this.checked) {
			if (autoRefreshTimer) clearInterval(autoRefreshTimer);
			autoRefreshTimer = setInterval(function() {
				search(false);
			}, 5000);
		} else if (autoRefreshTimer) {
			clearInterval(autoRefreshTimer);
			autoRefreshTimer = null;			
		}
	});
}

function formatDateTime(timestamp) {
	if (!timestamp) return "-";
	let num = Number(timestamp);
	if (Number.isNaN(num) || num <= 0) return "-";
	let d = new Date(num);
	if (Number.isNaN(d.getTime())) return "-";
	let pad = function(n) { return n < 10 ? "0" + n : "" + n; };
	let year = d.getFullYear();
	let month = pad(d.getMonth() + 1);
	let day = pad(d.getDate());
	let hours = pad(d.getHours());
	let mins = pad(d.getMinutes());
	let secs = pad(d.getSeconds());
	return year + "-" + month + "-" + day + " " + hours + ":" + mins + ":" + secs;
}

function search(showWaiting) {
	if (showWaiting !== false) {
		startWaiting();
	}
	let apiUrl = getApiUrl() + "/api/sftu005/list";
	jQuery.ajax({
		url: apiUrl,
		type: "GET",
		dataType: "json",
		contentType: defaultContentType,
		error: function(transport, status, errorThrown) {
			if (showWaiting !== false) stopWaiting();
			console.error("Failed to load services:", status, errorThrown);
			if (showWaiting !== false) {
				submitFailure(transport, status, errorThrown);
			}
		},
		success: function(data, status, transport) {
			if (showWaiting !== false) stopWaiting();
			cachedServices = Array.isArray(data) ? data : (data?.body?.dataset?.rows || data?.data || []);
			renderServicesTable(cachedServices);
			updateLastRefreshTime();
		}
	});
}

function updateLastRefreshTime() {
	let now = new Date();
	let pad = function(n) { return n < 10 ? "0" + n : "" + n; };
	let timeStr = pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
	$("#last_updated_time").text(timeStr);
}

function renderServicesTable(services) {
	if (!Array.isArray(services)) {
		services = [];
	}

	let nameFilter = ($("#servicename").val() || "").trim().toLowerCase();
	let statusFilter = ($("#status_filter").val() || "").trim().toUpperCase();

	let filtered = services.filter(function(item) {
		let nameMatch = true;
		if (nameFilter) {
			let sName = (item?.name || "").toLowerCase();
			nameMatch = sName.indexOf(nameFilter) >= 0;
		}
		let statusMatch = true;
		if (statusFilter) {
			let sStatus = (item?.status || "").toUpperCase();
			statusMatch = sStatus === statusFilter;
		}
		return nameMatch && statusMatch;
	});

	let tbody = $("#datatablebody");
	tbody.empty();

	if (filtered.length === 0) {
		let emptyHtml = '<tr>' +
			'<td class="text-center" colspan="5">' +
				'<div class="p-4 text-muted">' +
					'<i class="fa fa-info-circle fa-2x mb-2 d-block"></i>' +
					'No services found' +
				'</div>' +
			'</td>' +
		'</tr>';
		tbody.append(emptyHtml);
		$("#total_services_count").text("0 of " + services.length);
		return;
	}

	for (let index = 0; index < filtered.length; index++) {
		let item = filtered[index];
		let isUp = (item?.status || "").toUpperCase() === "UP";
		let statusClass = isUp ? "text-success font-weight-bold" : "text-danger font-weight-bold";
		let statusIcon = isUp ? "fa-check-circle" : "fa-times-circle";
		let statusText = item?.status || "DOWN";
		let lastAccessFormatted = formatDateTime(item?.lastAccess);

		let nodesHtml = "";
		if (Array.isArray(item?.nodes) && item.nodes.length > 0) {
			for (let n of item.nodes) {
				let nodeUp = (n?.status || "").toUpperCase() === "UP";
				let nodeBadgeClass = nodeUp
					? "badge-light-success text-success border border-success"
					: "badge-light-danger text-danger border border-danger";
				let nodeStatusBadge = nodeUp ? "badge-success" : "badge-danger";
				let localBadge = n?.isLocal ? '<span class="badge badge-secondary ml-1">local</span>' : '';

				nodesHtml += '<span class="badge ' + nodeBadgeClass + ' mr-1 mb-1 p-2">' +
					'<i class="fa fa-server mr-1"></i>' + (n?.nodeID || "-") + ' ' +
					'<span class="badge ' + nodeStatusBadge + ' ml-1">' + (n?.status || "-") + '</span>' +
					localBadge +
				'</span>';
			}
		} else {
			nodesHtml = '<span class="text-muted small">-</span>';
		}

		let rowHtml = '<tr data-service="' + (item?.name || "") + '">' +
			'<td class="text-center seq-cell">' + (index + 1) + '</td>' +
			'<td class="text-center status-cell">' +
				'<span class="status-text ' + statusClass + '">' +
					'<i class="fa ' + statusIcon + ' mr-1"></i>' + statusText +
				'</span>' +
			'</td>' +
			'<td class="text-left font-weight-bold text-dark service-name-cell">' +
				'<i class="fa fa-cube text-primary mr-1"></i>' + (item?.name || "-") +
			'</td>' +
			'<td class="text-center last-access-cell">' +
				'<span class="text-muted"><i class="fa fa-clock-o mr-1"></i>' + lastAccessFormatted + '</span>' +
			'</td>' +
			'<td class="text-left nodes-cell">' + nodesHtml + '</td>' +
		'</tr>';

		tbody.append(rowHtml);
	}

	$("#total_services_count").text(filtered.length + (filtered.length !== services.length ? " of " + services.length : ""));
}
