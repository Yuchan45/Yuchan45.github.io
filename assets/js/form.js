const form = document.getElementById('contact-form');
const inputs = document.querySelectorAll('#contact-form input');  // Array de inputs del formulario de contacto.
const text = document.getElementById('txt-area-msg');

const expressions = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	//password: /^.{4,12}$/, // 4 a 12 digitos.
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
	// usuario: false,
	// password: false,
	name: false,
	email: false,
	phone: false,
    message: false
}


const formValidation = (e) => {
    switch (e.target.name) {
		case "name":
			fieldValidation(expressions.name, e.target, 'name');
		break;
		case "email":
			fieldValidation(expressions.email, e.target, 'email');
		break;
		case "phone":
			fieldValidation(expressions.phone, e.target, 'phone');
		break;
        case "text":
            textAreaValidation();
        break;
	}
}

const fieldValidation = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`group__${campo}`).classList.add('formulario__grupo-correcto');
        document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#i__${campo}`).classList.add('fa-circle-check');
        document.querySelector(`#i__${campo}`).classList.remove('fa-circle-xmark');
        document.querySelector(`#group__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        fields[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#i__${campo}`).classList.add('fa-circle-xmark');
        document.querySelector(`#i__${campo}`).classList.remove('fa-circle-check');
        document.querySelector(`#group__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        fields[campo] = false;
        setTimeout(() => {
            if (input.value == '') {
                document.getElementById(`group__${campo}`).classList.remove('formulario__grupo-incorrecto');
                document.querySelector(`#group__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            }
		}, 3000);
    }
}

const textAreaValidation = () => {
    if (text.value == '') {
        document.getElementById('txtarea-p').classList.add('form__message-active');
        fields['message'] = false;
    } else {
        document.getElementById('txtarea-p').classList.remove('form__message-active');
        fields['message'] = true;
    }
}



inputs.forEach((input) => {
	input.addEventListener('keyup', formValidation);
	input.addEventListener('blur', formValidation);
});
text.addEventListener('keyup', formValidation);
text.addEventListener('blur', formValidation);


form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(fields.name && fields.email && fields.phone && fields.message){
		form.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
		alert("El envio de emails se encuentra deshabilitado!");
	} else {
		document.getElementById('form__message').classList.add('form__message-active');
        setTimeout(() => {
            document.getElementById('form__message').classList.remove('form__message-active');
		}, 2000);
	}
});