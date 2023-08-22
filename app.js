const emailForm = document.querySelector('#email-form')
const input = document.querySelector('input')
const errorMsg = document.querySelector('.error-message')
const button = document.querySelector('button')

function checkInvalidStyle () {
  if (!input.checkValidity()) {
    input.parentElement.style.border = '2px solid #F96464'
    input.nextElementSibling.style.display = 'initial'
    errorMsg.style.display = 'block'
  } else {
    input.parentElement.style.border = '1px solid #CE9898'
    input.nextElementSibling.style.display = 'none'
    errorMsg.style.display = 'none'
  }
}

input.addEventListener('blur', (event) => {
  event.preventDefault()
  checkInvalidStyle()
})

button.addEventListener('click', (event) => {
  event.preventDefault()
  checkInvalidStyle()
})