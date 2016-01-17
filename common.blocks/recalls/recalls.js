(function($) {
	$('.recalls__button').on('click', function() {
		var $this = $(this);
		var group = $this.attr('class').toString().match(/recalls__group_([\d]+)/i);
		if($this.hasClass('recalls__button_active_yes')) return;

		$('.recalls__button_active_yes').removeClass('recalls__button_active_yes');
		$('.recalls__container_active_yes').removeClass('recalls__container_active_yes');

		$('.recalls__button.' + group[0]).addClass('recalls__button_active_yes');
		$('.recalls__container.' + group[0]).addClass('recalls__container_active_yes');
	});
})(jQuery);