
jQuery(document).ready( function($) { 

//console.log($('<div>').loadSvg('circle'));


});
/**
 * 
 * @param $
 * @returns
 */
(function($) {
  $.fn.popupModalPerform = function(options) {
    var modal = this;
    // before modal display
    this.on('show.bs.modal', function(e) {
      // $('.modal-body', this).remove
      $('.modal-body', this).html($('<div>').loadSvg('circle'));
      $('.modal-title', this).html($('<div>').loadSvg('equalizer'));
    });

    // modal is showing to user
    this.on('shown.bs.modal', function(e) {
      if (e.relatedTarget) {
        var button = $(e.relatedTarget);
        // check if type is "image" # load image from server
        if (button.data('type') && button.data('type') == 'image'  && button.data('field')) {
          var nid = button.data('nid');
          console.log(nid);
          var field = button.data('field');
          var url = '/statistiquecustom/load-image/' + nid + '/' + field
              + '/auto/auto';
          var result = WBU_SendByAjax(url); // console.log(result);
          $.when( $('.modal-body', this).html(
                  $('<div>').renderCarousel(result.content, button.data('type')))).then(
              function(x) {
                // console.log($(modal+' .modal-body'));
                $(modal + ' .modal-body > .carousel').carousel({
                  interval : 35000,
                // pause: "hover",
                });
                
              });
          $('.modal-title', this).html(result.title);
        }
        //   Check if type is "image-in-data" 
        // # load image from attribute
        if ( button.data('type') && button.data('type') == 'image-in-data'  ) {
          var title = $('.title', e.relatedTarget).text(); 
          $('.modal-title', modal).html(title);
          var CurrentUrlImg= button.data('image-big'); 
          var container = button.data('container');
          var galleries = {};
          //$('.modal-body', this).html('<img src="'+urlImg+'" class="img-fluid" >');
          $.when(
              $('.'+container+' .quadripleParent > a').each(function( index, value ){
                galleries[index]={
                    'image_big':$(value).data('image-big'),
                    'image_thumbnail':$(value).data('image-small'),
                    'title':$('.title', value).text(),
                    'current': (CurrentUrlImg == $(value).data('image-big')) ? true : false,
                };
              })              
              ).then(function(){
                console.log('load in carousel');
                $('.modal-body', modal).html( $('<div>').renderCarousel({content:galleries, type_render:button.data('type')}) );               
              }).then(function(){
                $(modal + ' .modal-body > .carousel').carousel({
                  interval : 7000,
                  pause: "hover",
                });
              });
        }

      }
    });

  };
}(jQuery));

/**
 * 
 * @param $
 * @returns
 */
(function($) {
  $.fn.renderCarousel = function(options) {
    var settings = $.extend({
      content: '...', 
      type_render : '',
      class_carousel : 'text-center',
    }, options);
    var id = 'wbu' + Date.now();
    var carousel_indicators = carousel_item = direction = '';
    ////
    direction += '<a class="carousel-control-prev" href="#' + id
    + '" role="button" data-slide="prev">';
direction += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
direction += '<i class="p-3 bg-dark rounded-circle fas fa-chevron-left"></i>';
direction += '</a>';
direction += '<a class="carousel-control-next" href="#' + id
    + '" role="button" data-slide="next">';
direction += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
direction += '<i class="p-3 bg-dark rounded-circle fas fa-chevron-right"></i>';
direction += '</a>';
////

    if (settings.type_render == 'image') {      
      
      $.each(settings.content, function(index, value) {
        if (index === 0) {
          carousel_indicators += '<li data-target="#' + id
              + '" data-slide-to="' + index
              + '" class="active img_thumbnail"><img class="img-fluid" src="'
              + value.image_thumbnail + '" /></li>';
          carousel_item += '<div class="carousel-item active">';
          carousel_item += '<img class="img-fluid" src="' + value.image_big
              + '" alt="First slide">';
          carousel_item += '</div>';
        } else {
          carousel_indicators += '<li data-target="#' + id
              + '" data-slide-to="' + index
              + '" class="img_thumbnail"><img class="img-fluid" src='
              + value.image_thumbnail + ' /></li>';
          carousel_item += '<div class="carousel-item ">';
          carousel_item += '<img class="img-fluid" src="' + value.image_big
              + '" alt="First slide">';
          carousel_item += '</div>';
        }
      });
      var carousel = '<div id="' + id + '" class="carousel slide '
          + settings.class_carousel + '" data-ride="carousel">';
      // carousel-inner
      carousel += '<div class="carousel-inner ">';
      carousel += carousel_item;
      carousel += '</div>';
      // carousel-indicators
      carousel += '<ol class="carousel-indicators thumbnail">';
      carousel += carousel_indicators;
      carousel += '</ol>';
      //control
      carousel += direction;
      return carousel;
    }
    if (settings.type_render == 'image-in-data') {
      $.each(settings.content, function(index, value) {
        if (value.current) {
          carousel_indicators += '<li data-target="#' + id + '" data-slide-to="' + index + '" class="active img_thumbnail"></li>';
          carousel_item += '<div class="carousel-item active">';
          carousel_item += '<img class="img-fluid" src="' + value.image_big + '" alt="First slide">';
          carousel_item += '</div>';
        }else{
          carousel_indicators += '<li data-target="#' + id + '" data-slide-to="' + index + '" class="img_thumbnail"></li>';
          carousel_item += '<div class="carousel-item ">';
          carousel_item += '<img class="img-fluid" src="' + value.image_big + '" alt="First slide">';
          carousel_item += '</div>';
        }
      });
      var carousel = '<div id="' + id + '" class="carousel slide '
      + settings.class_carousel + '" data-ride="carousel">';
      // carousel-inner
      carousel += '<div class="carousel-inner ">';
      carousel += carousel_item;
      carousel += '</div>';
      // carousel-indicators
      carousel += '<ol class="carousel-indicators thumbnail">';
      carousel += carousel_indicators;
      carousel += '</ol>';
      //control
      carousel += direction;
      return carousel;
    }
    return 'Le contenu n\'a pas pu etre chargé';
  };
}(jQuery));

