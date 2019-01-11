const hamburger = document.querySelector('.Header-links--mobile-hamburger');
const dropdown = document.querySelector('.Header-links--mobile-dropdown');
function switcher(event) {
  /*if (dropdown.classList.contains('inactive')) {
    dropdown.classList.remove('inactive');
  } else {
    dropdown.classList.add('inactive');
  }*/
  dropdown.classList.toggle('active');
}
hamburger.addEventListener('click',switcher);



