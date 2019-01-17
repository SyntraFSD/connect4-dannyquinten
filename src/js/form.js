const goToLogin = document.querySelector('#goToLogin');
const goToRegister = document.querySelector('#goToRegister');
const login = document.querySelector('.Login');
const register = document.querySelector('.Register');
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
