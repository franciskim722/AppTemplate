var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/"));

app.get("/",function(req, res){
    res.redirect("/index.html");
});

app.listen(3000, function(){
    console.log("Server running on port 3000.");
});
