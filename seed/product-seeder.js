var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');


var products= [
    new Product({
    imagePath:'https://rukminim1.flixcart.com/image/704/704/jfsknm80/smart-assistant/b/h/m/home-ghome-google-original-imaf46bjrsbbe6dx.jpeg?q=70',
    title : 'Google Home',
    description : 'Smart Home',
    price :'10000',
})
    ];
var done =0;
for(var i=0;i<products.length; i++)
{
    products[i].save(function (err , result) {
        done++;
        if(done == products.length)
        {
            exit();
        }
    });
}

