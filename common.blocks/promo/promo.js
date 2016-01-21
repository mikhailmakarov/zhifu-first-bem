(function($){
	$('.promo__form_action button').on('click', function() {
		var data = {
			form : 'Получить доступ ко всем оптовым ценам на сегодняшний день',
			name : $('.promo__form_action input[name=name]').val(),
			phone : $('.promo__form_action input[name=phone]').val(),
			email : $('.promo__form_action input[name=email]').val(),
			get_daily_prices : ($('.promo__form_action input[type=checkbox]').prop('checked')) ? 'Да' : 'Нет'
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