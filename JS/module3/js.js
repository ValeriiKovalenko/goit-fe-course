'use strict'


// const name = function(name = 'Ivan', lastName = 'Ivan', day = 0) {
//     console.log(`my name is ${name}, my last name is ${lastName}`)
// }
// name()
// name();
// function name(){
//     console.log('Hello')
// }

// const a = function (a, b) {
//     return  a + b
    
// };

// console.log(a(10, 15))

// a();
// console.log(a(5, 10))
// function a (a, b) {
//     return a + b
  
// };

// function restMass(...rest) {
// console.log(rest)
// }
// console.log(restMass(1,4,5,6,77,5))

// ------------------------------------------------------------------------------------
// function fn(b) {
//     return b % 2 === 0;
// }
// // console.log(fn(4))

// function fn2 (b) {
//     if(fn(b)) {
//         alert('ok')
// } else {alert('no')}
// }
// fn2(4)

// const fn = (a, b) => a * b;
//  console.log(fn(3,3))
// const fn = b => b % 2 === 0;
// const fn2 = b  => fn(b) ? alert('ok'): alert('ne ok');
// fn2(3)
 // __________________________________________________________________________________________
























 'use strict'

//=============================== task 01 =======================

// Заполните массив 10-ю иксами с помощью цикла.
// let a = [];
// for (let i = 0; i < 10; i++)
// a.push('x')
// console.log(a)

//=============================== task 02 =======================

// Заполните массив числами от 1 до 10 с помощью цикла.
// let a = [];
// for (let i = 0; i < 10; i++)
// a[i] = i + 1;
// console.log(a)

//=============================== task 03 =======================

// Дана строка, например, '123456'. Сделайте из нее '214365'.

// let a = '123456';
// let b = a.split('')
// let a1 = a[1] + a[0] + a[3] + a[2] + a[5] + a[4]

// console.log(a1)
//=============================== task 04 =======================

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
// больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange (a) {
//   return  a > 0, a < 10

// }
// console.log(isNumberInRange(10))


