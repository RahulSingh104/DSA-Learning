// Strings -> "Rahul" 'R'

// // Strings are immutable in nature .
// let r = "Rahul"
// r[3] ='t';
// console.log(r)
// String are sequence of character 
// String shows behaviour like array 

// let arr = [10,20,30,40,50,60]
// arr[3] = 100;
// console.log(arr) // array are mutable 



// let p  = "Rahul"

// console.log(p.slice(3));
// console.log(p.slice(3,4))

// console.log(p.substring(3))

// console.log(p.substring(3,5))
// console.log(p.length)


// 

let R  = "RahulSingh";
let rev = ""
for(let i= R.length-1; i>=0; i--){
    rev = rev +R.charAt(i);
}
console.log(rev);

let str = "JavaScript";
console.log(str.slice(4, 10));
