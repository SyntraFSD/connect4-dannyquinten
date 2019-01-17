var goToLogin = document.querySelector('#goToLogin');
var goToRegister = document.querySelector('#goToRegister');
var loginForm = document.querySelector('.Login');
var registerForm = document.querySelector('.Register');

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

goToRegister.addEventListener(type, showRegisterForm);
goToLogin.addEventListener('click', showLoginForm);
//# sourceMappingURL=form.js.map