jQuery(document).ready( function($) { 
	var height_header = $('#header').innerHeight();
	//$('.memberShips-left').css({'top':height_header+'px',});
	$('.icon-container-member').addClass('open');
	$('.icon-container-member').click(function(){
		if($('.memberShips-left').hasClass('open')){
			$('.memberShips-left').removeClass('open');
			$('body').removeClass('modal-open');
			setTimeout(function(){
				$('.icon-container-member').addClass('open');
			},800);
		}else{
			$('.memberShips-left').addClass('open');
			$('.icon-container-member').addClass('fade');
			$('.icon-container-member').removeClass('open');
			$('body').addClass('modal-open');
			setTimeout(function(){				
				$('.icon-container-member').removeClass('fade');
			},800);
		}
	});
});