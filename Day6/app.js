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

// let R  = "RahulSingh";
// let rev = ""
// for(let i= R.length-1; i>=0; i--){
//     rev = rev +R.charAt(i);
// }
// console.log(rev);

// let str = "JavaScript";
// console.log(str.slice(4, 10));


// console.log({} + []);
// console.log({} + {});

// console.log([] == ![]);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }



// let prompt = require('prompt-sync')();
// let s = prompt("Enter a string");
// let isPallindrome = true;
// let i=0; j=s.length-1;

// while(i<j){
//   if(s[i]!=s[j]){
//     isPallindrome = false;
//     break;
//   }
//   i++
//   j--
// }
// if(isPallindrome) console.log("given string is pallindrome");
// else console.log("given string is not pallindrome")


// let prompt= require('prompt-sync')()
// let s = prompt("Enter a string ")
// console.log(s)

// let ans = "";
// for(let i=0; i<s.length; i++){
//   let asci = s.charCodeAt(i)
//   if(asci>=65 && asci<=90){
//     ans = ans + String.fromCharCode(asci +32)
//   }
//   else if(asci>=97 && asci<=122){
//     ans = ans +String.fromCharCode(asci-32)
//   }
// }
// console.log(ans)

let word = ["attention","people","attire", "hello","attend"];
let s = "at";
let count = 0;
for(let i =0; i<word.length; i++){
  if(word[i].startsWith(s)) count++;

}
console.log(count)