const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");

console.log(date())

let items = ["List Comic", "List Electronics", "List Other"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function(req, res) {
  let day = date();  
   
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res){
  
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

})

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res) {
  res.render("about")
})

app.listen(3001, function(){
  console.log("Server is on 3000!");
});
