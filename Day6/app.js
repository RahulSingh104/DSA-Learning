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

// let word = ["attention","people","attire", "hello","attend"];
// let s = "at";
// let count = 0;
// for(let i =0; i<word.length; i++){
//   if(word[i].startsWith(s)) count++;

// }
// console.log(count)

// let s = "Hello Bhai Kya Haal Chaal";
// let arr = s.split(" ");
// console.log(arr)


// let s = "hello baby kya haal chaal"
// let ans = '';
// let arrStr = s.split(" ")
// for(let i= 0; i<arrStr.length; i++){
//     let word = arrStr[i]
//     if(word.length<=2) ans = ans + word.toUpperCase()+" ";
//     else {
//         ans = ans + word.charAt(0).toUpperCase()
//                   + word.substring(1,word.length-1)
//                   + word.charAt(word.length-1).toUpperCase()+ " ";
//     }
// }
// console.log(ans)


// let str = "apple,banana,grape";
// let result = str.split(",");
// console.log(result[1]);

let str = "hello";
str[0] = "H";
console.log(str);



// Accept a string and print the frequency of each character present in the String  -- question said that kon sa character baar aaya hai  -- iss question ko solve karne ke trika hai DSA map or BitMap

// -- aak array banate hai 122 length ka array banayenge
let prompt = require('prompt-sync')();
let s = prompt("Enter a String"); // ex- hello ko sorting order main hi print karna hai 

let freqArr  = new Array(123).fill(0);
for(let i=0;i<s.length; i++){
    let ascii = s.charCodeAt(i);
    freqArr[ascii] = freqArr[ascii]+1;
}
for(let i=0; i<freqArr.length; i++){
    if(freqArr[i]>0){
        console.log(String.fromCharCode(i)+" -> "+freqArr[i])
    }
} // isske tarke ko bitmap se baana hai aur iska TC - o(n) SC - N



// Q.62 Check Two Strings are Anagram or not Anagrams words have the same word length & same character count Examples of anagram words are arc and car,state and taste night and thing etc .

