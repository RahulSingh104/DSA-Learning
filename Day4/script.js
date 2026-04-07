
// Strong number 
// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter a NUmber "))
// let copy = n;

// let ans = 0;
// while(n>0){
//     let dig = n%10;
//     let fact = 1;
//     for(let i =1; i<=dig; i++){
//         fact = fact * i;
//     }
//     ans= ans + fact
//     n=Math.floor(n/10)
// }
// if(copy==ans) console.log("Strong number");
// else console.log("no Strong number");

// Array - array is linear DS with stores multiple value on continous memory allocation.

// let arr = [10,20,30,40];
// arr.push(100) //arr.push(val) -> insert at last 
// arr.unshift(101) //arr.unshift(val)-> insert at first

// console.log(arr)
// arr.pop()// arr.pop()-> delete at last
// console.log(arr)
// arr.shift() //arr.shift() -> delete at first 
// console.log(arr)

// console.log(arr.length)



// arr[10] = 1000
// console.log(arr)

// let arr = new Array(4);
// arr[0] = 10
// arr[1] =20
// arr[2] =30;
// arr[3] =40;
// arr[6] =100

// console.log(arr)


// let prompt = require('prompt-sync')();

// Accept value from user and assign in the array

// let size= Number(prompt("Enter array's size"));
// let arr = new Array(size);

// for(let i= 0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter element"));
// }
// console.log(arr);




// Q 23. Sum of array’s element

// let size = Number(prompt("Enter array's size"));

// let arr = new Array(size);
// let sum =0;

// for(let i =0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter element"));
//     sum = sum + arr[i];
// }
// console.log("Sum =" + sum)


// Q 24. Max element from array

let arr = [10,5,100,8,3,45,19]

let max= arr[0]
for(let i =1; i<arr.length; i++){
    if(arr[i]>max){
        max= arr[i]
    }
}
console.log("max element" + max)
