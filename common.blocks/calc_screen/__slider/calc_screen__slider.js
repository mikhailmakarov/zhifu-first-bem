modules.define('calc_screen__slider', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
            	console.log('lalala');
               /* $('.calc_screen__slider').slider({
					min: 5000,
					max: 150000,
					value: 50000,
					slide: function(event, ui) {
					    $(ui.handle).closest('.calc_screen__calc_line').find('input').val(ui.value);
					}
				});*/
            }
        }
    }
}));

});