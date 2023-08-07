// MINIMUM
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

/*let result = 0.1 + 0.2;
result = (result.toFixed(1));
console.log(result);*/

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

/*let a = +"1";
let b = 2;
let result = a + b;
console.log(result);*/

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

/*let userNumber = +prompt("Enter how many gigabytes you have ");
const fileSize = 820;
let userNumberMb = userNumber * 1024;
let result =  Math.floor(userNumberMb / fileSize);
console.log(result);*/

// NORMAL

/*Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/

/*let userCash = +prompt("Enter amount of money");
let barPrice = +prompt("Enter price of one chocolate bar");
let barAmount = Math.floor(userCash / barPrice);
const change = userCash - (barAmount * barPrice);
change.toFixed(2);
console.log(`${barAmount} chocolate bars , ${change} amount`);*/


/*
Запитай у користувача тризначне число і виведи його задом наперед.
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/

/*let userNumber = +prompt("Enter your random three digit number");
let numberOne = userNumber % 10;
let numberTwo = Math.floor((userNumber / 10) % 10);
let numberThree = Math.floor(userNumber / 100);
let result = numberOne * 100 + numberTwo * 10 + numberThree;
console.log(result);*/

// or

/*let userNumber = +prompt("Enter your random three digit number");
let stingNumber =[...userNumber.toString()].reverse().join("");
let num = Number(stingNumber);
console.log(num);*/

// MAXIMUM

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

/*
let userDeposit = +prompt("Enter your deposit");
const annual = 5;
let depositDays = 60;
const daysPerYear = 365;
let result = (userDeposit * annual * (depositDays / daysPerYear))/100;
console.log(result);
*/

/*
Що повернуть вирази:
2 && 0 && 3 - поверне 0

2 || 0 || 3 - поверне 2

2 && 0 || 3 - поверне 3*/
