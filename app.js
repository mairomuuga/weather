document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city){
	var key = "a6e7cf1127ed1dde18d06df7b57d7c7b";
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
	return resp.json()
	})
	.then(function(data) {
		console.log(data);
		drawWeather(data);
	})
	.catch(function() {
		//catch any errors
	});
}

function cityWeather(e){
	weatherDataFetch("Tallinn");
}

function drawWeather(data){
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var description = data.weather[0].description;
	document.querySelector("#description").innerHTML=description;
	document.querySelector("#temp").innerHTML=celcius+"&deg;";
	document.querySelector("#location").innerHTML=data.name;
}