// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let userName = prompt("Enter your user name");
if (userName) {
    alert("Hello, " + userName + "!");
}

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
let userAge = prompt("Enter year or your birth");
const currentYear = 2023;
let age = currentYear - userAge;
console.log(age);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата;
let userLenght = prompt("Enter side length");
let squarePerimetre = userLenght * 4;
console.log(squarePerimetre);

// Запитай у користувача радіус кола і виведи площу такої окружності.
let userRadius = prompt("Enter circle radius");
const PI = Math.PI;
let circleArea = userRadius * userRadius * PI;
console.log(circleArea);


// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let userDistance = prompt("Enter distance between two cities");
let userTime = prompt("Enter time travel");
let userSpeed = userDistance / userTime;
console.log(userSpeed);


// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
let dollars = prompt("Enter dollar value");
const euro = 0.91;
let convertUsdToEuro = dollars * euro;
console.log(convertUsdToEuro);
