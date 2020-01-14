jQuery(document).ready( function($) {
  //// link 
  var loc = window.location.pathname;
  var path = loc.substring(0, loc.lastIndexOf("/"));
  var base_sort = 500;
  ////
  //Vvveb.ComponentsGroup['Bootstrap 4'] = [];
  Vvveb.ComponentsGroup['Models'] = ["section/wbu-hero","section/schedule","section/speakers","section/testimonial","section/parner","section/bloc-infos"];
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
////
  Vvveb.Components.extend("_base", "section/testimonial", {
    classes: ["wbu-testimonial"],
    name: "Testimonial",
    html: WBU_SendByAjax(path+'/demo/default/testimonial.html', dataString='', DataType='html', type='GET'),
    image: "icons/container.svg",
    col:12,
    inline:true,
  });
////
  Vvveb.Components.extend("_base", "section/parner", {
    classes: ["wbu-partner"],
    name: "Partener",
    html: WBU_SendByAjax(path+'/demo/default/partner.html', dataString='', DataType='html', type='GET'),
    image: "icons/container.svg",
    col:12,
    inline:true,
  });
////
  Vvveb.Components.extend("_base", "section/bloc-infos", {
    classes: ["wbu-bloc-infos"],
    name: "Bloc-infos",
    html: WBU_SendByAjax(path+'/demo/default/bloc-infos.html', dataString='', DataType='html', type='GET'),
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
        name: "Délai en seconde",
        key: "anim_bt_delai",
        htmlAttr: "data-wbu-scroll-delais",
        sort: base_sort++,
        inline:true,
        col:12,
        inputtype: TextInput
      }
     ]
  });
  
  //// add bacgground  class
  Vvveb.Components.extend("_base", "_base", {
    properties: [
      {
        key: "bg_bt_header",
        inputtype: SectionInput,
        name:false,
        sort: base_sort++,
        data: {header:"Colors and Background", expanded:false},
      },
      {
        name:"Background class bootstrap",
        key: "bg_bt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:12,
        inline:true,
        inputtype: SelectInput,
        validValues: bgClassValid(),
        data: { options: bgClassOptions(), }
      },
      {
        name:"colors class bootstrap",
        key: "cl_bt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:12,
        inline:true,
        inputtype: SelectInput,
        validValues: clClassValid(),
        data: { options: clClassOptions(), }
      },
      {
        name:"Background class mdbootstrap",
        key: "bgmd_bt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:12,
        inline:true,
        inputtype: SelectInput,
        validValues: bgmbClassValid(),
        data: { options: bgmbClassOptions(), }
      },
      {
        name:"Background densité mdbootstrap",
        key: "bgmddens_bt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:12,
        inline:true,
        inputtype: SelectInput,
        validValues: bgmbDenClassValid(),
        data: { options: bgmbDenClassOptions(), }
      },
     ]
  });
  
