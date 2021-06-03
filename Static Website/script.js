const generateBtn = document.getElementById('generate')
const qr_code = document.getElementById('qr-code')

generateBtn.onclick = () => {
  qr_code.classList.remove('invisible')
}
