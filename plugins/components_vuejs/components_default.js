jQuery(document).ready( function($) {
	  /**
		 * input_text
		 */
  Vue.component( 'input_text',{
      delimiters: ['${', '}'],
      props: {
        label:{type: String,default: "input type text"},
        id_html:{type: String,default: "edit-inputtypetext"},
        classe:{type: String,default: ""},
        value:[String, Number],   
      },
      template: '#form-template-input',  
      methods: {
        oninput: function (event) {
          this.$emit('input', event.target.value);
       }
     },
  });
  /**
	 * input_select
	 */
  Vue.component( 'input_select',{
      delimiters: ['${', '}'],
      props: {
        label:{type: String,default: "input type text"},
        id_html:{type: String,default: "edit-inputtypetext"},
        classe:{type: String, default: ""},
        value:[String, Number],
        options:{type: [Object, Array],
          default: function () {
              return {'val1':'option 1', 'val2':'option 2', 'valn':'option n'};
            }
        }
      },
      template: '#form-template-select', 
      methods: {
          oninput: function (event) {
            this.$emit('input', event.target.value); // by default
         }
    }, 
  });
  /**
	 * input_text
	 */
Vue.component( 'input_text_v2',{
    delimiters: ['${', '}'],
    props: {
      label:{type: String,default: "input type text"},
      id_html:{type: String,default: "edit-inputtypetext"},
      classe:{type: String,default: ""},
      input:{type:[Object, Array], default: function () {
          return {'value':''};
      }},  
    },
    template: '#form-template-input-v2',
});
/**
 * input_select
 */
Vue.component( 'input_select_v2',{
    delimiters: ['${', '}'],
    props: {
      label:{type: String,default: "input type text"},
      id_html:{type: String,default: "edit-inputtypetext"},
      classe:{type: String, default: ""},
      input:{type:[Object, Array], default: function () {
          return {'value':''};
      }}, 
      options:{type: [Object, Array],
        default: function () {
            return {'val1':'option 1', 'val2':'option 2', 'valn':'option n'};
          }
      }
    },
    template: '#form-template-select-v2', 
});
/**
 * 
 */
Vue.component( 'bootstrap_col_v2',{
delimiters: ['${', '}'],
		  props: {
			  nbr_col:[Object, Array],
			  col:[Object, Array],
			  col_sm:[Object, Array],
			  col_md:[Object, Array],
			  col_lg:[Object, Array],
		  },
		  template: '#template-bootstrap-col-v2', 
		  methods : {
				getNumberColumn : function(prefix='col-') {
					var cols = {};
					cols[prefix + 'auto']=prefix + 'auto';
					for (var i = 1; i <= this.nbr_col.value; i++) {
						cols[prefix + i] = prefix + i;
					}
					return cols;
				},
		  }, 
});
/**
 * 
 */
Vue.component( 'format_field_view',{
delimiters: ['${', '}'],
		  props: {
			  fields:[Object, Array],
			  options:[Object, Array],
		  },
		  template: '#template-view-list-field', 
		  methods : {
		  }, 
});

  
});

// perfomence JavaScript
// https://dev.to/3sanket3/javascript-performance-using-consoletime--consoletimeend-20pd






