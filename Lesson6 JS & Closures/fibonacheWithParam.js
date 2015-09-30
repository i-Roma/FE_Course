console.log("---------------------------------------------------------------------------------------- fibonacheWithParam.js --------------------------------------------------------------------------");

function fiboFunction(number) {

	var a, b, add, sum;
		a = 0;
		b = 1;

	add = function () {

		for (var i = 1; i < number; i++) {

			sum = a + b;
	        a = b;
	        b = sum;

		};

		document.write("По теории <b style='color:darkblue'>Fibonache</b> сумма чисел в промежутке от <b style='color:green'>1</b> до <b style='color:green'>" + number + "</b> будет равна: " + "<b style='color:darkred'>" + sum + "</b></br>");
		return sum;

	};

	return add;

}

var fibonache = fiboFunction(+prompt("Ведите количество сумируемых элементов", "8"));
var fibonache2 = fiboFunction(+prompt("Ведите количество сумируемых элементов", "10"));
var fibonache3 = fiboFunction(+prompt("Ведите количество сумируемых элементов", "12"));

console.log(fibonache());
console.log(fibonache2());
console.log(fibonache3());