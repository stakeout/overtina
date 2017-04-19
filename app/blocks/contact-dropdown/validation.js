export default () => {
    // debugger;
    const contactForm = $('#contact-form');
    contactForm.validate({
        focusInvalid: true,
        focusCleanup: true,
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 25
            },
            phone: {
                required: true
            },
            message: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            name: {
                required: 'Введите имя пользователя:',
                minlength: 'Используйте не менее 3-х символов',
                maxlength: 'Максимум 25 символов'
            },
            phone: {
                required: 'Введите номер телефона:',
                maxlength: 'Максимум 16 символов',
                minlength: 'Не менее 9-ти символов'
            },
            message: {
                required: 'Напишите ваше сообщение',
                minlength: 'Не менее 20-ти символов'
            }
        },
        errorElement: "span",
        errorPlacement(error, element) {
            error.appendTo(element.parent().find('label'));
        },
            // success: function(input) {
            //         input.addClass("success").text("Ok!")
            //     }
            // highlight: function(element, errorClass, validClass) {
            //     $(element).addClass(errorClass).removeClass(validClass);
            //     $(element.form).find("label[for=" + element.id + "] + input")
            //         .addClass(errorClass);
            // },
            // unhighlight: function(element, errorClass, validClass) {
            //     $(element).removeClass(errorClass).addClass(validClass);
            //     $(element.form).find("label[for=" + element.id + "] + input")
            //         .removeClass(errorClass);
            // }

        // success(label) {
        //     label.html('&nbsp').addClass('valid');
        // },
        submitHandler(form) {
            $.ajax({
                type: 'POST',
                url: './formValidation.php',
                data: $(form).serialize(),
                success(data) {
                    alert(data);
                },
                error(data) {
                    alert(data);
                }
            });
            return false; // block the default submit action
        }

    });

};
