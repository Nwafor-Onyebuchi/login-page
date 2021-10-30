const submitBtn = document.querySelector('#submit')
const emailInputValue = document.getElementById('email')
const passwordInputValue = document.getElementById('password')
const cpasswordInputValue = document.getElementById('cpassword')

function validateInput(input) {
    if(!input.value) {
        input.classList.add('error-border')
    } else {
        input.classList.add('success-border')
    }
}

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    validateInput(emailInputValue)
    validateInput(passwordInputValue)
    validateInput(cpasswordInputValue)
})



