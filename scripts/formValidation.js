const form = document.getElementById('survey-form');
const survey = document.querySelector('.survey');
const submitButton = document.getElementById('submitButton')
const username = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const number = document.getElementById('number');
const date = document.getElementById('date-item');
const hour = document.getElementById('hour');

submitButton.addEventListener('click', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const numberValue = number.value.trim();
    const dateValue = date.value.trim();
    const hourValue = hour.value.trim();
	const errorCount = 0;

    if(usernameValue === '') {
        setErrorFor(username, 'Name cannot be blank');
		errorCount += 1
    } else {
        setSuccessFor(username);
    }

    if(surnameValue === '') {
        setErrorFor(surname, 'Surname cannot be blank');
		errorCount += 1
    } else {
        setSuccessFor(surname);
    }

    if(emailValue === '') {
		setEmailErrorFor(email, 'Email cannot be blank');
		errorCount += 1
	} else if (!isEmail(emailValue)) {
		setEmailErrorFor(email, 'Not a valid email');
		errorCount += 1
	} else {
		setEmailSuccessFor(email);
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Phone Number cannot be blank');
		errorCount += 1
	} else if (!isPhone(phoneValue)) {
		setErrorFor(phone, 'Not a valid phone number');
		errorCount += 1
	} else {
		setSuccessFor(phone);
	}

    if(numberValue === '') {
		setErrorFor(number, 'Guest amount cannot be blank');
		errorCount += 1
	} else if (isBelow50(numberValue)) {
		setSuccessFor(number);
	} else {
		setErrorFor(number, 'Maximum 50 guests');
		errorCount += 1
	}

    if(dateValue === '') {
		setErrorFor(date, 'Date cannot be blank');
		errorCount += 1
	} else {
		setSuccessFor(date);
	}

    if(hourValue === '') {
		setErrorFor(hour, 'Hour cannot be blank');
		errorCount += 1
	} else {
		setSuccessFor(hour);
	}

	if(errorCount === 0) {
		survey.className = 'form-completed';
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'survey-item error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'survey-item success';
}

function setEmailErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'survey-item-email error';
	small.innerText = message;
}

function setEmailSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'survey-item-email success';
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
	return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
}

// function isNumber(number) {
// 	return /\D/.test(number);
// }

function isBelow50(number) {
	if (number <= 50 && number > 0) {
		return true;
	}
}



