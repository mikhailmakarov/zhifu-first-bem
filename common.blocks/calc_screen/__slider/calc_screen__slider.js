(function($) {
    function beautify_num(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
    }
    function calculate() {
        var purchases = $('.calc_screen__purchases_input input').val(),
            outgoings = $('.calc_screen__outgoings_input input').val(),
            nacenka = 75;
        if($('.calc_screen__nacenka_selector .radio_checked')) {
            nacenka = $('.calc_screen__nacenka_selector .radio_checked input').val();
        }
        $('.calc_screen__purchases_num').html(beautify_num(purchases) + '&nbsp;руб.');
        $('.calc_screen__profit_num').html(beautify_num(purchases*nacenka/100-outgoings) + '&nbsp;руб.');
        $('.calc_screen__profit_year').html(beautify_num((purchases*nacenka/100-outgoings)*12) + '&nbsp;руб.');
    }
    calculate();

    $('.calc_screen__nacenka_selector .radio').on('click', function() {
    	setTimeout(calculate, 50);
    });

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

	$('.slider__good_item').on('click', function() {
		var $this = $(this);

		if($this.find('.slider__name').hasClass('slider__name_active_yes')) return;

		$('.slider__name.slider__name_active_yes').removeClass('slider__name_active_yes');

		$this.find('.slider__name').addClass('slider__name_active_yes');

		$this.parents('.slider').find('.slider__big_image').attr('src', $this.find('.slider__icon').attr('src'));
		$this.parents('.slider').find('.slider__editable_header').html('ORION+&nbsp;' + $this.find('.slider__name').html());
	});

})(jQuery);
