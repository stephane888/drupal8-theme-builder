jQuery(document).ready( function($) {	
	function vueExecuteAfterAjax(){
		$('#custom-form-order').html('<input_select_v2 :input="selectorder" :label="label" :options="options" ></input_select_v2>');
		var sort_by = $('select[name="sort_by"]');
	    var sort_order = $('select[name="sort_order"]');
	    var submit = $('.form-view-exposed-custom .form-submit');
	    var selectorder = sort_by.val()+'__'+sort_order.val();
		new Vue({
	        delimiters : [ '${', '}' ],
	        el : '#custom-form-order',
	        data : {
	        	label:'',
	        	selectorder:{value:selectorder},
	        	options:{},
	        },
	        mounted: function(){
	        	var options={};
	        	$('select[name="sort_by"] option').each(function(){
	        		options[$(this).attr('value')+'__ASC'] = $(this).text() + ' : plus grand';
	        		options[$(this).attr('value')+'__DESC'] = $(this).text() + ' : plus petit';
	        	});
	        	if( options.created__ASC ){
	        		options.created__DESC = ' Plus récentes ';
	        		options.created__ASC = ' Plus anciennes ';
	        	}
	        	if( options.field_prix__ASC ){
	        		options.field_prix__DESC = ' Plus chères ';
	        		options.field_prix__ASC = ' Moins chères ';	        		
	        	}
	        	if( options.field_superficie__ASC ){
	        		options.field_superficie__ASC = ' Plus petite ';
	        		options.field_superficie__DESC = ' Plus grande ';
	        	}
	        	//	
	        	console.log(options);
	        	this.options = options;
	        },
	        watch: {
	        	selectorder: {
	              handler(val){
	               console.log( ' selectorder change ');
	               this.update_sort();
	              },
	             deep: true
	            }
	        },
	        methods: {
	        	update_sort: function(){
	        		var selectorder = this.selectorder.value;
	        		selectorder = selectorder.split('__');
	        		sort_order.val(selectorder[1]);
	        		sort_by.val(selectorder[0]);
	        		this.trigger_form();
	        	},
	        	trigger_form: function(){
	        		submit.trigger('click');
	        	},
	        },
	        
		});
	}
	/**
	 * page theme_buildere
	 */
	  Drupal.behaviors.myModule = {
	    attach: function(context, settings) {
	      $(document).once('mymodule-ajax').ajaxComplete(function (e, xhr, settings) {
	      console.log('ajax load function');
	      vueExecuteAfterAjax();
	      });  
	    }
	  }
	
	function checkComponent() {
		var component_name = [ 'input_select_v2' ], isloaded = true;
        $.each(component_name, function(index, value) {
          if (!(value in Vue.options.components)) {
            isloaded = false;
            console.log(value);
          }
        });
        if (isloaded) {
        	vueExecuteAfterAjax();        	
        }else {
            setTimeout(function() {
                checkComponent();
              },1500);
        }
	}
	checkComponent();
	
});



