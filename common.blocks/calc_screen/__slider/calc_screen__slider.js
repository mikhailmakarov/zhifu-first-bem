(function($) {
    function beautify_num(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
    }
    function calculate() {
        var purchases = $('.calc_screen__purchases_input input').val(),
            outgoings = $('.calc_screen__outgoings_input input').val(),
            nacenka = 75;
        console.log(purchases);
        if($('.calc_screen__nacenka_selector .radio_checked')) {
            nacenka = $('.calc_screen__nacenka_selector .radio_checked input').val();
        }
        $('.calc_screen__purchases_num').html(beautify_num(purchases) + '&nbsp;руб.');
        $('.calc_screen__profit_num').html(beautify_num(purchases*nacenka/100-outgoings) + '&nbsp;руб.');
        $('.calc_screen__profit_year').html(beautify_num((purchases*nacenka/100-outgoings)*12) + '&nbsp;руб.');
    }
    $('.calc_screen__nacenka_selector .radio').on('click', calculate);
	$('.calc_screen__slider:first').slider({
		range: 'min',
		min: 5000,
		max: 150000,
		value: 50000,
		step: 1000,
		slide: function(event, ui) {
		    $(ui.handle).closest('.calc_screen__calc_line').find('input').val(ui.value);
		    calculate();
		}
	});
	$('.calc_screen__slider:last').slider({
		range: 'min',
		min: 5000,
		max: 60000,
		value: 10000,
		step: 1000,
		slide: function(event, ui) {
		    $(ui.handle).closest('.calc_screen__calc_line').find('input').val(ui.value);
		    calculate();
		}
	});
})(jQuery);
