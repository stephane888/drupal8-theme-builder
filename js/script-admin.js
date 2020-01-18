var config_theme_builder = {};

(function ($, Drupal) {

	function doSomething(context) {
		// This ensures the code is only run once:
		$(context).find(".my-selector").once("some-arbitrary-key").each(function () {
			// Do stuff here. It will only be executed once.
		});
	}

	function editTextarea(context) {
		$('.edit-via-vvvbejs', context).once("some-arbitrary-key").click(function () {
			$id_textarea = $(this).data('textarea-id');
			var html = $('#' + $id_textarea).val();
			//
			$('#drupal-builder-iframe > iframe').contents().find('iframe').contents().find('body').html(html);
			$('#drupal-builder-iframe > iframe').contents().find('#textarea-modal #presave ').attr('data-textarea-id', $id_textarea);
			console.log($('#drupal-builder-iframe > iframe').contents().find('#editor-save-close'));
			if ($('#drupal-builder-iframe > iframe').contents().find('#editor-save-close').length > 0) {
				$('#drupal-builder-iframe > iframe').contents().find('#editor-save-close').attr('data-textarea-id', $id_textarea);
			}
			else {
				console.log('Error select id ');
			}
			$('#drupal-builder-iframe').addClass('active');
			$('html').addClass('vvvbeJSactive');
		});
	}

	/**
       *  Preview content in admin edition
        */
	function perfomTextarea() {
		jQuery('#theme_builder-contents').find('textarea').once("some-arbitrary-key").each(function (i, k) {
			$(this).css({ display: 'none' });
			var id = $(this).attr('id');
			var content = $(this).val();
			$('div[data-textarea-id="' + id + '"] > iframe').css({ 'width': '100%', 'min-height': '50px', 'max-height': '500px', border: 'none', 'margin-top': '30px' });
			var myFrame = $('div[data-textarea-id="' + id + '"] > iframe').contents().find('body');
			myFrame.html(content);
			// head
			var myFrameHead = $('div[data-textarea-id="' + id + '"] > iframe').contents().find('head');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/css/bootstrap-overlay.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/plugins/animate/animate.min.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/css/style.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/css/fontawesome/css/all.min.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/css/fontawesome/css/brands.min.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/css/fontawesome/css/fontawesome.min.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/css/fontawesome/css/regular.min.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/css/fontawesome/css/solid.min.css" />');
			myFrameHead.append('<link rel="stylesheet" type="text/css" href="/themes/theme_builder/plugins/TimeCircles-master/inc/TimeCircles.css" />');
			myFrameHead.append('<link rel="stylesheet" media="all" href="https://fonts.googleapis.com/css?family=Rubik:400,500,700,900" />');
			// JS
		});
	};

	/**
	 *
	 */
	Drupal.behaviors.someArbitraryKey = {
		attach: function (context, settings) {
			config_theme_builder = settings.theme_builder;
			doSomething(context);
			perfomTextarea();
			editTextarea(context);
			console.log(config_theme_builder);
		}
	};

}(jQuery, Drupal));

