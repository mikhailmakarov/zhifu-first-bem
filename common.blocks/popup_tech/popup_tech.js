(function($) {
	function tab() {
		var activeTab = $('.popup_tech__tab.popup_tech__tab_active:first').attr('tabid');
		$('.popup_tech__tab_content_active').removeClass('popup_tech__tab_content_active');
		$('.popup_tech__content .popup_tech__tab_content_num_' + activeTab).addClass('popup_tech__tab_content_active');
	}
	tab();
	var dialog = $('.popup_tech').dialog({
		dialogClass: 'dialog_fixed',
		autoOpen: false,
		resizable: false,
		modal : true,
		width : '85%',
		open : function() {
			var dialog = $(this);
			$('.ui-widget-overlay').on('click', function() {
				dialog.dialog('close');
			});
			$("body").css({ overflow: 'hidden' });
			tab();
		},
		beforeClose: function() {
		  	$("body").css({ overflow: 'inherit' });
		}
	});
	$('.popup_tech__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.slider__preview').on('click', function() {
		var active = $('.slider__name.slider__name_active_yes:first').text();
		if(!$('.popup_tech__orion_rst_visible').hasClass('popup_tech__orion_' + active)) {
			$('.popup_tech__orion_rst_visible').removeClass('popup_tech__orion_rst_visible');
			$('.popup_tech__orion_' + active).addClass('popup_tech__orion_rst_visible');
		}
		dialog.dialog('open');
	});
	$('.popup_tech__tab').on('click', function() {
		$('.popup_tech__tab_active').removeClass('popup_tech__tab_active');
		$(this).addClass('popup_tech__tab_active');
		tab();
	});
})(jQuery);