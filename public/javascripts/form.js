window.addEventListener('DOMContentLoaded', () => {
    const validateEmail = false;
    const validatePassword = false;

    function checkEmail() {
        const email = document.forms['myForm']['email'].value;
        const emailForm = email.replace(/^[\w-\.]+@([\w-]+?\.)+[\w-]{2,3}$/, '');
        const regexEmail = /^[\w-\.]+@([\w-]+?\.)+[\w-]{2,3}$/;
        if(regexEmail.test(email)) {
            document.getElementById('email').style.borderColor="green";
            return true;
        } else  {
            document.getElementById('email').style.borderColor="red";
            return false;
        }
    }
    exports.validateForm = () => {
        if (!validateEmail) {
            document.getElementById('email').onkeyup = checkEmail;
            validateEmail = true;
        }
        return checkEmail();
    }

    function checkPassword(string) {
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])([@$!%*?&#^\w]{8,})$/;
        return regexPassword.test(string);
    }
    
    
})