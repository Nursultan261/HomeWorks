let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i]);
    let char = num[0];
    if (char == 1 || char == 2 || char == 5) {
        console.log(num);
    }
}
let i = 20
while (i--){
    console.log(i)
}
let colors = prompt('Выберите цвет: (красный,желтый,зеленый)')

switch (colors) {
    case 'красный' :
        alert('СТОП')
        break
    case 'желтый':
        alert('ЖДИТЕ')
        break
    case 'зеленый':
        alert('ИДИТЕ')
        break
    default:
        alert('Выбирайте Цвета')
        break
}

