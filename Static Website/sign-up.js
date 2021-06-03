const registerLink = document.getElementById('registerLink')
const backdrop = document.getElementById('backdrop')
const registerContainer = document.getElementById('registerContainer')
const registerBtn = document.getElementById('registerBtn')
const inputs = document.querySelectorAll('#registerContainer input')
const password = document.getElementById('Password')
const confirm_password = document.getElementById('confirm-password')

let empty = false

registerLink.addEventListener('click', () => {
  backdrop.classList.remove('d-none')
  backdrop.classList.add('d-flex')
  registerContainer.classList.remove('d-none')
  registerContainer.classList.add('d-flex')
})

registerBtn.addEventListener('click', () => {
  inputs.forEach((input) => {
    if (input.value === '') empty = true
  })
  if (empty) return
  if (confirm_password.value != password.value)
    return window.alert("Passwords don't match")
  backdrop.classList.remove('d-flex')
  backdrop.classList.add('d-none')
  registerContainer.classList.remove('d-flex')
  registerContainer.classList.add('d-none')
})

backdrop.addEventListener('click', () => {
  backdrop.classList.remove('d-flex')
  backdrop.classList.add('d-none')
  registerContainer.classList.remove('d-flex')
  registerContainer.classList.add('d-none')
})
