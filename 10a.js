var cart = [];
var pushtoCart = function (item) { cart.push(item); };
function addtoCart() {
    var productName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        productName[_i] = arguments[_i];
    }
    for (var _a = 0, productName_1 = productName; _a < productName_1.length; _a++) {
        var item = productName_1[_a];
        pushtoCart(item);
    }
    return cart;
}
addtoCart('MotoG play', '4th gen', 'Apple iphone 5s');
console.log(cart);
//console.log('Cart items are:'+addtoCart('MotoG play','4th gen','Apple iphone 5s'));
