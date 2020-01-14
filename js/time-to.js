jQuery(document).ready( function($) { 
	/**
    * 
    */
   function countDown_custom(ft, cs){
     var dateEvent = $('#customCountdown').data('timeto');
     var diff_date= datediff(new Date(), new Date(dateEvent)) - 1;
     var displayDays = (diff_date > 99)?3:2;
     var timeTo = $('#customCountdown').timeTo({
       timeTo: new Date(dateEvent),
       displayDays: displayDays,
       theme: "black",
       displayCaptions: true,
       fontSize: ft,
       captionSize: cs,
       languages: {
           pl: {days: 'days', hours: 'hours', min: 'minutes', sec: 'seconds'}
       },
       lang: 'fr'
     });
     
   }
   customise_countDown();
   /**
    * 
    */
   function customise_countDown(){
	   var large = $(window).width();
	   if(large > 992){
		   countDown_custom(48, 14);
	   }else if(767 < large < 992){
		   countDown_custom(30, 12);
	   }else{
		   countDown_custom(25, 12);
		   
	   } 
   }  
   
   /**
    * 
    */
   $( window ).resize(function() {
	   customise_countDown()
   });
   
   
   function datediff(first, second) {return Math.round((second-first)/(1000*60*60*24));}
   
   
});