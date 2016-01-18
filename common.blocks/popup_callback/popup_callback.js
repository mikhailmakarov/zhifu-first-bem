/*modules.define('popup_callback', ['i-bem__dom'], function(provide, BEMDOM) {

	provide(BEMDOM.decl(this.name, {
	    onSetMod: {
	        js: {
	            inited: function() {
	            	this._modal = this.findBlockInside('modal');
	            	//this._modal.setMod('visible', true);
	                BEMDOM.blocks.header.on(this, 'click', function() {
	                	//var modal = BEMDOM.findBlocksInside('popup_callback').findBlockInside('modal');
	                    //modal.setMod('init', true).setMod('visible', true);
	                    this._modal.findBlockInside('modal').setMod('visible', true);
	                });
	            }
	        }
	    }
	}));

});*/

(function($) {
	var dialog = $('.popup_callback').dialog({
		dialogClass: 'dialog_fixed',
		autoOpen: false,
		resizable: false,
		modal : true,
		width : 500,
		open : function() {
			var dialog = $(this);
			$('.ui-widget-overlay').on('click', function() {
				dialog.dialog('close');
			});
			//$("body").css({ overflow: 'hidden' });
		}/*,
		beforeClose: function() {
		  	$("body").css({ overflow: 'inherit' });
		}*/
	});
	$('.popup_callback__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.header__callback, .footer__button, .calc_screen__result button').on('click', function() {
		dialog.dialog('open');
	});
})(jQuery);