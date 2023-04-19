const input = document.getElementById('link-input');
const form = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

form.addEventListener('submit', formSubmit);

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
