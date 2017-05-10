var express = require('express');
var app = express();
var request = require('request');

// var indexRoutes = require('routes.js');

app.set("view engine", "ejs");

app.get('/', function(req, res){
  request("http://feed.spinmasterstudios.com/rest/service/sm/us/catalog/ProductList?root=cat_tech_deck&categories=true",
    function(error, response, body){
      var productsArray = JSON.parse(body).products
      res.render('../views/home', {products: productsArray});
      console.log();
  });
});


app.use(express.static(__dirname + '/public'));



// app.get('/data', function(req, res){
//   $.get("http://feed.spinmasterstudios.com/rest/service/sm/us/catalog/ProductList?root=cat_tech_deck&categories=true", function(data, status){
//     console.log(data);
//     res.render(data);
//   });
// });



var url = process.env.PORT || 3000;
app.listen(url, process.env.IP, function(){
  console.log("Server is running...");
});
