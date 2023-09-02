// MIN
/*
Запитай у користувача його вік і визначи, ким він є:дитиною (0-11), підлітком (12-17),
дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/


/*
const userAge = +prompt("Enter your age");
if (userAge < 12) {
    console.log('Child');
} else if (userAge < 18) {
    console.log('Teen');
} else if (userAge < 60) {
    console.log('Adult');
} else {
    console.log('Pensioner')
}
*/

/*Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д*/

/*const userNumber = +prompt('Enter your number');

if (userNumber === 0) {
    console.log(')');
} else if (userNumber === 1) {
    console.log('!');
} else if (userNumber === 2) {
    console.log('@');
} else if (userNumber === 3) {
    console.log('#');
}else if (userNumber === 4) {
    console.log('$');
}else if (userNumber === 5) {
    console.log('%');
}else if (userNumber === 6) {
    console.log('^');
}else if (userNumber === 7) {
    console.log('&');
}else if (userNumber === 8) {
    console.log('*');
}else {
    console.log('(')
}*/

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

/*
const firstNumber = +prompt('Enter your first number');
const secondNumber = +prompt('Enter your second number');

let sum = 0;

if (firstNumber <= secondNumber) {
    for (let i = firstNumber; i <= secondNumber; i++){
        sum += i;
    }
}  else {
    for (let i= secondNumber; i <= firstNumber; i++ ){
        sum += i;
    }

}
console.log(sum);
*/

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

/*let firstNumber = +prompt('Enter your first number');
let secondNumber = +prompt('Enter your second number');

while (firstNumber != 0 & secondNumber != 0 ){
    if (firstNumber > secondNumber){
        firstNumber = firstNumber % secondNumber;
    } else { secondNumber = secondNumber % firstNumber;
     }
}
console.log(firstNumber + secondNumber);*/

// Запитай у користувача число і виведи всі дільники цього числа.

/*let userNumber = +prompt('Enter your number');
for (let i=1; i <= userNumber; i++) {
    if (userNumber % i===0){
        console.log(i);
    }
}*/


// Normal

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// const userNumber = +prompt('Enter your user number');
// let isPalindromeNumber = function (x) {
//     if (x < 0) return false;
//     if (x % 10 === 0) return false;
//
//     let rev = 0;
//
//     while (x > rev) {
//         rev *= 10;
//         rev += x % 10;
//         x = Math.trunc(x/10);
//     }
//
// return x === rev || x === Math.trunc(rev/10)
// };
// console.log(isPalindromeNumber(userNumber));


/*
Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    від 200 до 300 - знижка буде 3%;
від 300 до 500 - 5%;
від 500 і вище - 7%.*/

// let userSum = +prompt('Enter your sum');
// let userDisc;
// if (userSum >= 200 && userSum < 301) {
//     userDisc = userSum * 0.97;
// } else if ( userSum >= 300 && userSum < 500) {
//     userDisc = userSum * 0.95;
// } else if (userSum >= 500) {
//     userDisc = userSum * 0.93;
// } else {
//     userSum = userDisc;
// }
// console.log(userDisc);
/*



Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
При цьому також порахуй, скільки з них парних і непарних.
иведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/


/*

let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;
let pairedNumber = 0;
let unpairedNumber = 0;

for (let i = 1; i <= 10; i++){
    let userNumber = +prompt("Enter" + i + "your number");
    if (userNumber > 0){
        positiveNumber++;
    }else if (userNumber < 0) {
        negativeNumber++;
    }else {
        zeroNumber++;
    }

    if (userNumber % 2 === 0) {
        pairedNumber++;
    }else {
        unpairedNumber++;
    }
}
console.log(` ${positiveNumber} Positive Numbers , ${negativeNumber} Negative Numbers,${zeroNumber} Zero Numbers, ${pairedNumber} Paired Numbers, ${unpairedNumber} Unpaired Numbers`);*/


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let currentDayIndex = 0;
//
// while (true) {
//     const currentDay = daysOfWeek[currentDayIndex];
//     const userInput = confirm(`Day of week: ${currentDay}. Do you wanna see next day?`);
//
//     if (!userInput) {
//         break;
//     }
//
//     currentDayIndex = (currentDayIndex + 1) % 7;
// }

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

/*
for (let i = 2; i <= 9; i++) {
    console.log(`Таблиця множення для ${i}:`);
    for (let j = 1; j <= 10; j++) {
        const result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
    console.log('\n');
}*/
