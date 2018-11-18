//Напишите функцию sumTo(n), 
//которая для данного n вычисляет сумму чисел от 1 до n.

//Cделайте три варианта решения:

// 1 - С использованием цикла.
// 2 - Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
// 3 - С использованием формулы для суммы арифметической прогрессии.



// 1
function sumTo(n){
	var result = 0;
	for (var i=1;i<n;i++){
		return result;
	}
}
//2
function sumTo1(n){
	if(n!=1){
		return n+sumTo1(n-1);
	}else{
		return n;
	}
}
//3
function sumTo2(n){
	return n*(n+1)/2;
}