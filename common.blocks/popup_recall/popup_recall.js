(function($) {
	var dialog = $('.popup_recall').dialog({
		dialogClass: 'dialog_fixed',
		autoOpen: false,
		resizable: false,
		modal : true,
		width : 900,
		open : function() {
			var dialog = $(this);
			$('.ui-widget-overlay').on('click', function() {
				dialog.dialog('close');
			});
		}
	});
	$('.popup_recall__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.recall__write').on('click', function() {
		dialog.dialog('open');
	});
})(jQuery);