// Practice - 1
function foo() {
    // console.log('foo');
    bar();
}
foo();
function bar() {
    // console.log('bar');
}
bar();
//---------------------
// Practice - 2
/* function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var avg = total / 3;
    // console.log(avg.toFixed(2));
}
make_avg(50, 500, 75); */
//---------------------
// Practice - 3
function getSum (numbers){
    let sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var index = i;
        var element = numbers[index];
        sum = sum + element;
        var avg = sum / numbers.length;
        console.log(avg);
    }
    return sum;
}

const myArray = [10, 20, 30, 40, 50];
getSum(myArray);
