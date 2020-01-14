jQuery(document).ready( function($) {  
	/**
	 * manage number
	 */
	(function(){
		var numberInBody = $('.field.field--name-field-numero-de-telephone .field__item').text();
		console.log(numberInBody);
		if(numberInBody){
			$('.views-field.views-field-field-votre-telephone .field-content').text(numberInBody);
		}
	})();
	/**
	 * Display send message watsapp
	 */
	(function(){		
		var href = $('main article.full-theme_builder').attr('data-history-node-id');
		var id  = href;
		href = window.location.protocol+'//'+window.location.host+'/node/'+href;
		var title = $('meta[property="og:title"]').attr('content');
		var message =`Bonjour, je suis intéressé par votre annonce *aptlg-`+id+`* __`+title+`__ 
(`+href+`).`;
		var phone = $('.views-field.views-field-field-votre-telephone .field-content').text();
		phone ='237'+phone;
		var form='<strong class="d-block mt-4 mb-3 color-link">Envoyer un message</strong>';
		form +=`<fieldset class=" js-form-item js-form-type-textfield form-type-textfield js-form-item-votre-nom form-item-votre-nom form-group col-auto">
              <input data-drupal-selector="edit-votre-nom" type="text" id="votre-telephone-watsapp" name="locateur_user_phone" value="" size="60" maxlength="255" placeholder="Votre teléphone" class="form-text form-control">
                </fieldset>`;
		form +=`
		<div class="form-textarea-wrapper">
			<textarea  class="js-webform-counter webform-counter form-textarea required form-control resize-vertical" data-drupal-selector="edit-description" id="message_whatsapp" name="description_whatsapp" rows="5" cols="30" maxlength="1000"  
			required="required" aria-required="true">`+message+`</textarea>
		</div>
		`;
		form +=`<div data-drupal-selector="edit-actions" class="my-3" id="edit-actions--4">
		<a href="https://web.whatsapp.com/send?phone=`+phone+`&text=`+encodeURIComponent(message)+`&source=&data=" class="p-3 btn btn-success fab form-control fab fa-whatsapp sendmessage" target="_blanck"> <span class="d-inline-block pl-2">Envoyer</span></a>
		</div>`;
		$('.bloc-annonceur-infos').append(form);
		
		
		
	})();
});