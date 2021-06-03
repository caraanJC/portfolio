const registerLink = document.getElementById('registerLink')
const backdrop = document.getElementById('backdrop')
const registerContainer = document.getElementById('registerContainer')
const registerBtn = document.getElementById('registerBtn')

registerLink.addEventListener('click', () => {
  backdrop.classList.remove('d-none')
  backdrop.classList.add('d-flex')
  registerContainer.classList.remove('d-none')
  registerContainer.classList.add('d-flex')
})

registerBtn.addEventListener('click', () => {
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
