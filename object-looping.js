var friendAge = {
    mufassir: 25,
    ohin: 20,
    mehedi: 22,
    faruk: 22,
    halim: 35,
    kazi: 28
}
//-------------------
var shoppingCart = {
    pen: 5,
    book: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 3,
    shoes: 4
}
const keys = Object.keys(shoppingCart); 
// console.log(keys);

const values = Object.values(shoppingCart)
// console.log(values);

// var i = [ 'pen', 'book', 'sunglass', 'keyboard', 'mouse', 'shoes' ]
for(var i = 0; i < keys.length; i++){
     var property = keys[i];
     var propertyValue = shoppingCart[property]
    //  console.log(property, propertyValue);

}

// for loop in
for(var property in shoppingCart){
    const value = shoppingCart[property]
    // console.log(property, value);
}