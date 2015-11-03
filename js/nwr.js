jQuery(document).ready(function($){

  var breakPoint = 979;

  $(function(){
    $('#left-side li a[title="NW Region"],#left-side li a[title="Resources"]').each(function(){
        $(this).css('border','none');
        $(this).parent('li').html( $(this).text()).addClass('cat_title');
    });
    

  });
  
  moveSidenav();
  $(window).on('resize', function(){
    (!window.requestAnimationFrame) ? setTimeout(moveSidenav, 300) : window.requestAnimationFrame(moveSidenav);
  });

  $('#maindiv').wrap('<div class="body-bottom-2"></div>');
  
  $('.project').click(function(){
    $(this).toggleClass('open');
  });

  $('#left-nav>ul').before('<a href="#menu" class="menu-link"></a>');
  
  $('.menu-link').click(function(){
    $('#left-nav').toggleClass('active');
    $('#maindiv').toggleClass('active');
  });



  function checkWindowWidth() {
    //check window width (scrollbar included)
    var e = window, 
        a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if ( e[ a+'Width' ] >= breakPoint ) {
      return true;
    } else {
      return false;
    }
  }  


  function moveSidenav(){
    var sidenav = $('.sidenav');
    var desktop = checkWindowWidth();
    if ( desktop ) {
      sidenav.detach();
      sidenav.insertAfter('#left-nav+div');
    } else {
      sidenav.detach();
      sidenav.insertAfter('#center');
    }    

  }


});

