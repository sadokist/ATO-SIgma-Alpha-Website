
var express = require("express")
var path = require('path');
var exphbs = require("express-handlebars")



var app = express()

var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")


app.get('/', function (req, res) {
    res.status(200).render("home", {
    })
    
});

app.use(express.static('public'));

app.get('/members', function (req, res) {
    res.status(200).render("members", {
    })
    
});

app.get('*', function (req, res) {
    res.status(404).render("404", {page: req.url})
  });

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});