//=============================== task 05 =======================

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven (e) {
//     return e % 2 !== 0
// }
// console.log(isEven(2))
//=============================== task 06 =======================

// Дан массив с целыми числами. Создайте из него новый массив, 
// где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи
// let a = [1,3,5,6,9];
// let b = [];
// function isEven (e) {
//         return e % 2 !== 0
//     }
//     console.log(isEven(2))
// for(let i = 0; i < a.length; i++) {
//     if(isEven(a[i])){ b.push(a[i])

//     }
// }
// console.log(b)


//=============================== task 07 =======================//////////////////////////////////////////////=====++++++++++++++++++

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
//  которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой

// var str ='abcde abcde abcde';
// var newArr = [];
// let a = str.split(' ')

// console.log(a[0][0].toUpperCase());

// function ucfirst (a) {
//     for(let key of a) {
//         console.log(key[0].toUpperCase())
//     }

//     return key[0]
// }
// console.log(ucfirst(a))

 




//=============================== task 08 =======================

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
// Функция должна возвращать true или false

// var str = 'яблоbко';
// var arr = ['банан', 'яблоко', 'персик'];

// function inArray (str, arr) {

//     return arr.includes(str);
    
// }
// console.log(inArray(str, arr))


//=============================== task 09 =======================

// Сделайте функцию getDivisors, которая параметром принимает число и
//  возвращает массив его делителей (чисел, на которое делится данное число)
// let mass = [];

// function getDivisors (a) {
//     for(let i = 0; i <= a; i++) {
//         if(a % i === 0) {
//             mass.push(i)
//         }
//     }
// return mass;
// }
// console.log(getDivisors(42))

//=============================== task 10 =======================


/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/


// function checkNumberType(num) {
//     if(num % 2 === 0){ console.log('even')

//     } else { console.log('odd')
//         }
        
// }
// checkNumberType(11)




//=============================== task 11 =======================

/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
// let str = "Curabitur ligula sapien, tincidunt non."
// let mass = str.split('')
// function formatString (str) {
//     if(mass.length > 40) {
//         mass.length = 40
        
//     }
    
    
//     let a = mass.join('') + '...'
    
// console.log(a)
// return str = a
// }
// console.log(formatString())

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка
// // Вызовы функции для проверки
// // console.log(
// //     formatString("Curabitur ligula sapien, tincidunt non.")
// //   ); // вернется оригинальная строка
  
  

//=============================== task 12 =======================???????????


/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// function a(str) {
//   if(str.includes('false')) {
//     alert('true')
    
    
//   }
//   else { alert('false')}
//   return(str)
// }
// console.log(a('fAlse  ee khff'))
// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



// //=============================== task 13 =======================

// /*  
//   Написать функцию, getPx(str) 
//   Функция getPx должна получать строку вида '10px',
//   проверять была ли передана строка, если да, 
//   возвращать только числовую составляющую, к примеру 10.
    
//   Если была передана не строка, функция возвращает null.
// */
// let str;
// function getPx (str) {
//   if(typeof str == 'string' ) {
// alert('ok') 
//   }
//   else {alert('Ne ok')}
//   return (parseInt(str))
// }
// console.log(getPx('10px'))
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // true
// console.log( getPx("10.5") === 10.5 ); // true
// console.log( getPx("0") === 0 ); // true
// console.log( getPx(-1) ); // null
// console.log( getPx(10) ); // null


// //=============================== task 14 =======================???????????????????

// /*  
//   Напиши фукнцию findLongestWord(str), которая принимает 
//   параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
//   Важное условие - в строке могут быть только пробелы, символы букв и цифр!
// */

// function findLongestWord (str) {
// let mass = str.split(' ')
// console.log(mass)
// let longestWord = 0;
// let word ;
// for(let i = 0; i < mass.length; i++) if

//   (mass[i].length > longestWord) {
//     longestWord = mass[i].length
//     word = mass[i]
//   }
  
// return(word)
// }


// // Вызовы функции для проверки
// console.log(
  //  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
  // ); // 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // 'force'
    

// //=============================== task 15 =======================


// /*  
//   Напиши функцию findLargestNumber(numbers), 
//   которая получает массив чисел numbers, и возвращает 
//   самое большое число в массиве.
// */

// function findLargestNumber(numbers) {
// let number = 0;
// for( let i = 0; i < numbers.length; i++) if (
//   numbers[i] > number
// ) {
//   number = numbers[i]
 
  
// } return(number)
// }

// // Вызовы функции для проверки
// console.log(findLargestNumber([1, 2, 3, , 22])); // 3
  
  // console.log(
  //   findLargestNumber([27, 12, 18, 5])
  // ); // 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // 128
  

// //=============================== task 16 =======================???????????????????????????

// /*  
//   Есть массив уникальных чисел uniqueNumbers.
  
//   Написать функцию, addUniqueNumbers(...), 
//   которая получает произвольное кол-во чисел как аргументы, 
//   и добавляет в массив uniqueNumbers только уникальные,
//   а те которые в массиве уже есть игнорирует.
// */

// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers(uniqueNumbers) 
// {
//   for(let i = 0; i < uniqueNumbers.length; i++)
//   if(uniqueNumbers[i] !== addUniqueNumbers[i]) {
//     addUniqueNumbers.push(uniqueNumbers[i])
//   } return(uniqueNumbers)
  
// }

// // // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// //=============================== task 17 =======================

// /*
//   Напиши функцию filterFromArray(arr), которая 
//   объявляет 1 параметр, исходный массив arr.
  
//   При вызове функции, первым аргументом всегда будет массив чисел,
//   за которым следуют один или несколько аргументов, тоже чисел. 
  
//   Функция возвращает новый массив, который содержит только 
//   те элементы исходного массива, которые не совпадают 
//   ни с одним из числовых аргументов.
// */



// // Вызовы функции для проверки
// console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]



// //=============================== ***** task **** 18  =======================


// /*
//   Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
//   Добавляемый логин должен:
//     - проходить проверку на длину от 4 до 16-ти символов включительно
//     - быть уникален, то есть отсутствовать в массиве logins
 
//   🔔 Разбейте задачу на подзадачи с помощью функций.
  
//   Напишите функцию isLoginValid(login), в которой проверьте количество символов 
//   параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
//   в заданный диапазон от 4-х до 16-ти символов включительно.
 
//   Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
//   всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
//   если такого логина еще нет и false если логин уже используется.
//   Далее напишите функцию addLogin(allLogins, login) которая:
//     - Принимает новый логин и массив всех логинов как параметры
//     - Проверяет валидность логина используя вспомогательную функцию isLoginValid
//     - Если логин не валиден, прекратить исполнение функции addLogin 
//       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
//     - Если логин валиден, функция addLogin проверяеть уникальность логина 
//       с помощью функции isLoginUnique
//     - Если isLoginUnique вернет true, addLogin добавляет новый логин 
//        в logins и возвращает строку 'Логин успешно добавлен!'
//     - Если isLoginUnique вернет false, тогда addLogin не добавляет 
//        логин в массив и возвращает строку 'Такой логин уже используется!'
       
//   🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
//      позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
//      не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
//      false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
//       - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
//       - isLoginValid только проверяет валидный ли логин и возвращает true или false.
//       - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
//         используются результаты вызовов других функций - isLoginUnique и isLoginValid.
// */

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function(login) {
//   // код
// };

// const isLoginUnique = function(allLogins, login) {
//   // код
// };

// const addLogin = function(allLogins, login) {
//   // код
// };

// // Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'





// ====================================CALLBACK ФУНКЦИИ==================================


function first (callback) {
  console.log(1)
  callback()
}
function second (a, b) {
  return a + b;
}
first(second)