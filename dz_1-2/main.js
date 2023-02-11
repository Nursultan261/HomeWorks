
var firstNum = Number(prompt ("введите первое число"))
let secondNum = Number(prompt ("введите второе число"))
document.write(calc(firstNum,secondNum))


function calc (a,b){
    if (a<b){
        return a;
    }else return b;
}

console.log(calc(firstNum,secondNum))

    s = prompt()
    function deadline(s) {
      console.log(s.length)
    }
    deadline(s)