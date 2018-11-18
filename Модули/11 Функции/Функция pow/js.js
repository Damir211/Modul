//Функция для возведение в степень
function pow(n,x){
	var result = n;
	for(var i=1;i<x;i++){
    result *= n;
	}
	return result;
};

//Проверка целое ли число
function valid(){
	
var number1 = document.getElementById('number');
var pow1 = document.getElementById('pow');
var outptuInHtml = document.getElementById('result');
var result;

if ((+number1.value ^ 0) !== +number1.value){
outptuInHtml.innerHTML = "Не верно введены значения!";
number1.classList.add("error");
}else if ((+pow1.value ^ 0) !== +pow1.value){
outptuInHtml.innerHTML = "Не верно введены значения!";
pow1.classList.add("error");
}else{
	number1.classList.remove("error");
	pow1.classList.remove("error");
	result = pow(+number1.value,+pow1.value);
	outptuInHtml.innerHTML = "Результат: " + result;
}
};


//При нажатии на кнопку
var button1 = document.getElementById("knopka");
button1.addEventListener('click',function(){
  valid();
});