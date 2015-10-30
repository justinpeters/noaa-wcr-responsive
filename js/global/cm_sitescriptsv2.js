		/* Author: 

*/

/*
 * Initializing Menus, and bounding handelers
 */
function initMenu() {
	
  // Make sure all menus are hidden
  $('.left_navigation ul li ul').hide();
  
  // Adding Arrows for submenus
  $('.left_navigation > ul > li' ).has('ul').addClass('parentClose');
  
  $('.left_navigation li a').click(
    function(e) {
    	
     		var checkElement = $(this).next();
			var clickedElement = $(this);
			var parentElement = $(this).parent();
			if(parentElement.hasClass('parentOpen') || parentElement.hasClass('parentClose')) {
				//e.preventDefault();
			}
			if (clickedElement.is('li a')) {
				if(clickedElement.hasClass('m_active')) {
					clickedElement.removeClass('m_active');
				} else {
						$('.left_navigation li a').removeClass('m_active');
						clickedElement.addClass('m_active');
				}
				
				//parentOpen
			}
			
	  // menu open - closing it		
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
					checkElement.slideUp(400, 'swing');
					$('.left_navigation ul > li').has('ul').removeClass('parentOpen').addClass('parentClose');
					parentElement.removeClass('parentOpen');
					parentElement.addClass('parentClose');
        }
      // Menu is closed - Opening it
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      	$('.left_navigation ul > li').has('ul').removeClass('parentOpen').addClass('parentClose');
      	parentElement.removeClass('parentClose');
		parentElement.addClass('parentOpen');
        $('.left_navigation li ul:visible').slideUp(400, 'swing');
        checkElement.slideDown(400, 'swing');
		
        }
      }
    );
  }
  
  
/*
 * Main Slider
 * 
 */
function initSlider() {
	
	var $sItem = $('#slide_show ul li'); // Slider Item
	var arrayLen = $sItem.length;
	
	$('#slide_show').append('<div id="number_menu"></div>');
	
	// Assign images as background
	$sItem.wrapInner('<div class="slider_image" />');
	var $sImg = $('#slide_show ul li div.slider_image'); // Image Div
	$sImg.each(function() {$(this).css("background", "url(" + $(this).parent().attr('title')+ ") no-repeat")});
	
	// Add Number Navigation
	$sItem.each(function(index) {
    $('#slide_show #number_menu').append( '<a href="#" title="'+ index +'">' + ($sItem.length - index) + '</a>' );
});

	// Show the first image
	$('#slide_show ul').fadeIn(500)
	$sItem.hide();
	$sItem.last().show();
	$('#slide_show #number_menu a').last().addClass('active_t');
	
	$('#slide_show #number_menu a').click(function(e) {
		// check if not selected
		if(!$(this).hasClass('active_t')) {
			e.preventDefault();
			var nextSlide = $('#slide_show ul li').eq($(this).attr('title'));
			
				$('#slide_show ul li').fadeOut(1500);
				$('#slide_show ul li p').fadeOut(500);
	    	nextSlide.fadeIn(1500);
	    		nextSlide.find('p').fadeIn(1500);	    		
	    	
	    	$('#slide_show #number_menu a').removeClass('active_t');
	    	$(this).addClass('active_t');
	    	
	    	clearInterval(slideTimer);
		    slideTimer = setInterval(function(){ doChange(); }, '8000');

	  }
	  
 
	});
	// automatic rotation
	
		var slideTimer = setInterval(function(){ doChange(); }, '8000');

	
	function doChange() {
		// check which image is active
		var arrayLen = $sItem.length;
		var currentPanel = $('#slide_show #number_menu a.active_t').attr('title');
		
		if( currentPanel > 0 ) {
			currentPanel--;
		} else {
			currentPanel = arrayLen-1;
			
		}
		$('#slide_show #number_menu a').eq(currentPanel).click();
	}
}
   
   
 /* 
  * Document Ready Function!
  */
$(document).ready(function() {
	initMenu();
	if($('#slide_show')) {
		initSlider();
	}
	
	if($('#regions-accordion')) {
		$('#regions-accordion dl').fadeIn(500);
		$('#regions-accordion').easyAccordion({ 
	   		slideNum: false	
		});
	}
	
	if($('#search_form > input:text')) {
		$searchTxtBx = $('#search_form > input:text');
		$searchTxtBx.val($searchTxtBx.attr('title'));
		$searchTxtBx.focus( function() {
			if ($searchTxtBx.val() == $searchTxtBx.attr('title')) {
				$searchTxtBx.val('');
			}
		});
		$searchTxtBx.blur( function() {
			if ($searchTxtBx.val() == '') {
				$searchTxtBx.val($searchTxtBx.attr('title'));
			}
		});
	}
	

});  // END OF READY 