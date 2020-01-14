jQuery(document).ready( function($) {
  //// link 
  var loc = window.location.pathname;
  var path = loc.substring(0, loc.lastIndexOf("/"));
  var base_sort = 500;
  ////
  //Vvveb.ComponentsGroup['Bootstrap 4'] = [];
  //Vvveb.ComponentsGroup['Models'] = ["section/wbu-hero","section/schedule","section/speakers"];
  //var directoryName = path.substring(path.lastIndexOf("/")+1);
  ///
  /*
  var dfrr = $('<section>');
  dfrr.html('bonjourkksa888');
  console.log(dfrr);
  console.log(dfrr.html());
  //var iframeDemo = WBU_LoadPartPage(path+'/demo/default/index.html', '#wbu-hero');
  var iframeDemo = WBU_SendByAjax(path+'/demo/default/section-hero.html', dataString='', DataType='html', type='GET');
  console.log(iframeDemo);  
 /* console.log($(iframeDemo).html());
  console.log(iframeDemo[0]);
  console.log($(iframeDemo[0]));
  console.log($(iframeDemo[0]).html());
  */
  
  
  
  
  
  
  
  
  Vvveb.Components.extend("html/button", "html/button2", {
    properties: [
    {
      name: "Button",
      key: "active",
      htmlAttr: "class",
      validValues: ["", "btn"],
      inputtype: ToggleInput,
      data: {
          on: "btn",
          off: ""
      }
    },
    ]
});

  Vvveb.Components.extend("html/link", "html/link2", {
    properties: [
      {
        name: "Button",
        key: "active",
        htmlAttr: "class",
        validValues: ["", "btn"],
        inputtype: ToggleInput,
        data: {
            on: "btn",
            off: ""
        }
      },
      {
        name: "Btn class",
        key: "btn-class",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues:BntValid(),
        data: {
          options:BntOptions(),
        }
      }
      ]
  });
  
  Vvveb.Components.extend("_base", "html/gridrow2", {
    classes: ["row"],
    image: "icons/grid_row.svg",
    name: "Ligne",
    properties: [
      {
        name: "Orientation",
        key: "orient",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: OrientValid(),
        data: {
          options: OrientOptions(),
        }
      },
      {
        name: "Orientation sur mobile",
        key: "orient-m",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: OrientValid('sm'),
        data: {
          options: OrientOptions('sm'),
        }
      },
      {
        name: "Orientation sur tablette",
        key: "orient-m",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: OrientValid('md'),
        data: {
          options: OrientOptions('md'),
        }
      },
      {
        name: "Orientation sur desktop",
        key: "orient-lg",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: OrientValid('lg'),
        data: {
          options: OrientOptions('lg'),
        }
      }
    ]
  } ) ;
  ////
  Vvveb.Components.extend("_base", "section/wbu-hero", {
    classes: ["wbu-hero"],
    name: "Hero",
    html: WBU_SendByAjax(path+'/demo/default/section-hero.html', dataString='', DataType='html', type='GET'),
    image: "icons/container.svg",
    col:12,
    inline:true,
  });
////
  Vvveb.Components.extend("_base", "section/schedule", {
    classes: ["wbu-schedule-body"],
    name: "Schedule body",
    html: WBU_SendByAjax(path+'/demo/default/schedule.html', dataString='', DataType='html', type='GET'),
    image: "icons/container.svg",
    col:12,
    inline:true,
  });
////
  Vvveb.Components.extend("_base", "section/speakers", {
    classes: ["wbu-speakers"],
    name: "Speakers",
    html: WBU_SendByAjax(path+'/demo/default/speakers.html', dataString='', DataType='html', type='GET'),
    image: "icons/container.svg",
    col:12,
    inline:true,
  });
  
  /// pagging and margin
  
  Vvveb.Components.extend("_base", "_base", {
    properties: [
      {
        key: "padding_bt_header",
        inputtype: SectionInput,
        name:false,
        sort: base_sort++,
        data: {header:"Marge interne", expanded:false},
      },
      {
        name:"P-",
        key: "padding_bt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid(),
        data: { options: paddingOptions(), }
      },
      {
        name:"P-sm",
        key: "padding_btsm",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('-sm'),
        data: { options: paddingOptions('-sm'), }
      },
      {
        name:"P-sm",
        key: "padding_btmd",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('-md'),
        data: { options: paddingOptions('-md'), }
      },
      {
        name:"P-lg",
        key: "padding_btlg",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('-lg'),
        data: { options: paddingOptions('-lg'), }
      },
      {
        name:"Py",
        key: "padding_bty",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('y'),
        data: { options: paddingOptions('y'), }
      },
      {
        name:"Py-sm",
        key: "padding_btsmy",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('y-sm'),
        data: { options: paddingOptions('y-sm'), }
      },
      {
        name:"Py-md",
        key: "padding_btmd",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('y-md'),
        data: { options: paddingOptions('y-md'), }
      },
      {
        name:"Py-lg",
        key: "padding_btlg",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('y-lg'),
        data: { options: paddingOptions('y-lg'), }
      },
      {
        name:"Px",
        key: "padding_btx",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('x'),
        data: { options: paddingOptions('x'), }
      },
      {
        name:"Px-sm",
        key: "padding_btsmx",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('x-sm'),
        data: { options: paddingOptions('x-sm'), }
      },
      {
        name:"Px-md",
        key: "padding_btmdx",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('x-md'),
        data: { options: paddingOptions('x-md'), }
      },
      {
        name:"Px-lg",
        key: "padding_btlgx",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('x-lg'),
        data: { options: paddingOptions('x-lg'), }
      },
      {
        name:"Pt",
        key: "padding_btt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('t'),
        data: { options: paddingOptions('t'), }
      },
      {
        name:"Pt-sm",
        key: "padding_btsmt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('t-sm'),
        data: { options: paddingOptions('t-sm'), }
      },
      {
        name:"Pt-md",
        key: "padding_btmdt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('t-md'),
        data: { options: paddingOptions('t-md'), }
      },
      {
        name:"Pt-lg",
        key: "padding_btlgt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('t-lg'),
        data: { options: paddingOptions('t-lg'), }
      },
      {
        name:"Pb",
        key: "padding_btb",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('b'),
        data: { options: paddingOptions('b'), }
      },
      {
        name:"Pb-sm",
        key: "padding_btsmb",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('b-sm'),
        data: { options: paddingOptions('b-sm'), }
      },
      {
        name:"Pb-md",
        key: "padding_btmdb",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('b-md'),
        data: { options: paddingOptions('b-md'), }
      },
      {
        name:"Pb-lg",
        key: "padding_btlgb",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('b-lg'),
        data: { options: paddingOptions('b-lg'), }
      },
      {
        name:"Pl",
        key: "padding_btl",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('l'),
        data: { options: paddingOptions('l'), }
      },
      {
        name:"Pl-sm",
        key: "padding_btsml",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('l-sm'),
        data: { options: paddingOptions('l-sm'), }
      },
      {
        name:"Pl-md",
        key: "padding_btmdl",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('l-md'),
        data: { options: paddingOptions('l-md'), }
      },
      {
        name:"Pl-lg",
        key: "padding_btlgl",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('l-lg'),
        data: { options: paddingOptions('l-lg'), }
      },
      {
        name:"Pr",
        key: "padding_btr",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('r'),
        data: { options: paddingOptions('r'), }
      },
      {
        name:"Pr-sm",
        key: "padding_btsmr",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('r-sm'),
        data: { options: paddingOptions('r-sm'), }
      },
      {
        name:"Pr-md",
        key: "padding_btmdr",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('r-md'),
        data: { options: paddingOptions('r-md'), }
      },
      {
        name:"Pr-lg",
        key: "padding_btlgr",
        htmlAttr: "class",
        sort: base_sort++,        
        col:3,
        inline:true,
        inputtype: SelectInput,
        validValues: paddingValid('r-lg'),
        data: { options: paddingOptions('r-lg'), }
      },
    ]
  } ) ;/* */
  
  /// add text commporment
  Vvveb.Components.extend("_base", "_base", {
    properties: [
      {
        key: "text_bt_header",
        inputtype: SectionInput,
        name:false,
        sort: base_sort++,
        data: {header:"Text alignment", expanded:false},
      },
      {
        name:"Align",
        key: "text_bt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:12,
        inline:true,
        inputtype: SelectInput,
        validValues: textAlignValid(),
        data: { options: textAlignOptions(), }
      },
     ]
  });
  
  /// add animation on scroll
  Vvveb.Components.extend("_base", "_base", {
    properties: [
      {
        key: "anim_bt_header",
        inputtype: SectionInput,
        name:false,
        sort: base_sort++,
        data: {header:"Animation on Scroll", expanded:false},
      },
      {
        name: "Button",
        key: "anim_bt_active",
        htmlAttr: "class",
        sort: base_sort++, 
        col:12,
        inline:true,
        validValues: ["", "wbu-scroll"],
        inputtype: ToggleInput,
        data: {
            on: "wbu-scroll",
            off: ""
        }
      },
      {
        name:"Select animation",
        key: "anim_bt",
        htmlAttr: "data-wbu-scroll-class",
        sort: base_sort++,        
        col:12,
        inline:true,
        inputtype: SelectInput,
        validValues: animScrollValid(),
        data: { options: animScrollOptions(), }
      },{
        name: "Duration s",
        key: "anim_bt_duration",
        htmlAttr: "data-wbu-scroll-duration",
        sort: base_sort++,
        inline:true,
        col:12,
        inputtype: TextInput
      },{
        name: "Délai s",
        key: "anim_bt_delai",
        htmlAttr: "data-wbu-scroll-delais",
        sort: base_sort++,
        inline:true,
        col:12,
        inputtype: TextInput
      }
     ]
  });
  
  
  
  /////////////
    
  function BntOptions(){
    return [{
          value: "btn-default",
          text: "Default"
      }, {
          value: "btn-primary",
          text: "Primary"
      }, {
          value: "btn btn-info",
          text: "Info"
      }, {
          value: "btn-success",
          text: "Success"
      }, {
          value: "btn-warning",
          text: "Warning"
      }, {
          value: "btn-info",
          text: "Info"
      }, {
          value: "btn-light",
          text: "Light"
      }, {
          value: "btn-dark",
          text: "Dark"
      }, {
          value: "btn-outline-primary",
          text: "Primary outline"
      }, {
          value: "btn btn-outline-info",
          text: "Info outline"
      }, {
          value: "btn-outline-success",
          text: "Success outline"
      }, {
          value: "btn-outline-warning",
          text: "Warning outline"
      }, {
          value: "btn-outline-info",
          text: "Info outline"
      }, {
          value: "btn-outline-light",
          text: "Light outline"
      }, {
          value: "btn-outline-dark",
          text: "Dark outline"
      }, {
          value: "btn-link",
          text: "Link"
      },
      {
        value: "btn-none",
        text: "No link"
      },
      ];
  }
  
  /**
   * 
   */
  function BntValid(){
    return ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-info", "btn-light", "btn-dark", "btn-outline-primary", "btn-outline-info", "btn-outline-success", "btn-outline-warning", "btn-outline-info", "btn-outline-light", "btn-outline-dark", "btn-link", "btn-none"];
  }
  
  /**
   * 
   */
  function OrientValid(screen=''){
    if(screen != ''){screen = screen+'-';}
    return ["flex-"+screen+"row","flex-"+screen+"row-reverse","flex-"+screen+"column","flex-"+screen+"column-reverse"];
  }
  
  /**
   * 
   */
  function OrientOptions(screen=''){
    if(screen != ''){screen = screen+'-';}
    return [
      {value: "flex-"+screen+"row",text: "alignement horizontal"},
      {value: "flex-"+screen+"row-reverse",text: "alignement horizontal inverse"},
      {value: "flex-"+screen+"column",text: "alignement vertical"},
      {value: "flex-"+screen+"column-reverse",text: "alignement vertical inverse"},
    ];
  }
     
  /**
   * 
   */
  function paddingValid(screen=''){
    //if(screen != ''){ screen = '-'+screen; }
    return ["p"+screen+"-none","p"+screen+"-0","p"+screen+"-1","p"+screen+"-2","p"+screen+"-3","p-4","p"+screen+"-5"];
  }
  
  /**
   * 
   */
  function paddingOptions(screen=''){
    //if(screen != ''){ screen = '-'+screen; }
    return [
      {value: "p"+screen+"-none",text: "p-none"},
      {value: "p"+screen+"-0",text: "p-0"},
      {value: "p"+screen+"-1",text: "p-1"},
      {value: "p"+screen+"-2",text: "p-2"},
      {value: "p"+screen+"-3",text: "p-3"},
      {value: "p"+screen+"-4",text: "p-4"},
      {value: "p"+screen+"-5",text: "p-5"},
    ];
  }
  
  /**
   * 
   */
  function textAlignValid(){
    return ["text-left","text-center","text-right","text-justify"];
  }
  /**
   * 
   */
  function textAlignOptions(){
    return [
      {value: "text-left",text: "text-left"},
      {value: "text-center",text: "text-center"},
      {value: "text-right",text: "text-right"},
      {value: "text-justify",text: "text-justify"},
    ];
  }
  
  /**
   * 
   */
  function animScrollValid(){
    return ["zoomOut","zoomOut2","zoomOut3","slideInTop","slideInBottom"];
  }
  
  /**
   * 
   */
  function animScrollOptions(){
    return [
      {value: "zoomOut",text: "zoomOut"},
      {value: "zoomOut2",text: "zoomOut3"},
      {value: "slideInTop",text: "slideInTop"},
      {value: "slideInBottom",text: "slideInBottom"},
    ];
  }
  
  /**
   * load part of html
   */
  function WBU_LoadPartPage(url, block=''){
    var $div = $('<div>');//// Creation d'une div en memoire    
    var $html = $('<section>');
    var result = $div.load(url+' '+block, function( response, status, xhr ){
        $html.html($(this).html());      
        console.log(this);
        console.log($(this).html());
        console.log(response);
        console.log(status);
        console.log(xhr);
        console.log($div);
        //return ($(this).html());
    });
    if(result && result.length > 0){
      return $html.html();
    }
  };
  
  /**
   * send data by ajax
   */
  function WBU_SendByAjax(url, dataString='', DataType='json', type='POST'){
    var reponse ='';
    var iframeModel=$('<div>');
    var ajax = $.ajax({type:type,data:dataString,url:url,dataType : DataType,async: false,})
    // The response is passed to the function
    .done(function( xhr, status ) {
      /*
      console.log(xhr);
      iframeModel.html(xhr);
      console.log($(xhr).find('#wbu-hero'));
      console.log(iframeModel);*/
      //console.log(status);
    })
    // status codes are passed to the function
    .fail(function( xhr, status, errorThrown ) {
      console.log(xhr); 
      console.log(status); 
      //console.log(errorThrown);
      //$('body').append('<section class="my-5 hidden0">'+xhr.responseText+'</section>');
    })
    // Code to run regardless of success or failure;
    .always(function( xhr, status ) {
      //console.log(xhr);
      //console.log('Ajax execute : '+status);
    });
    //console.log('reponse')
    //console.log(ajax);
    if(DataType=='json' && ajax.responseJSON ){ return ajax.responseJSON; }
    if(DataType=='html' && ajax.status == 200 ){ return ajax.responseText;}
  }; 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});