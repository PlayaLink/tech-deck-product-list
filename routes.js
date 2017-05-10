var express     = require("express");
var router      = express.Router({mergeParams: true});

router.get('/data', function(req, res){
  $.get("http://feed.spinmasterstudios.com/rest/service/sm/us/catalog/ProductList?root=cat_tech_deck&categories=true", function(data, status){
    res.render('../views/home', {products = data});
  });
});

module.exports = router;
