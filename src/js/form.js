const goToLogin = document.querySelector('#goToLogin');
const goToRegister = document.querySelector('#goToRegister');
const loginForm = document.querySelector('.Login');
const registerForm = document.querySelector('.Register');

function switchForm(fromForm, toFrom) {
  fromForm.classList.add('hide');
  toFrom.classList.remove('hide');
}
function showRegisterForm(event) {
  event.preventDefault();
  switchForm(loginForm, registerForm);
}

function showLoginForm(event) {
  event.preventDefault();
  switchForm(registerForm, loginForm);
}

goToRegister.addEventListener('click', showRegisterForm);
goToLogin.addEventListener('click', showLoginForm);
