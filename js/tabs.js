$(document).ready(function(){
	
	$('.tabs-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs-link').removeClass('link-current');
		$('.tabs-content').removeClass('tabs-current');

		$(this).addClass('link-current');
		$("#"+tab_id).addClass('tabs-current');
	})

})
