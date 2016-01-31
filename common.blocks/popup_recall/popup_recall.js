(function($) {
	var dialog = $('.popup_recall').dialog({
		dialogClass: 'dialog_fixed',
		autoOpen: false,
		resizable: false,
		modal : true,
		width : 970,
		open : function() {
			var dialog = $(this);
			$('.ui-widget-overlay').on('click', function() {
				dialog.dialog('close');
			});
		}
	});
	$('.popup_recall__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.recall__write').on('click', function() {
		dialog.dialog('open');
	});

	$('.popup_recall button').on('click', function() {
		var data = {
			form : 'Оставить отзыв',
			name : $('.popup_recall input[name=name]').val(),
			lastname : $('.popup_recall input[name=lastname]').val(),
			middlename : $('.popup_recall input[name=middlename]').val(),
			offer : $('.popup_recall input[name=offer]').val(),
			salary : $('.popup_recall input[name=salary]').val(),
			city : $('.popup_recall input[name=city]').val(),
			recall : $('.popup_recall textarea[name=recall]').val(),
			recall_publish_agreement : ($('.popup_recall input[type=checkbox]').prop('checked')) ? 'Да' : 'Нет'
		}
		if(data.name.length < 1 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите ваше имя'});
		}
		if(data.lastname.length < 1 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите вашу фамилию'});
		}
		if(data.offer.length < 1 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите номер договора'});
		}
		if(data.salary.length < 1 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите ваш результат(руб/мес)'});
		}
		if(data.city.length < 1 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите ваш город'});
		}
		if(data.recall.length < 1 ) {
			return $.gritter.add({title: 'Ошибка!', text: 'Введите текст вашего отзыва'});
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