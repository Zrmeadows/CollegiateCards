const express = require('express');			//HTTP package
const bodyParser = require('body-parser');	//parser for req.body
const request = require('request');			
const app = express();

const apiKey = '1c2b3e51ac8a00a0148707febff6ae62';		//API key for pulling weather data

app.use(express.static('public'));					//Expose the files in the public folder to the app
app.use(bodyParser.urlencoded({ extended: true }));	//Setup code for body parser
app.set('view engine', 'ejs');						//Set up the template engine

app.get('/', function (req, res) {
	res.render('index', {temp: null, error: null});
});

app.post('/', function (req, res) {
	var city = req.body.city;																							//City input from the text box
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;				//url for pulling weather data
	
	request(url, function (err, response, body) {
		if (err){
			res.render('index', {temp: null, humidity: null, windspeed: null, error: 'Error, please try again'});
		} else {
			var weather = JSON.parse(body);
			if(weather.main == undefined){
				res.render('index', {temp: null, humidity: null, windspeed: null, error: 'Error, please try again'});	//Throws error if no weather is found
			} else {
				var tempText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
				var humidityText = `The humidity is ${weather.main.humidity}%!`;
				var windspeedText = `The wind speed is ${weather.wind.speed} MPH!`;
				res.render('index', {temp: tempText, humidity: humidityText, windspeed: windspeedText, error: null});
			}
		}
	});
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});