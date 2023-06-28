//using Function name.
function calcAddition(number1,number2) {
    return number1 + number2;
}
console.log(calcAddition(10,7));

//without Function name.
const square = function(number) {
    return number * number; 
};
const x = square(4);
console.log(x);

//arrow function.
const a = ["Hydrogen","Helium","Lithium","Beryllium"];

const a2 = a.map(function(s) { 
    return s.length;
});

console.log("Normal way ", a2);  //{8,6,7,9}
const a3 = a.map((s) => s.length);
console.log("Using Arrow function ",a3);  // {8,6,7,9}



