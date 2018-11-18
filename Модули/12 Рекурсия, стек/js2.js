//Задача – написать функцию factorial(n), 
//которая возвращает факториал числа n!, 
//используя рекурсивный вызов.

function factorial(n){
	var fact;
	if(n==1){
		return 1;
	}else{
		fact = n * factorial(n-1);
	    return fact;
	}
}

//Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. 

function fib(n){
	var n1=0, n2=1, n3=1;
	for(var i=1;i<n;i++){
		n3=n1+n2;
		n1=n2;
		n2=n3;
	}
	return n3;
}