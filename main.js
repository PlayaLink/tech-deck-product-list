// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    getProducts();

});

// Functions =============================================================

// Fill table with data
function getProducts() {

    // Empty content string
    var products = [];

    // jQuery AJAX call for JSON
    $.getJSON( 'http://feed.spinmasterstudios.com/rest/service/sm/us/catalog/ProductList?root=cat_tech_deck&categories=true', function( data ) {

        data.map(function(product){
          products.push(product);
        });
    });
    return products;
  }