jQuery(document).ready(function ($) {

	///
	(function () {
		$(".wbu-ui-sortable > .details-wrapper").sortable({
			axis: "y",
			cursor: "move",
			handle: ".wbu-ui-state-default > summary",
			//classes : {"ui-sortable" : "wbu-ui-state-default"},
			beforeStop: function (event, ui) {
				//console.log(event);
				//console.log(ui);
				//console.log('Dom beforeStop ');
			},
			change: function (event, ui) {
				//console.log('Dom change');
			},
			receive: function (event, ui) {
				//console.log('Dom receive');
			},
			stop: function (event, ui) {
				$('details.wbu-ui-state-default', this).each(function (index, value) {
					index++;
					//console.log(index);
					//console.log($('textarea', value));
					$('.details-wrapper > .form-item > .form-textarea-wrapper textarea', value).attr('name', 'theme_builder_section' + index + 'desccription');
				});
			}
		});
		$(".wbu-ui-sortable > .details-wrapper").disableSelection({
			//classes : { "ui-sortable" : "wbu-ui-state-default" }
		});
	})();


	/**
	 * vueJS-bp-bootstrap
	 */
	$('.vueJS-bp-bootstrap').each(function () {
		var textarea = $(this).attr('data-textarea');
		//console.log(textarea);
		var templates = {
			'bootstrap-grid': 'Bootstrap Grid',
			'owl': 'Owl carousel',
		};
		new Vue({
			delimiters: ['${', '}'],
			el: '#' + $(this).attr('id'),
			data: {
				templates: templates,
				bp: {
					nbr_col: { value: 12 },
					template: { value: 12 },
					formatter: { value: '' },
					col: { value: '' },
					col_sm: { value: '' },
					col_md: { value: '' },
					col_lg: { value: '' },
					fields: {},
				},
				formatter: { value: '' },
				textarea: '#id-' + textarea,
				show_formatter: false,
				fields: {},
				options: {},
				formatter_options: {},
			},
			mounted: function () {
				var self = this;
				if ($(this.textarea).val().length > 0) {
					//update value.
					//console.log(this.textarea);
					//var bp = $.merge( this.bp, JSON.parse( $(this.textarea).val() ) );
					//self.bp = $.merge( bp, this.bp );
					var bp = JSON.parse($(this.textarea).val());
					var bp_old = self.bp;
					$.each(bp, function (k, l) {
						if (bp_old[k]) { bp_old[k] = l; }
					});
					self.bp = bp_old;
					//console.log(bp_old);
					/*  */
				}
				/**
				 *
				 */
				$.each(window[textarea], function (j, k) {
					window[textarea][j]['data'] = { value: '' };
				});

				if (self.bp && self.bp.fields) {
					$.each(self.bp.fields, function (n, o) {
						if (window[textarea][n] && window[textarea][n]['data']) {
							window[textarea][n]['data'] = o.data;
						}
					});
				}
				this.fields = window[textarea];
				/**
				 *
				 */
				if (self.bp.formatter) {
					self.formatter = self.bp.formatter;
				}
				/**
				 * build formatter_options
				 */
				var formatter_options = { 'none': 'Aucun' };
				$.each(config_theme_builder.layouts, function (j, k) {
					formatter_options[j] = j;
				});
				self.formatter_options = formatter_options;
			},
			watch: {
				bp: {
					handler(val) {
						//console.log( ' bp change ');
						//console.log(this.fields);
						$(this.textarea).val(JSON.stringify(this.bp));
						//
						this.check_formatter();
					},
					deep: true
				},
				formatter: {
					handler(val) {
						//console.log( ' Bp change : formatter');
						this.bp.formatter = this.formatter;
						this.check_formatter();
					},
					deep: true
				},
				fields: {
					handler(val) {
						//console.log( ' Bp change : fields');
						this.bp.fields = this.fields;
					},
					deep: true
				},
			},
			methods: {
				return_fields: function (index) {

				},
				check_formatter: function () {
					//console.log(' Change by select ');
					var self = this;
					if (this.formatter && this.formatter.value == 'node_teaser_theme_builder') {
						this.show_formatter = true;
						this.options = config_theme_builder.layouts[this.formatter.value];
						/*
							this.options = config_theme_builder.layouts[this.bp.formatter.value];
							$.each( this.options, function(j,l){
						 		 self.bp.fields[j] = {value:''};
							});
						*/
					} else if (this.formatter && this.formatter.value == 'block_theme_builder_link') {
						this.show_formatter = true;
						this.options = config_theme_builder.layouts[this.formatter.value];
						/*
							this.options = config_theme_builder.layouts[this.bp.formatter.value];
							$.each( this.options, function(j,l){
						 		 self.bp.fields[j] = {value:''};
							});
						*/
					}
					else if (this.formatter && (this.formatter.value != 'none' && this.formatter.value != '')) {
						this.show_formatter = true;
						this.options = config_theme_builder.layouts[this.formatter.value];
					}
					else {
						this.show_formatter = false;
					}
				}
			},
			/**/
		});
	});
});
