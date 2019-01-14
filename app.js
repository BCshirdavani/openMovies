
// App.js:
//-------------------------------------------------

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/results", function(req, res){
    // res.send("hello this works...");
    console.log(req.query.movieSearch);
    var movieQuery = req.query.movieSearch
    var url = "http://www.omdbapi.com/?apikey=ac88e755&s=" + movieQuery;
    request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
        //   res.send(body);
          var data = JSON.parse(body);
          res.render("results", {data: data});
       }
  })
});


app.listen(3000, function(){
    console.log("movie app server has started!....port 3000");
})
