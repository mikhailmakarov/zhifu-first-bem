(function($) {
	var dialog = $('.popup_getprices').dialog({
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
		}
	});
	$('.popup_getprices__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.slider__button').on('click', function() {
		dialog.dialog('open');
	});

	$('.popup_getprices button').on('click', function() {
		var data = {
			form : 'Получить прайс лист',
			name : $('.popup_getprices input[name=name]').val(),
			phone : $('.popup_getprices input[name=phone]').val(),
			email : $('.popup_getprices input[name=email]').val()
		}
		if(data.name.length < 1 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите ваше имя'});
		}
		if(data.phone.replace(/[\D]+/g, '').length < 5 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите корректный номер телефона'});
		}
		if(data.email.length < 7 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите корректный e-mail'});
		}
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
						window.location.href = 'thankyou.html';
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
	});
})(jQuery);