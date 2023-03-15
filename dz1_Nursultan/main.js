const imputE = document.querySelector('#email')
const espan =document.querySelector('.Clemail')
const ebutton = document.querySelector('.CbuttonE')
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const showPasswordBtn = document.getElementById('showPasswordBtn');
const showConfirmPasswordBtn = document.getElementById('showConfirmPasswordBtn');

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

showPasswordBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordBtn.textContent = 'Показать';
  } else {
    passwordInput.type = 'password';
    showPasswordBtn.textContent = 'Закрыть';
  }
});

showConfirmPasswordBtn.addEventListener('click', () => {
  if (confirmPasswordInput.type === 'password') {
    confirmPasswordInput.type = 'text';
    showConfirmPasswordBtn.textContent = 'Показать';
  } else {
    confirmPasswordInput.type = 'password';
    showConfirmPasswordBtn.textContent = 'Закрыть';
  }
});

const ep = () => {
    if (emailRegex.test(imputE.value)) {
        espan.innerText = 'успешно'
        espan.style.color = 'green'
    }else {
        espan.innerText = 'неуспешно'
        espan.style.color = 'red'
    }
}


passwordInput.addEventListener('blur', () => {
  if (!passwordRegex.test(passwordInput.value)) {
    passwordInput.setCustomValidity('');
  } else {
    passwordInput.setCustomValidity('');
  }
});

confirmPasswordInput.addEventListener('blur', () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
});

function moveBlock() {
    const block = document.getElementById('moving-block');
    const currentPosition = parseInt(block.style.left || 0);
    const newPosition = currentPosition + 10;
    block.style.left = newPosition + 'px';
    if (newPosition < document.documentElement.clientWidth - 50) {
      requestAnimationFrame(moveBlock);
    }
  }
  
  requestAnimationFrame(moveBlock);
  