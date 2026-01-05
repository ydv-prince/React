console.log("Hello there!!");

function myFun() {
    var fname = "Prince";
    var lname = "Yadav";
    console.log("From the fun");
    console.log("Welcome "+ fname+ " "+ lname);
    console.log(`Welcome ${fname} ${lname}`);
}
myFun();

//Write a fun which can perform all the arithmetic operations on two numbers
function arithmeticOperation(a,b){
    console.log(`Sum: ${a+b}`);
    console.log(`Diff: ${a-b}`);
    console.log(`Mul: ${a*b}`);
    console.log(`Div: ${a/b}`);
    console.log(`Modulo: ${a%b}`);
}
let a = 5;
let b = 2;
arithmeticOperation(a,b);

// function OddEven(a){
//     if(a % 2 == 0){
//         return a*2;
//     }
//     else{
//         return a*3;
//     }
// }
const myNum = (n) => n%2 == 0 ? 2*n : 3*n;
console.log(myNum(4));
console.log(myNum(5));
console.log(myNum(6));