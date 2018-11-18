//Напишите функцию isInteger(num), 
//которая возвращает true, 
//если num – целое число, иначе false.

function isIn(num){
return num == (~~num);
};
alert(isIn(2));
alert(isIn(1.2));