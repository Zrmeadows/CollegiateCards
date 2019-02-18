const request = require('request'); //Package installed through npm
const argv = require('yargs').argv; //Package installed through npm

var apiKey = '1c2b3e51ac8a00a0148707febff6ae62';
var city = argv.c || 'biloxi';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

request(url, function (err, response, body) {
	if(err){
		console.log('error:', error);
	} else {
		var weather = JSON.parse(body);
		var message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		console.log(message);
	}
});