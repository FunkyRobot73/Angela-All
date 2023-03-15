const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const { Http2ServerRequest } = require("http2");
const https = require("https")

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
  //res.send("Server is up and running")
})

app.post("/", function(req, res){

  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let emailNameV = req.body.emailName;

  let data = {
    members: [
      {
        email_address: emailNameV,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  let jsonData = JSON.stringify(data);
  const url = "https://us14.api.mailchimp.com/3.0/lists/c148b896a0";
  const options = {
    method: "POST",
    auth: "funkyrobot:5f680cb2d24c9d09860daa626d509471-us14"
  }
  const request = https.request(url, options, function(response){

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on Port 3000.")
})

// API Key
//  5f680cb2d24c9d09860daa626d509471-us14

// List Id  c148b896a0