/**
 * 
 * @param $
 * @returns
 */
(function($) {
  $.fn.WBU_SendByAjax = function(options) {
    var settings = $.extend({
      // url: '', // require
      dataString : '',
      dataType : 'json',
      type : 'POST',
      debug : false,
      debugHtml : false,
      debugReponse : false,
    }, options);

    var reponse = '';
    var ajax = $.ajax({
      type : type,
      data : dataString,
      url : url,
      dataType : DataType,
      async : false,
    })
    // The response is passed to the function
    .done(function(xhr, status) {
      if (settings.debugReponse) {
        console.log(xhr);
        console.log(status);
      }
    })
    // status codes are passed to the function
    .fail(
        function(xhr, status, errorThrown) {
          if (settings.debug) {
            console.log(xhr);
            console.log(status);
          }
          if (settings.debugHtml) {
            $('body').append(
                '<section class="my-5 hidden0">' + xhr.responseText
                    + '</section>');
          }
        })
    // Code to run regardless of success or failure;
    .always(function(xhr, status) {
      // console.log(xhr);
      // console.log('Ajax execute : '+status);
    });
    if (DataType == 'json' && ajax.responseJSON) {
      return ajax.responseJSON;
    }
    return false;
  };
}(jQuery));



/**
 * 
 * @param $
 * @returns
 */
(function($) {
  $.fn.loadSvg = function(svg) {
    if ( svg === "circle") {
      var  icone ='<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"';
      icone +=' width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">';
      icone +='<path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946';
        icone +='s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634';
          icone +='c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>';
            icone +='<path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0';
              icone +='C22.32,8.481,24.301,9.057,26.013,10.047z">';
                icone +='<animateTransform attributeType="xml"';
                  icone +='attributeName="transform"';
                    icone +='type="rotate"';
                      icone +='from="0 20 20"';
                        icone +='to="360 20 20"';
                          icone +='dur="0.5s"';
                            icone +='repeatCount="indefinite"/>';
                              icone +='</path>';
                                icone +='</svg>';
       return icone;
    }
    if ( svg === "equalizer") {
      var  icone ='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"';
      icone +='width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">';
        icone +='<rect x="0" y="0" width="4" height="10" fill="#333">';
          icone +='<animateTransform attributeType="xml"';
            icone +='attributeName="transform" type="translate"';
              icone +='values="0 0; 0 20; 0 0"';
                icone +='begin="0" dur="0.6s" repeatCount="indefinite" />';
                  icone +='</rect>';
                    icone +='<rect x="10" y="0" width="4" height="10" fill="#333">';
                      icone +='<animateTransform attributeType="xml"';
                        icone +='attributeName="transform" type="translate"';
                          icone +='values="0 0; 0 20; 0 0"';
                            icone +='begin="0.2s" dur="0.6s" repeatCount="indefinite" />';
                              icone +='</rect>';
                                icone +='<rect x="20" y="0" width="4" height="10" fill="#333">';
                                  icone +='<animateTransform attributeType="xml"';
                                    icone +='attributeName="transform" type="translate"';
                                      icone +='values="0 0; 0 20; 0 0"';
                                        icone +='begin="0.4s" dur="0.6s" repeatCount="indefinite" />';
                                          icone +='</rect>';
                                            icone +='</svg>';
                                            return icone;
    }
    console.log("svg type not definie");
  }
}(jQuery));

















