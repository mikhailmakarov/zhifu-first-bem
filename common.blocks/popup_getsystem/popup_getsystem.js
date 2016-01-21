(function($) {
	var dialog = $('.popup_getsystem').dialog({
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
	$('.popup_getsystem__close_button').on('click', function() {
		dialog.dialog('close');
	});
	$('.page__getprices_button').on('click', function() {
		dialog.dialog('open');
	});
	$('.popup_getsystem button').on('click', function() {
		var data = {
			form : 'Получить отлаженную систему продаж',
			phone : $('.popup_getsystem input[name=phone]').val()
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