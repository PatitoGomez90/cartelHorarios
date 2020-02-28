var express = require("express");
var app = express();
var cons = require('consolidate');
var swig = require('swig');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render("index");
})

var port = Number(process.env.PORT || 5000);
app.listen(port, function () { console.log("Listening on " + port); });