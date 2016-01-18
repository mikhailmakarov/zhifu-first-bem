(function($) {
	var dialog = $('.popup_getprices').dialog({
		dialogClass: 'dialog_fixed',
		autoOpen: false,
		resizable: false,
		modal : true,
		width : 500,
		open : function() {
			var dialog = $(this);
			$('.ui-widget-overlay').on('click', function() {
				dialog.dialog('close');
			});
		}
	});
	$('.popup_getprices__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.slider__button').on('click', function() {
		dialog.dialog('open');
	});
})(jQuery);