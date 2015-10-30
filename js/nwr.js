	$(document).ready(function() {


  $(function(){
 	$('#left-side li a[title="NW Region"],#left-side li a[title="Resources"]').each(function(){
  		$(this).css('border','none');
  		$(this).parent('li').html( $(this).text()).addClass('cat_title');
	});
    
  });
  

  $('#maindiv').wrap('<div class="body-bottom-2"></div>');
  
  $('.project').click(function(){
	$(this).toggleClass('open');
  });
  
});

