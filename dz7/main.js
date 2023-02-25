class Cars {
constructor(options) {
    this.model = options.model
    this.color = options.color
    this.options = options.wheels
}
start () {
    console.log('Машина заведена');
 }
}

class Sportcar extends Cars {
    constructor (options) {
        super(options);
        this.maxspeed = options.maxspeed
    }
}

class Supercar extends Cars {
    constructor(options) {
        super(options)
        this.speed = options.speed
    }
}

class Coupe extends Cars {
    constructor(options) {
        super(options)
        this.comfort = options.comfort
    }
}
const myGTR35 = new Sportcar ('GTR35', 'platinum', '4', '380');
myGTR35.start();

const myFerrari = new Supercar ('ferrari', 'red', '4', '320');
myFerrari.start();

const mysCls63 = new Sportcar ('CLS63 AMG', 'blac', '4', 'comfort');
mysCls63.start();

class Light
{
    constructor(selector) {
        this.$element = document.getElementById(selector)
    }
}


class Circle extends Light
{
    constructor(options) {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt("Выберите цвет светофора").toLowerCase()
if (color === "красный") {
    const red = new Circle({
        selector: "red",
        color: "red",
        text: "stop"
    })
} else if(color === "желтый") {
    const yellow = new Circle({
        selector: "yellow",
        color: "yellow",
        text: "wait"

    })
} else if(color === "зеленый") {
    const green = new Circle({
        selector: "green",
        color: "green",
        text: "go"

    })
} else {
    alert("Вы должны ввести цвет светофора: красный, желтый, зеленый")
}


