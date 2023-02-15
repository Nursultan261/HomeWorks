const counters = document.querySelectorAll('[data-counter]');

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = event.target;

            if (target.closest('.counter__button')) {
                if (target.closest('.counter').querySelector('input').value === '' && (target.classList.contains('counter__button_minus') || target.classList.contains('counter__button_plus'))) {
                    target.closest('.counter').querySelector('input').value = 0;
                }

                let value = parseInt(target.closest('.counter').querySelector('input').value);

                if (target.classList.contains('counter__button_plus')) {
                    value++;
                } else {
                    --value;
                }

                if (value <= 0) {
                    value = 0;
                    target.closest('.counter').querySelector('.counter__button_minus').classList.add('disabled')
                } else {
                    target.closest('.counter').querySelector('.counter__button_minus').classList.remove('disabled')
                }

                target.closest('.counter').querySelector('input').value = value;
            }
        })
    })
}
document.querySelector('#block').onmousemove = function (event) {
    event = event || window.event


    document.querySelector('#X').innerHTML = event.offsetX
    document.querySelector('#Y').innerHTML = event.offsetY
}
const color = prompt("введите цвет/красный/желтый/зеленый").toLowerCase().trim()

switch (color) {
    case 'красный':
        document.getElementsByClassName('red')[0].style.background = 'red'
        document.getElementsByClassName('red')[0].textContent = 'STOP!'
        break
    case 'желтый':
        document.getElementsByClassName('yellow')[0].style.background = 'yellow'
        document.getElementsByClassName('yellow')[0].textContent = 'Get Ready!'
        break
    case 'зеленый':
        document.getElementsByClassName('green')[0].style.background = 'green'
        document.getElementsByClassName('green')[0].textContent = 'start!'
        break
    default:
        document.getElementsByClassName('red')[0].textContent = 'try'
        document.getElementsByClassName('yellow')[0].textContent = 'again'
        document.getElementsByClassName('green')[0].textContent = '!!!'
        document.getElementsByClassName('red')[0].style.color = 'white'
        document.getElementsByClassName('green')[0].style.color = 'white'
        document.getElementsByClassName('yellow')[0].style.color = 'white'
}