/// add text commporment
  Vvveb.Components.extend("_base", "_base", {
    properties: [
      {
        key: "border_bt_header",
        inputtype: SectionInput,
        name:false,
        sort: base_sort++,
        data: {header:"Borders and radius", expanded:false},
      },
      {
        name:"Borders",
        key: "border_bt",
        htmlAttr: "class",
        sort: base_sort++,        
        col:6,
        inline:true,
        inputtype: SelectInput,
        validValues: bordersValid(),
        data: { options: bordersOptions(), }
      },
      {
        name:"Borders remove",
        key: "border_btremove",
        htmlAttr: "class",
        sort: base_sort++,        
        col:6,
        inline:true,
        inputtype: SelectInput,
        validValues: bordersRemoveValid(),
        data: { options: bordersRemoveOptions(), }
      },
      {
        name:"Borders color",
        key: "border_btcolor",
        htmlAttr: "class",
        sort: base_sort++,        
        col:6,
        inline:true,
        inputtype: SelectInput,
        validValues: bordersColorValid(),
        data: { options: bordersColorOptions(), }
      },
      {
        name:"Borders radius",
        key: "border_btradius",
        htmlAttr: "class",
        sort: base_sort++,        
        col:6,
        inline:true,
        inputtype: SelectInput,
        validValues: bordersRadiusValid(),
        data: { options: bordersRadiusOptions(), }
      },
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
    return ["p"+screen+"-none","p"+screen+"-0","p"+screen+"-1","p"+screen+"-2","p"+screen+"-3","p"+screen+"-4","p"+screen+"-5"];
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
   * 
   */
  function bgClassValid(){
    return ["bg-primary","bg-secondary","bg-success","bg-danger","bg-warning","bg-info","bg-light","bg-dark","bg-white","bg-transparent","bg-none"];
  }
  
  /**
   * 
   */
  function bgClassOptions(){
    return [
      {value: "bg-primary",text: "bg-primary"},
      {value: "bg-secondary",text: "bg-secondary"},
      {value: "bg-success",text: "bg-success"},
      {value: "bg-danger",text: "bg-danger"},
      {value: "bg-warning",text: "bg-warning"},
      {value: "bg-info",text: "bg-info"},
      {value: "bg-light",text: "bg-light"},
      {value: "bg-dark",text: "bg-dark"},
      {value: "bg-white",text: "bg-white"},
      {value: "bg-transparent",text: "bg-transparent"},
      {value: "bg-none",text: "bg-none"},
    ];
  }
  
  /**
   * 
   */
  function clClassValid(){
    return ["text-primary","text-secondary","text-success","text-danger","text-warning","text-info","text-light","text-dark","text-body","text-muted","text-white","text-black-50","text-white-50","text-color-none"];
  }
  
  /**
   * 
   */
  function clClassOptions(){
    return [
      {value: "text-primary",text: "text-primary"},
      {value: "text-secondary",text: "text-secondary"},
      {value: "text-success",text: "text-success"},
      {value: "text-danger",text: "text-danger"},
      {value: "text-warning",text: "text-warning"},
      {value: "text-info",text: "text-info"},
      {value: "text-light",text: "text-light"},
      {value: "text-dark",text: "text-dark"},
      {value: "text-body",text: "text-body"},
      {value: "text-muted",text: "text-muted"},
      {value: "text-white",text: "text-white"},
      {value: "text-black-50",text: "text-black-50"},
      {value: "text-white-50",text: "text-white-50"},
      {value: "text-color-none",text: "text-color-none"},
    ];
  }
  
  /**
   * 
   */
  function bgmbClassValid(){
    return ["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey","mdb-color","no-color"];
  }
  
  /**
   * 
   */
  function bgmbClassOptions(){
    return [
      {value: "red",text: "red"},
      {value: "pink",text: "pink"},
      {value: "purple",text: "purple"},
      {value: "deep-purple",text: "deep-purple"},
      {value: "indigo",text: "indigo"},
      {value: "blue",text: "blue"},
      {value: "light-blue",text: "light-blue"},
      {value: "cyan",text: "cyan"},
      {value: "teal",text: "teal"},
      {value: "green",text: "green"},
      {value: "light-green",text: "light-green"},
      {value: "lime",text: "lime"},
      {value: "yellow",text: "yellow"},
      {value: "amber",text: "amber"},
      {value: "orange",text: "orange"},
      {value: "deep-orange",text: "deep-orange"},
      {value: "brown",text: "brown"},
      {value: "grey",text: "grey"},
      {value: "blue-grey",text: "blue-grey"},
      {value: "mdb-color",text: "mdb-color"},
      {value: "no-color",text: "no-color"},
    ];
  }
  
  /**
   * 
   */
  function bgmbDenClassValid(){
    return ["lighten-5","lighten-4","lighten-3","lighten-2","lighten-1","darken-1","darken-2","darken-3","darken-4","darken-5","accent-1","accent-2","accent-3","accent-4","no-degrad"];
  }
  
  /**
   * 
   */
  function bgmbDenClassOptions(){
    return [
      {value: "lighten-5",text: "lighten-5"},
      {value: "lighten-4",text: "lighten-4"},
      {value: "lighten-3",text: "lighten-3"},
      {value: "lighten-2",text: "lighten-2"},
      {value: "lighten-1",text: "lighten-1"},
      {value: "darken-1",text: "darken-1"},
      {value: "darken-2",text: "darken-2"},
      {value: "darken-3",text: "darken-3"},
      {value: "darken-4",text: "darken-4"},
      {value: "darken-5",text: "darken-5"},
      {value: "accent-1",text: "accent-1"},
      {value: "accent-2",text: "accent-2"},
      {value: "accent-3",text: "accent-3"},
      {value: "accent-4",text: "accent-4"},
      {value: "no-degrad",text: "no-degrad"},
     ];
  }
  
  /**
   * 
   */
  function bordersValid(){
    return ["border","border-top","border-right","border-bottom","border-left","no-border"];
  }
  /**
   * 
   */
  function bordersOptions(){
    return [
      {value: "border",text: "border"},
      {value: "border-top",text: "border-top"},
      {value: "border-right",text: "border-right"},
      {value: "border-bottom",text: "border-bottom"},
      {value: "border-left",text: "border-left"},
      {value: "no-border",text: "no-border"},
     ];
  }
  
  /**
   * 
   */
  function bordersRemoveValid(){
    return ["border-0","border-top-0","border-right-0","border-bottom-0","border-left-0","no-border-0"];
  }
  
  /**
   * 
   */
  function bordersRemoveOptions(){
    return [
      {value: "border-0",text: "border-0"},
      {value: "border-top-0",text: "border-top-0"},
      {value: "border-right-0",text: "border-right-0"},
      {value: "border-bottom-0",text: "border-bottom-0"},
      {value: "border-left-0",text: "border-left-0"},
      {value: "no-border-0",text: "no-border-0"},
     ];
  }
  
  /**
   * 
   */
  function bordersColorValid(){
    return ["border-primary","border-secondary","border-success","border-danger","border-warning","border-info","border-light","border-dark","border-white","no-border-color"];
  }
  
  /**
   * 
   */
  function bordersColorOptions(){
    return [
      {value: "border-primary",text: "border-primary"},
      {value: "border-secondary",text: "border-secondary"},
      {value: "border-success",text: "border-success"},
      {value: "border-danger",text: "border-danger"},
      {value: "border-warning",text: "border-warning"},
      {value: "border-info",text: "border-info"},
      {value: "border-light",text: "border-light"},
      {value: "border-dark",text: "border-dark"},
      {value: "border-white",text: "border-white"},
      {value: "no-border-color",text: "no-border-color"},
     ];
  }
  
  /**
   * 
   */
  function bordersRadiusValid(){
    return ["rounded","rounded-top","rounded-right","rounded-bottom","rounded-left","rounded-circle","rounded-0","no-radius"];
  }
  
  /**
   * 
   */
  function bordersRadiusOptions(){
    return [
      {value: "rounded",text: "rounded"},
      {value: "rounded-top",text: "rounded-top"},
      {value: "rounded-right",text: "rounded-right"},
      {value: "rounded-bottom",text: "rounded-bottom"},
      {value: "rounded-left",text: "rounded-left"},
      {value: "rounded-circle",text: "rounded-circle"},
      {value: "rounded-0",text: "rounded-0"},
      {value: "no-radius",text: "no-radius"},
     ];
  }
  
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