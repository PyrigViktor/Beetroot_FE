/*
Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

    поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
    Продемонструй роботу властивостей і методів.
*/


/*
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }


    get radius(){
        return this.radius;
    }

    set radius (newRadius) {
        if (newRadius >=0) {
            this.radius = newRadius;

        }else {
            console.log("Circle radius <0, pls enter correct radius");
        }
    }

        get diameter() {
        return this.radius * 2;
        }

        calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
        }

        calculateCircleLength () {
        return 2 * Math.PI * this.radius;
}
}

const myCircle = new Circle(3)

console.log(`Circle Radius: ${myCircle.radius}`);
console.log(`Circle Diameter: ${myCircle.diameter}`);
console.log(`Circle Area: ${myCircle.calculateArea()}`);
console.log(`Circle Length: ${myCircle.calculateCircleLength()}`);

myCircle.radius = 12;
console.log(`Circle Radius: ${myCircle.radius}`);
console.log(`Circle Diameter: ${myCircle.diameter}`);
console.log(`Circle Area: ${myCircle.calculateArea()}`);
console.log(`Circle Length: ${myCircle.calculateCircleLength()}`);
*/


/*Реалізуй клас, що описує канцелярський маркер.
    У класі повинні бути такі компоненти:поле, яке зберігає колір маркера;поле, яке зберігає кількість чорнил у маркері (у відсотках);
    метод для вводу (приймає рядок і виводить текст відповідним кольором;
    текст виводиться доти, доки в маркері є чорнило;
    один не пробільний символ — це 0,5 % чорнил у маркері).
    Реалізуй клас, що описує маркер, який можна перезаправляти.
    Успадкуй цей клас від простого маркера й додай метод для заправки.
    Продемонструй роботу написаних методів.*/
/*

class Marker {
    color;
    inkLevel;

    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    write(text) {
        let outputText = '';
        for (const char of text) {
            if (char !== ' ' && this.inkLevel > 0) {
                outputText += char;
                this.inkLevel -= 0.5;
            } else {
                outputText += ' ';
            }
        }

    }
}

class SpecialMarker extends Marker {
    constructor(color, inkCapacity) {
        super(color, 100);
        this.inkCapacity = inkCapacity;
    }
    refill() {
        this.inkLevel = this.inkCapacity;
    }
}


const simpleMarker = new Marker('blue', 50);
simpleMarker.write('This is a simple marker');
const refillableMarker = new SpecialMarker('red', 75);
refillableMarker.write('This is refillable marker');
refillableMarker.refill();
refillableMarker.write('Marker after refill');

*/

























