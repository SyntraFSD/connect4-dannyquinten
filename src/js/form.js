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
  const inputField = loginForm.querySelectorAll(selectors:'input');
  const postdata = {};
  inputFields.forEach(callbackfn:function ('input')
  {
    postData[inputField.name] = inputField.value;
  }
)
  return formData;
}

function login(event){
  event.preventDefault();
  const formData = get FormData(loginForm);
  const request = new HMLHttpRequest();
  request.addEventListener('readystatechange', listener:function(event) {
    console.log(event);
  });
  request.open(method:'POST', url:'http://conect4.pienter.space/api/auth/login');
  request.setRequestHeader(name:'Content-Type', value:'aaplication/json');
  request.send(JSON.stringify(formData));

  }
  switchForm(registerForm, loginForm);

goToRegister.addEventListener(type: 'click',showRegisterForm);
goToLogin.addEventListener(type: 'click', showLoginForm);
loginForm.addEventListener(type: 'submit', goToLogin);
