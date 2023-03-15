const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
  //res.send("Server is up and running")
})

app.post("/", function(req, res) {
  
  const query = req.body.cityName;
  const apiKey = "3a0a2aecf7614c283b2b1229dfea437e";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey +"&units=metric#";
  https.get(url, function(response){
    //*console.log(response.statusCode)
    //*hamiltonWeather = response.statusCode
    response.on("data", function(data){
      const weatherTemp = JSON.parse(data).main.temp
      const cityName = JSON.parse(data).name
      const description = JSON.parse(data).weather[0].description
      const icon = "http://openweathermap.org/img/wn/" + JSON.parse(data).weather[0].icon + "@2x.png"
      console.log(cityName, "C", + weatherTemp, " ", description)
      res.write("<h1>The Temperature in " + cityName + " is " + weatherTemp + "C and it's currently " + description + '. <img src="' + icon + '"> </h1>')
      
      res.send()
})
})  


})

app.listen(3000, function() {
  console.log("Server is running on Port 3000.")
})

