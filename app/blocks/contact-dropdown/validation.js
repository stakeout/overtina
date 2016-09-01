export default () => {
	// debugger;
	const contactForm = $('.contact-dropdown__form');
	// const userName = contactForm.find('#name');
	// const userPhone = contactForm.find('#phone');
	// const userSelect = contactForm.find('#contacts-select');
	// const userMessage = contactForm.find('#message');
	// const validation = $('.validation');
	$.validator.addMethod('validName', function (value) {
		var result = true;
		const iChars = '/^[a-zа-я0-9_-]{3,16}$/i';
		for (var i = 0; i < value.length; i++) {
			if (iChars.indexOf(value.charAt(i)) !== -1) {
				return false;
			}
		}
		return result;
	}, '');
	contactForm.validate({
		focusInvalid: false,
		focusCleanup: true,
		rules: {
			name: {
				required: true,
				validName: true,
				minlength: 3,
				maxlength: 25
			}
		},
		messages: {
			name: {
				required: 'Введите имя пользователя',
				minlength: 'Используйте не менее 3-х символов',
				maxlength: 'Максимум 25 символов'
			}
		},
		errorPlacement(error, element) {
			let err = element.attr('name');
			error.appendTo(element.parent().prev('dt').find('label > span'));
		},
		success(label){
			label.html('&nbsp').addClass('valid');
		}

	});

};
