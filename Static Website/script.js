const burger = document.querySelector('#burger i');
const navList = document.getElementById('navList');
const qrCode = document.getElementById('qr-code');
const generateBtn = document.getElementById('generateBtn');
const listItems = document.querySelectorAll('#navList li');
const figures = document.getElementById('figures');
const qrLogin = document.getElementById('qr-login');
const qrSignUp = document.getElementById('qr-signUp');
const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');
const loginCloseBtn = document.getElementById('loginCloseBtn');
const signUpCloseBtn = document.getElementById('signUpCloseBtn');
const login = document.getElementById('login');
const signUp = document.getElementById('signUp');
const loginFormRegisterLink = document.getElementById('loginFormRegisterLink');

// const registerLink = document.getElementById('registerLink');
// const register = document.getElementById('register');
// const registerBtn = document.getElementById('registerBtn');
// const registerUsername = document.getElementById('registerUsername');
// const registerPassword = document.getElementById('registerPassword');
// const closeBtn = document.getElementById('closeBtn');

// const generateBtn = document.getElementById('generate');
// const qr_code = document.getElementById('qr-code');

burger.onclick = () => {
  navList.classList.toggle('show');
};

generateBtn.onclick = () => {
  qrCode.classList.add('show');
};

listItems.forEach((listItem) => {
  listItem.onclick = () => {
    navList.classList.remove('show');
  };
});

let figureMarginLeft = 0;

setInterval(() => {
  figureMarginLeft -= 100;
  if (figureMarginLeft === -400) {
    figureMarginLeft = 0;
  }
  figures.style.marginLeft = `${figureMarginLeft}%`;
}, 3000);

login.onclick = () => {
  loginForm.classList.add('show');
  navList.classList.toggle('show');
};

signUp.onclick = () => {
  signUpForm.classList.add('show');
  navList.classList.toggle('show');
};

qrLogin.onclick = () => {
  loginForm.classList.add('show');
};

qrSignUp.onclick = () => {
  signUpForm.classList.add('show');
};

loginCloseBtn.onclick = (e) => {
  e.preventDefault();
  loginForm.classList.remove('show');
};

signUpCloseBtn.onclick = (e) => {
  e.preventDefault();
  signUpForm.classList.remove('show');
};

generateBtn.onclick = () => {
  qrCode.innerHTML = `<img src="./assets/images/mobile_size/qr-code.png" alt="qr code">`;
  qrCode.classList.add('show');
};

loginFormRegisterLink.onclick = () => {
  loginForm.classList.remove('show');
  signUpForm.classList.add('show');
};
