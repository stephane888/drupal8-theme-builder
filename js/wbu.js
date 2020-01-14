//https://bootstrapthemes.co/demos?theme=bootstrap-carousel
jQuery(document).ready( function($) {  
  /**
   * la classe 'is-active' est ajouté via un js, on utilise un similaire pour ajouter 'active' dans le li
   */
  (function (Drupal, drupalSettings) {
    Drupal.behaviors.activeLinks = {
      attach: function attach(context) {
        var path = drupalSettings.path;
        var link = '';
        //console.log(drupalSettings.path);
        $('a.nav-link').each(function(){
          link = $(this).attr('data-drupal-link-system-path');
          href = $(this).attr('href');
          if(href){href= href.slice(0, 1);}
          if(path.isFront){ 
            if(href && href == '#'){
              ////
            }
            else{
              if(link == '<front>' ){
                $(this).parent().addClass('active');
              }
            }
          }
          else{
            
            if( link == path.currentPath && ( href == '#' )  ) {
              $(this).parent().addClass('active');
            }
          }
        });
        
      }
    };
  })(Drupal, drupalSettings);
  
  /**
   * .advanced-search-front
   */
  	(function(){  		  		
  		$('.advanced-search-front .title-form-view').append('<i class="fas fa-level-up-alt ml-4"></i><i class="fas fa-level-down-alt ml-4"></i>');
  		setTimeout(function(){
  			$('.advanced-search-front').addClass('open');
  		}, 2000);
  		$('.advanced-search-front .title-form-view').click(function(){
  			if($('.advanced-search-front').hasClass('open')){
  				$('.advanced-search-front').removeClass('open');
  			}else{
  				$('.advanced-search-front').addClass('open');
  			}
  		});
  		$('.advanced-search-front .js-options').click(function(){
  			if($('.advanced-search-front').hasClass('show-options')){
  				$('.advanced-search-front').removeClass('show-options');
  			}else{
  				$('.advanced-search-front').addClass('show-options');
  			}
  		});
  		// on page view-id
  		var hgt = $('.form-view-exposed-custom .form-container-bottom').innerHeight();
  		$('.page-content-header .js-options').click(function(){  			
  			$('.form-view-exposed-custom .form-container + .form-container').slideToggle();
  		});
  		
  	})();
  	
  	/**
  	 * enable tooltiop for all page
  	 */
  	(function(){
  		$(function () {
  		  $('[data-toggle="tooltip"]').tooltip()
  		});
  	})();
  	
  	
  	/**
  	 * menu static
  	 */
  	(function(){
  		var lastScrollTop = 0;
  		var menu = $("#header");
  		$height = 300;//$("#header").innerHeight();
  		var navbarCollapse = function() {
            st = $(window).scrollTop();
            if (st > ($height + 1)) {
            	menu.addClass("site-header--fluid");
            } else {
            	menu.removeClass("site-header--fluid");
            }
            // direction
            if (st > lastScrollTop) {
            	menu.addClass("site-scroll-top");
            	menu.removeClass("site-scroll-bottom");
            } else {
            	menu.removeClass("site-scroll-top"); 
            	menu.addClass("site-scroll-bottom"); 
            }
            lastScrollTop = st;
          };
          navbarCollapse();
          $(window).scroll(navbarCollapse);
  	})();
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  		
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
});