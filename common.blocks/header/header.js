/*modules.define('header', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

	provide(BEMDOM.decl(this.name, {
	    onSetMod: {
	        js: {
	            inited: function() {
	            	this._modal = BEMDOM.popup_callback.findBlockInside('modal');
	            	this._header = this;
	            	$('.header__callback').on('click', function() {
	            		this._modal.setMod('visible', true);
	            		/*$('.popup_callback.modal').addClass('modal_visible');
	            		$('.popup_callback.modal').on('click', function() {
	            			$('.popup_callback.modal').removeClass('modal_visible');
	            		})*//*
	            	});
	            }
	        },
	        _onClickCallback : function() {
	        	//this._header.findBlockOutside('popup_callback').findBlockInside('modal').setMod('visible');
	        	console.log('sex');
	        }
	    }
	}));

});*/