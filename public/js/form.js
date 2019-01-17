var goToLogin = document.querySelector('#goToLogin');
var goToRegister = document.querySelector('#goToRegister');
var login = document.querySelector('.Login');
var register = document.querySelector('.Register');

function showRegisterDiv() {
  login.classList.add('hide');
  register.classList.remove('hide');
}

function showLoginDiv() {
  register.classList.add('hide');
  login.classList.remove('hide');
}

goToRegister.addEventListener('click', showRegisterDiv);
goToLogin.addEventListener('click', showLoginDiv);
//# sourceMappingURL=form.js.map