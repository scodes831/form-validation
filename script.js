const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pw = document.getElementById('pw');
const pwConfirm = document.getElementById('pw-c');
const submit = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');

email.addEventListener('input', function(event) {
    const emailInput = event.target.value;
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailError = "Please enter a valid email address.";
    matchPattern(emailInput, emailPattern, emailError);
})

country.addEventListener('input', function(event) {
    const countryInput = event.target.value;
    const countryPattern = /^[a-zA-Z]{2,3}$/;
    const countryError = "Country code must be between 2 and 3 characters.";
    matchPattern(countryInput, countryPattern, countryError);
})

zip.addEventListener('input', function(event) {
    const zipInput = event.target.value;
    const zipPattern = /^[a-zA-Z0-9]{5,}/;
    const zipError = "Zip code must be at least 5 digits, and can only contain letters and numbers.";
    matchPattern(zipInput, zipPattern, zipError);
})

pw.addEventListener('input', function(event) {
    const pwInput = event.target.value;
    const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    const pwError = "Password must be at least 6 characters and contain 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number."
    matchPattern(pwInput, pwPattern, pwError);
})

pwConfirm.addEventListener('input', function(event) {
    const pwConfirmInput = event.target.value;
    if(pwConfirmInput.length > 0) {
        if (pw.value !== pwConfirmInput) {
            errorMessage.style.display = "block";
            errorMessage.textContent = `PW 1 is ${pw.value} and PW 2 is ${pwConfirmInput}`;
        } else {
            errorMessage.style.display = "none";
        }
    }
})

submit.addEventListener('click', function(event) {
    if (email.value === '' | country.value === '' | zip.value === '' | pw.value === '' | pwConfirm.value === ''){
        alert("Please complete all fields in the form.");
    }
    if (errorMessage.style.display === "block") {
        event.preventDefault();
    }
});

function matchPattern(value, pattern, message) {
    const validateField = pattern.test(value);

    if(!validateField || value === '') {
        errorMessage.style.display = "block";
        errorMessage.textContent = message;
    } else {
        errorMessage.style.display = "none";
    }
}
