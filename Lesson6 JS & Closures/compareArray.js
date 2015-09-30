/*
Написать функцию, которая сравнивает 2 числовых массива (А,В)
результатом выполнения функции должно быть:
- true в случае, если массивы одинаковы по длинне, и элементы массива A равны элементам массива B
- объект вида 
 {result:false, bigger:[1,5,18...]}
где bigger - отсортированный по возрастанию массив, сумма элементов которого больше. Если сумма элементов одинакова - bigger = пустой массив.
 
Пример работы функции
compare([7,2], [7,2]) --> true
compare([3,1,4], [8]) --> {result:false, bigger:[]}
compare([3,1,4], [8,2]) --> {result:false, bigger:[2,8]}
*/

console.log("------------------------------------------------------------------------------------ compareArrays.js ------------------------------------------------------------------------------------");

function compare(firstArray, secondArray) {

	var arr = [], bufferZone, result;

	firstArray.sort(function (a, b) { return a - b; });
	secondArray.sort(function (a, b) { return a - b; });

	for (i = 0; i < arguments.length; i++) {
		bufferZone = arguments[i].reduce(function(previousValue, currentValue) {
        	return previousValue + currentValue;
        });
		arr.push(bufferZone);
	}

    function checkElem() {

		if (firstArray.length == secondArray.length) {
			result = true;
		} 
		else if (firstArray.length !== secondArray.length) {
			result = false;
		} else {
			console.log("Something is wrong...");
		}
	}

	checkElem();

	function checkSum() {

		if (arr[0] > arr[1]) {
			console.log(
				{
					"result": result,
					"bigger": firstArray
				}
			);
		} else if (arr[0] < arr[1]) {
			console.log(
				{
					"result": result,
					"bigger": secondArray
				}
			);
		} else if ((arr[0] == arr[1]) && (firstArray.length == secondArray.length)) {
			console.log(
				{
					"result": result,
				}
			);
		} else if ((arr[0] == arr[1]) && (firstArray.length !== secondArray.length)) {
			console.log(
				{
					"result": result,
					"bigger": []
				}
			);
		} else {
			console.log(
				{
					"result": result,
					"key": "Something's wrong..."
				}
			);
		}

	}

	checkSum();

}

console.log(compare([7,2], [7,2]));
console.log(compare([3,1,4], [8]));
console.log(compare([3,1,4], [8,2]));