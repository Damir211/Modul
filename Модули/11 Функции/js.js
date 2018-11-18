//Следующая функция возвращает true, если параметр age больше 18. 
//В ином случае она задаёт вопрос confirm и возвращает его результат.

//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//   return confirm('Родители разрешили?');
//  }
//}

//Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

//1-Используя оператор '?'

function checkAge(age) {
 return (age > 18) ? true : confirm('Родители разрешили?'); 
}

//2-Используя оператор ||

function checkAge(age) {
 return (age > 18) || confirm('Родители разрешили?'); 
}

//**********************************************************

//Задача «Hello World» для функций :)

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

function min(a, b) {
 return a < b ? a : b; 
}

