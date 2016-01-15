(function($) {
	$('.calc_screen__slider:first').slider({
		min: 5000,
		max: 150000,
		value: 50000,
		step: 1000,
		slide: function(event, ui) {
		    $(ui.handle).closest('.calc_screen__calc_line').find('input').val(ui.value);
		}
	});
	$('.calc_screen__slider:last').slider({
		min: 5000,
		max: 60000,
		value: 10000,
		step: 1000,
		slide: function(event, ui) {
		    $(ui.handle).closest('.calc_screen__calc_line').find('input').val(ui.value);
		}
	});
})(jQuery);