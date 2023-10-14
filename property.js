var shoppingCart = {
    pen: 25,
    book: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 2,
}
// When you know the specific property name use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative
var penCount2 = shoppingCart['pen'];
//-----------------------------------         
var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);

console.log(properties);
// console.log(shoppingCart);