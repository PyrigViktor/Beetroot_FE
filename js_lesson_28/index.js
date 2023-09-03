// Min
// Напиши всі можливі варіанти створення функцій.

/*
Function Declaration;
    Объявление функции (function definition, или function declaration, или function statement) состоит из ключевого слова function и следующих частей:

    Имя функции.
    Список параметров (принимаемых функцией) заключённых в круглые скобки () и разделённых запятыми.
    Инструкции, которые будут выполнены после вызова функции, заключают в фигурные скобки { }.

Function Expression;

    функция может быть вида "function definition expression".
    Такая функция может быть анонимной (она не имеет имени).

Arrow Function.

    Выражения стрелочных функций имеют более короткий синтаксис по сравнению с функциональными выражениями и лексически привязаны к значению this (но не привязаны к собственному this, arguments, super, или new.target).
    Выражение стрелочных функций не позволяют задавать имя, поэтому стрелочные функции анонимны, если их ни к чему не присвоить.*/


// Створи функцію, яка буде виводити кількість переданих їй аргументів.

/*
function userArg () {
    for (let i = 0; i <arguments.length; i++) {
        console.log(arguments[i]);
    }
}

userArg(1, 2, 3, 'hello', 'qwerty');*/


/*
Напиши функцію, яка приймає 2 числа і повертає :
    -1, якщо перше число менше, ніж друге;
1 - якщо перше число більше, ніж друге;
0 - якщо числа рівні.*/

/*
function userNumbers (a, b) {
    if (a < b){
        return -1;
    }else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

console.log(userNumbers(4, 5));
console.log(userNumbers(5, 4));
console.log(userNumbers(4, 4));
*/

// Напиши функцію, яка обчислює факторіал переданого їй числа.

// function factorial(n) {
//     let result = 1;
//     while (n){
//         result *= n--;
//     } return result;
// }
// console.log(factorial(4));



// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
/*
function userNumber (a, b, c) {
    let combinedNumber = Number(`${a}${b}${c}`);
    return combinedNumber;
}
console.log(userNumber(1, 4, 9));
*/


// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата
function square(a, b) {
    if (b === undefined) {
        return a * a;
    } else {
        return a * b;
    }
}
console.log(square(10));
console.log(square(7, 4));


// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
/*
function isPerfect(n){
    let result = 1;
    for (let i=2; i <= n ** .5; i++) {
        if (n % i === 0) {
            result += i + n / i ;
        }
    } return result === n && n>1;
}

console.log(isPerfect(28));
*/

/*Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.
    Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/

/*
function isPerfect(n){
    let result = 1;
    for (let i=2; i <= n ** .5; i++) {
        if (n % i === 0) {
            result += i + n / i ;
        }
    } return result === n && n>1;
}

function isPerfectNumberRange (min, max) {
    for (let i = min; i <= max; i++){
        if (isPerfect(i)) {
            console.log(`${i} perfect number`);
        }
    }
}

isPerfectNumberRange(6, 242);
*/











