/*modules.define('calc_screen__outgoings_input', ['i-bem__dom', 'calc_screen'], function(provide, BEMDOM, calculator) {

    provide(BEMDOM.decl({ block: this.name, baseBlock : calculator}, {
        'onSetMod': {
            'js' : {
                'inited' : function() {
                	this.findBlockInside('input').on('change', this._calculate, this);
                }
            }
        },
        '_calculate' : function () {
        	this.__base();
        }
    }));

});*/