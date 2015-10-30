	/* Date Changed: 10/07/2015
Developer: Lucia Bohorquez
Description: New sccordion-Supports IE 11. JS leaves first panel open by default.
*/



$(document).ready(function(){
 
    activePanel = $("#accordion div.panel:first");
    $(activePanel).addClass('active');
 
    $("#accordion").delegate('.panel', 'click', function(e){
     if( ! $(this).is('.active') ){
			$('#accordion .panel').removeClass('active');
			$(this).addClass('active');
			activePanel = this;
		 };
    });
});