/*
 String + string = string (concatenation)
 string + int = string  ""
 int + int = int (Arithmetic)
*/

// let a = 10;
// let b= "hello";
// console.log(typeof(a+b))



// let c = 15;
// let d = 20;
// console.log("Sum of "+c+ " and "+d+" is "+ c+d);


// Swapping

//  let t1=10;
//  let g =20;

//  t = t + g; //30
//  g = t-g; // 10
//  t = t -g //20

//  console.log(t, g);

//  Second way 
let a1= 10;
let b1= 20;

[a1, b1]=[b1,a1]
console.log(a1,b1);



let rahul= true;
rahul++;
console.log(rahul);




// Math functions


console.log(Math.ceil(10.4))
console.log(Math.floor(10))
console.log(Math.round(10.5))
console.log(Math.abs(-8))
console.log(Math.trunc(105.6561942))
console.log(Math.pow(5 , 3))
console.log(Math.sqrt(40));
console.log(Math.cbrt(8))
console.log(Math.max(10,82,89,99,100))
console.log(Math.min(10,20,62,2,45))
console.log(Math.random()) //0to 1
let ar = 234.85546565;
console.log(ar.toFixed(0))


// Maths problems 

// Q.calculate compound interest
// let p = Number(prompt("Enter principle"));
// let r = Number(prompt("Enter a rate"));
// let t = Number(prompt("Enter a time")); 

/* 
A = P * (1 + r/100)^t
 CP = A-P
*/

// console.log(p*Math.pow(1 +r/100, t))
// Q.Generate OTP

console.log(Math.floor( Math.random()*9000)) // 0 to 9000
// Q.area of triangle by heron's formula

// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))
// let c= Number(prompt("Enter third number"))

// if(a+b<= c || a+c<=b || c+b<=a){
//     console.log("not possible")
// }else{
//     let s = (a+b+c)/2
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }

// Q. Circumference of Circle

// let r = Number(prompt("Enter a number"))
// console.log(2*Math.PI *r);


// iF-else :
// if(condition){

// }else{
//     console.log("main to chaluga agar if nahi chala to ")
// }

// if(10<9 || 10> 7){
//     console.log("hello world")
// }else if(18> 5){
//     console.log("mai to chal rha huu")
// }
// else{
//     console.log("main to chalunga")
// }

// Q.Accept two number and print the greatest betwenn them
// let a = Number(prompt("Enter first number"))
// let b = Number(prompt("Enter second number"))

// if(a>b) console.log(a+ "is greatest")
//     else console.log(b+ "is greatest")

// Q .Accept an integer and check whether it is an even number or odd. 
// let aa = Number(prompt("Enter number"))
 
// if(aa % 2 == 0){
//     console.log("even");
// }else console.log("odd");
// Q.Accept name and age form the user.Check if the user is a va(lid voter or not .
 let age = Number (prompt("Enter age"))
 let name = prompt("Enter your name")

 if(age>=18){
    console.log(name + " yes , you are valid voter")
 }else{
    console.log(name+"no, you are not a valid voter")
 }
// Q.Accept three numbers and print the greatest aming them.
// Q.Accept a year and check if it a leap year or not .
// Q.shop discount - Description on graphic
// Q.bijli bill - Description on graphic