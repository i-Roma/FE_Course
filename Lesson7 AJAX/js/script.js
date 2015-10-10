$(document).ready(function(){

	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data){
			console.log(data);

			var user = data.results[0].user, location = user.location, name = user.name, objArray = [user, location, name], inputId = [], keyBigObj = [], valueBigObj = [], key, val;

			function keyAndValue() {

				inputs = document.getElementsByTagName("input");
				for (var i = 0; i < inputs.length; i++) {
					if (inputs[i].type !== "checkbox" && inputs[i].type !== "radio") {
					  	inputId.push(inputs[i].getAttribute("id"));
						inputs[i].setAttribute("name", inputId);
					};
				};

				for (var i = 0; i < objArray.length; i++) {
					for(var j in objArray[i]) {
						key = j, val = objArray[i][j];
						if (Object.prototype.toString.call(val) !== '[object Object]') {
							keyBigObj.push(key);
							valueBigObj.push(val);
							for (var nugeDavai in inputId) {
								if (key == inputId[nugeDavai]) {
									inputs[inputId[nugeDavai]].value = val;
								};
							};
						};
					};
				};
			};
			keyAndValue();
		},
		error: function() {
			console.error("Somthing is wrong...");
		}
	});

	$(".form-horizontal").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "GET",
			url: "http://jsonplaceholder.typicode.com/posts/1",
			contentType: "application/json",
			data: str,
			crossDomain: true,
			success: function(msg) {
			   console.log(msg);
			},
			error: function() {
			console.error("Error");
			}
		});
		return false;
	});

	$(".form-horizontal").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "http://jsonplaceholder.typicode.com/posts",
			contentType: "application/jsonp",
			data: str,
			crossDomain: true,
			success: function(msg) {
			   console.log(msg);
			},
			error: function() {
			console.error("Error");
			}
		});
		return false;
	});

})



