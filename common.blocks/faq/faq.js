(function($) {
	$('.faq__question_button').on('click', function() {
		var $obj = $(this).parents('.faq__item_container');
		if($obj.hasClass('faq__answer_hidden')) {
			$obj.removeClass('faq__answer_hidden').addClass('faq__answer_shown');
		}
		else {
			$obj.addClass('faq__answer_hidden').removeClass('faq__answer_shown');
		}
	});
})(jQuery);