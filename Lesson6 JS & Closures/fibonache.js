console.log("---------------------------------------------------------------------------------------- fibonache.js ------------------------------------------------------------------------------------");

function fibonache(number) {

	var a, b, add, sum;
		a = 0;
		b = 1;

	add = function () {
		sum = a + b;
        a = b;
        b = sum;
		return sum;
	};

	return add;

}

var callOne = fibonache();
var callTwo = fibonache();
var callThree = fibonache();

console.log('callOne');
console.log(callOne());
console.log(callOne());
console.log(callOne());

console.log('');

console.log('callTwo');
console.log(callTwo());
console.log(callTwo());
console.log(callTwo());
console.log(callTwo());

console.log('');

console.log('callThree');
console.log(callThree());
console.log(callThree());
console.log(callThree());
console.log(callThree());
console.log(callThree());