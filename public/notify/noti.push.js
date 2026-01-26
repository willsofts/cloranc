$(function(){
    let $nnAlert = window.parent.$('#nn_alert_container');
    $nnAlert.on('click', '.alert', function(){
       hideAlert($(this));
    });    
});
function createAlert(opts){
    console.log("createAlert:",opts);
    let icon,
        title,
        alertTemplate,
        color, 
        duration,
        isFade,
        serial;
    if(opts === undefined){
      opts = {};
    }
    icon = opts.icon || 'info-circle';
    title = opts.title || 'New notification';
    color = opts.color || 'blue'; 
    isFade = opts.isFade || false;
    serial = opts.serial || undefined; 
    duration = opts.duration || 5;
    let container = window.parent.$("#nn_alert_container");
    let notis = container.find(".alert[data-serial='"+serial+"']");
    if(notis && notis.length > 0 ){
        return false;
    }    
    alertTemplate = '<div class="alert show '+color+'" role="alert" data-serial='+serial+' title='+title+'>'+
							'<div class="alert-icon"><i class="'+icon+'"></i></div>'+
							'<div class="alert-text">'+title+'</div>'+
							'<div class="alert-close">'+
								'<button type="button" class="close btn-close" data-dismiss="alert" aria-label="Close">'+
								'</button>'+
							'</div>'+
						'</div>';
    let $alert = $(alertTemplate);
    if(isFade) {
        $alert.appendTo(container);
        intervalNewNotificationAlert($alert,duration);
    } else {
        $alert.appendTo(container).removeClass('show').hide();
    }
    let alertShow = container.find(".alert.show");
    if(alertShow.length > 5) { //max display
        hideAlert(alertShow.eq(1));
    }
}
function hideAlert($alert){
    $alert.addClass('animated bounceOutRight').removeClass('show');
    setTimeout(function(){ $alert.hide(); },300);
}
function intervalNewNotificationAlert($alert,duration,countdown){   
    if(countdown) clearInterval(countdown);
    countdown = setInterval(function () {
        if (--duration) { 
            intervalNewNotificationAlert($alert,duration,countdown);
        } else { 
            hideAlert($alert);
            clearInterval(countdown);
        }
    }, 1000);
}
window.onmessage = function(e) {
    console.log("interface: onmessage:",e.data);
    try {
        let payload = JSON.parse(e.data);
        handleRequestMessage(payload);
    } catch(ex) { console.log(ex); }
}
function handleRequestMessage(data) {
    if(data.archetype=="willsofts" && data.type=="language") {
        if(data.language && data.language.trim().length>0) {
            setDefaultLanguage(data.language);
        }
    }
}
