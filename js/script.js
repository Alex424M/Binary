const form = document.querySelector('.form__contact');
const inputs = document.querySelectorAll('.form__input');

function validate_form() {
    let valid = true;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.border = "none";
        if (inputs[i].value == "") {
            valid = false;
            inputs[i].style.border = "1px solid red";
        }
    }
    return valid;
}