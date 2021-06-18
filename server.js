
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


app.get('/home', function (req, res) {
    res.status(200).render("home", {
    })
    
});

app.get('/house', function (req, res) {
    res.status(200).render("house", {
    })
    
});

app.get('/members', function (req, res) {
    res.status(200).render("members", {
    })
    
});

app.get('/contact', function (req, res) {
    res.status(200).render("contact", {
    })
    
});

app.get('/officers', function (req, res) {
    res.status(200).render("officers", {
    })
    
});

app.get('/contact', function (req, res) {
    res.status(200).render("contact", {
    })
    
});
app.get('/creed', function (req, res) {
    res.status(200).render("creed", {
    })
    
});

app.get('*', function (req, res) {
    res.status(404).render("404", {page: req.url})
  });

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});