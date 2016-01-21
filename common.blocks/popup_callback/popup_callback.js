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
	$('.popup_callback button').on('click', function() {
		var data = {
			form : 'Заказ обратного звонка',
			phone : $('.popup_callback input[name=phone]').val()
		}
		if(data.phone.replace(/[\D]+/g, '').length > 5) {
			$.ajax({
				type: 'POST',
				url: 'php/ajax.php',
				timeout: 10*1000,
				data: data,
				beforeSend: function(){
					//ajaxLoader.show();
				},
				complete: function(){
					//ajaxLoader.hide();
				},
				success: function(json) {
					if(json.response === undefined) {
						$.gritter.add({title: 'Ошибка!', text: 'Возникла ошибка при выполнении запроса'});
					}
					else {
						if(json.response === 'ok') {
							if(json.response === 'ok' && json.message !== undefined) {
								$.gritter.add({title: 'Успех!', text: 'Заявка успешно отправлена'});
							}
							else {
								$.gritter.add({title: 'Успех!', text: json.message});
							}
							dialog.dialog('close');
						}
						else {
							if(json.response === 'error' && json.message !== undefined) {
								$.gritter.add({title: 'Ошибка!', text: json.message});
							}
							else {
								$.gritter.add({title: 'Ошибка!', text: 'Возникла ошибка при выполнении запроса'});
							}
						}
					}
				},
				error: function() {
					$.gritter.add({title: 'Ошибка!', text: 'Возникла ошибка при выполнении запроса'});
				}
			});
		}
		else {
			$.gritter.add({title: 'Ошибка!', text: 'Введите корректный номер'});
		}
	});
})(jQuery);