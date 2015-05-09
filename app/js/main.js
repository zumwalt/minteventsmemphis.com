$(document).ready(function(){
	// spam proof
	$('.email').each(function () {
		var to = $(this).data('to');
		var domain = $(this).data('domain');
		$(this).text(to+'@'+domain);
		$(this).on('click', function () {
			window.location = 'mailto:'+to+'@'+domain;
		});
	});
});