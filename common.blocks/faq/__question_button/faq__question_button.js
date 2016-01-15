modules.define('faq__question_button', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        'onSetMod': {
            'js' : {
                'inited' : function() {
                    console.log('sex');
                    this.findBlockInside('faq__question_button').findBlockInside('button').on('click', this._onClick, this);
                }
            }
        },
        '_onClick' : function () {
            this.findBlockOutside('faq__item_container').findBlockInside('faq__answer').toggleMod('hidden', true, '');
        }
    }));

});