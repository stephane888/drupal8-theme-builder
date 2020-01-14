jQuery(document).ready( function($) {
  //console.log($('#putcontent-iframe', parent.document));
  var documentParent = parent.document;
  $('#putcontent-iframe').html('<h1>moimemme</h1>');
  $('#presave').click(function(){
    ///
    var $html = $('#textarea-modal textarea').val();
    $id_textarea = $(this).attr('data-textarea-id');
    console.log($id_textarea);
    $('#'+$id_textarea, documentParent).val($html);
   // Vvveb.Builder.setHtml25($html);
  });
  
  $('#editor-close').click(function(){ //console.log('clode editor');
    $('#drupal-builder-iframe', documentParent).removeClass('active');
    $('html', documentParent).removeClass('vvvbeJSactive');
  });
  
  $('#editor-save-close').click(function(){
    var $html = $('#iframe-wrapper > iframe').contents().find('body').html();
    $id_textarea = $(this).attr('data-textarea-id'); console.log('id to put :'+$id_textarea);
    $('#'+$id_textarea, documentParent).val($html);
    $('#drupal-builder-iframe', documentParent).removeClass('active');
    $('html', documentParent).removeClass('vvvbeJSactive');
  });
  
  $('#editor-save').click(function(){
    var $html = $('#iframe-wrapper > iframe').contents().find('body').html();
    $id_textarea = $(this).attr('data-textarea-id');
    $('#'+$id_textarea, documentParent).val($html);
  });
  
  
  var $html ='<div>';
  $html +='<h1>Notre histoire</h1> seffece '; 
  $html +='</div>'; 
  //console.log($html);
  //Vvveb.Builder.runJsOnSetHtml=false;

//Vvveb.Builder.getHtml();
//Vvveb.Builder.setHtml25($html);
//########################################################################################
// build libray
function buildLibrary(){
  var DataJson = $('#drupal-library-images-json', documentParent).html();
  var DataJson = jQuery.parseJSON(DataJson);
  //console.log(DataJson);
  var select = '<select name="style-image" class="form-control custom-select">';
  var options = function(){ var op='';
    $.each(DataJson['styles'], function( index, value ) {
      op +='<option value="'+index+'">'+value+'</option>';
    });
    return op;
  }
  select +=options();
  select +='</select>';
  $('#drupal-images .drupal-images-select .image-select-style').html(select);
  ////
  var images = function(){ var op='<div class="row">';
    $.each(DataJson['images'], function( index, value ) {
      op +='<div class="col-sm-3 mb-3" data-fid="'+index+'">';
      op +='<img data-fid="'+index+'" src="'+value['medium']+'" >'
      op +='</div>';
    });
    op +='</div>';
    return op;
  }
  $('#drupal-images .drupal-images-lists').html(images());
  ////
  $('#drupal-images .drupal-images-lists img').click(function(){
    $('#drupal-images .drupal-images-lists img').removeClass('img-thumbnail').removeClass('active');
    $(this).addClass('img-thumbnail active');
    var image_style = $('#drupal-images .drupal-images-select .image-select-style select').val();
    var fid = $(this).attr('data-fid');
    var image_url = DataJson['images'][fid][image_style];
    $('#drupal-images .drupal-images-select .image-select-url').html(image_url);
    copyToClipboard(image_url);
    $('#iframe-wrapper > iframe').contents().find('img[data-img-drupalwbu="drupal-image-replace"]').attr('src',image_url);
  });
  $('#drupal-images .drupal-images-lists img').dblclick(function(){
    $('#drupal-images .drupal-images-lists img').removeClass('img-thumbnail').removeClass('active');
    $(this).addClass('img-thumbnail active');
    var image_style = $('#drupal-images .drupal-images-select .image-select-style select').val();
    var fid = $(this).attr('data-fid');
    var image_url = DataJson['images'][fid][image_style];
    $('#drupal-images .drupal-images-select .image-select-url').html(image_url);
    copyToClipboard(image_url);
    $('#iframe-wrapper > iframe').contents().find('img[data-img-drupalwbu="drupal-image-replace"]').attr('src',image_url);
    $('#drupal-images').modal('hide');
  } );
  ////
  $('#iframe-wrapper > iframe').contents().on("dblclick", function(event) {
    //console.log('hello');
    //console.log(event);
  }) ;
}
buildLibrary();

function copyToClipboard(data) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(data).select();
  document.execCommand("copy");
  $temp.remove();
  console.log('data copy : '+data);
}
//########################################################################################
Vvveb.Builder.init('demo/default/index.html', function() {
  ///
  console.log('afterInit');
  //Vvveb.Builder.setHtml($html);
});
// init VvvebJS
Vvveb.Gui.init();
Vvveb.FileManager.init();
Vvveb.FileManager.addPages(
[
  {name:"default-page", title:"Page par defaut",  url: "demo/default/index.html"},
]);

Vvveb.FileManager.loadPage("default-page");
});

