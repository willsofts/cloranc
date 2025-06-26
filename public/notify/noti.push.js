$(function(){
    let $nnAlert = window.parent.$('#nn_alert_container');
    $nnAlert.on('click', '.alert', function(){
       hideAlert($(this));
    });    
});
function createAlert(opts){
    var icon,
        title,
        text,
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
    text = opts.text || '',
    color = opts.color || 'blue'; 
    isFade = opts.isFade || false;
    serial = opts.serial || undefined; 
    duration = opts.duration || 5;
    let container = window.parent.$("#nn-alert-container");
    let notis = container.find(".alert[data-serial='"+serial+"']");
    if(notis && notis.length > 0 ){
        return false;
    }    
    alertTemplate = '<div class="alert show '+color+'" role="alert" data-serial='+serial+' title='+title+'>'+
							'<div class="alert-icon"><i class="'+icon+'"></i></div>'+
							'<div class="alert-text">'+title+'</div>'+
							'<div class="alert-close">'+
								'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
									'<span aria-hidden="true"><i class="la la-close"></i></span>'+
								'</button>'+
							'</div>'+
						'</div>';
    let $alert = $(alertTemplate);
    if(!isFade) {
        $alert.appendTo(container).removeClass('show').hide();
    } else {
        $alert.appendTo(container);
        intervalNewNotificationAlert($alert,duration);
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
        if (!--duration) { 
            hideAlert($alert);
            clearInterval(countdown);
        } else { 
            intervalNewNotificationAlert($alert,duration,countdown);
        }
    }, 1000);
}
