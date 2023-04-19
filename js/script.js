const input = document.getElementById('link-input');
const form = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');
const hamburgerMenu = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

form.addEventListener('submit', formSubmit);
hamburgerMenu.addEventListener('click', navToggle);

function formSubmit(event) {
  event.preventDefault();
  if (input.value === '') {
    errMsg.innerHTML = 'Please enter something';
    input.classList.add('border-red');
  } else {
    errMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Successfully Added (Not really)');
  }
}

function navToggle() {
  hamburgerMenu.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
}
