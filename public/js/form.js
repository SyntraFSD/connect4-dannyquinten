var goToLogin = document.querySelector('#goToLogin');
var goToRegister = document.querySelector('#goToRegister');
var loginForm = document.querySelector('.Login');
var registerForm = document.querySelector('.Register');

function switchForm(event) {
  event.preventDefault();
  loginForm.classList.toggle('hide');
  registerForm.classList.toggle('hide');
}

function login(event) {
  event.preventDefault();
}

goToRegister.addEventListener('click', switchForm);
goToLogin.addEventListener('click', switchForm);
<<<<<<< HEAD
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);
});
//# sourceMappingURL=form.js.map
=======
//# sourceMappingURL=login.js.map
>>>>>>> cd96bcd1fedce63549baa31185b960a92b9ace0d
