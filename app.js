const emailForm = document.querySelector('#email-form')
const input = document.querySelector('input')
const errorMsg = document.querySelector('.error-message')
const button = document.querySelector('button')

function checkInvalidStyle () {
  // if the input is invalid, display error style
  if (!input.checkValidity()) {
    input.parentElement.style.border = '2px solid rgba(249, 100, 100, 100)'
    input.nextElementSibling.style.display = 'initial'
    errorMsg.style.display = 'block'
    // if the input is valid, display normal style
  } else {
    input.parentElement.style.border = '1px solid #CE9898'
    input.nextElementSibling.style.display = 'none'
    errorMsg.style.display = 'none'
  }
}

//Validation happens when users are blurred out of form (when users finish edit) 
input.addEventListener('blur', (event) => {
  event.preventDefault()
  checkInvalidStyle()
})

//Validation happens when users click the submit button
button.addEventListener('click', (event) => {
  event.preventDefault()
  checkInvalidStyle()
})