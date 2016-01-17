(function($) {
	var dialog = $('.popup_getsystem').dialog({
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
	$('.popup_getsystem__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.page__bonus_button_wrapper button').on('click', function() {
		dialog.dialog('open');
	});
})(jQuery);