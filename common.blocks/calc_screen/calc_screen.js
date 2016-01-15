modules.define('calc_screen', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js' : {
                'inited' : function() {
                    this._calc = this;
                	console.log('calc_screen init');
                    this._calculate();
                    //console.log(this.findBlockInside('calc_screen__purchases_input'));
                    this.findBlockInside('calc_screen__purchases_input').findBlockInside('input').on('change', this._calculate, this);
                    this.findBlockInside('calc_screen__outgoings_input').findBlockInside('input').on('change', this._calculate, this);
                    this.findBlockInside('calc_screen__nacenka_selector').on('change', this._calculate, this);
                }
            }
        },
        '_calculate' : function() {
            function beautify_num(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
            }
            var purchases = this.findBlockInside('calc_screen__purchases_input').findBlockInside('input').getVal(),
                outgoings = this.findBlockInside('calc_screen__outgoings_input').findBlockInside('input').getVal(),
                nacenka = 75;
            if(this.findBlockInside('calc_screen__nacenka_selector').findBlockInside('radio_checked')) {
                nacenka = this.findBlockInside('calc_screen__nacenka_selector').findBlockInside('radio_checked').findBlockInside('radio').getVal();
            }
            BEMDOM.update(this._calc.elem('purchases_num'), beautify_num(purchases) + '&nbsp;руб.');
            BEMDOM.update(this._calc.elem('profit_num'), beautify_num(purchases*nacenka/100-outgoings) + '&nbsp;руб.');
            BEMDOM.update(this._calc.elem('profit_year'), beautify_num((purchases*nacenka/100-outgoings)*12) + '&nbsp;руб.');

            
        }
    }));

});