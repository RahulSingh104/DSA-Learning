// for(let i = 1; i<=5; i++){
//     console.log("*")
// }
// console.log("hello");
// console.log("world");

// process.stdout.write("*")
// process.stdout.write("*")
// process.stdout.write("*")
// process.stdout.write("*")
// process.stdout.write("*")  this is nodejs code or thngs not the js code 



// for(let i = 1; i<=5; i++){
//     process.stdout.write("*")
// }


// simple pattern question 
// for(let i=1; i<=6; i++){
//     for(let j=1; j<=6; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }



const prompt = require("prompt-sync")();

// let n = prompt("enter a number")
// console.log(n)


// let n = prompt("enter a number ")
// for(let i =1; i<=5; i++){   // outer loop manage the row 
//     for(let j =1; j<=5; j++){ // inner loop manage the column
//         process.stdout.write("* ")
//     }
//     console.log()
// }

//  Rectangle Pattern 
// let n = prompt("Enter a Number ");

// for(let i= 1; i<=n; i++){
//     for(j=1; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// Q 36.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n = prompt("Enter a Number ")
// for(let i=1; i<=n; i++){
//     for(j=1; j<=i; j++){
//         process.stdout.write(j+" ")
//     }
//     console.log()
// }

// Q 37.
// A
// A B
// A B C
// A B C D
// A B C D E
// let n = prompt("Enter a Alphabet (e.g., E): ");

// let start = 'A'.charCodeAt(0);
// let end = n.toUpperCase().charCodeAt(0);

// for (let i = start; i <= end; i++) {
//     for (let j = start; j <= i; j++) {
//         process.stdout.write(String.fromCharCode(j) + " ");
//     }
//     console.log();
// }

// let n = prompt("Enter a number");
// for(let i = 1; i<=n; i++){
//     let temp = 65;
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(temp)+"")
//         temp++;
//     }
//     console.log()
// }



// Q 38. Inverted Right Angle Triangle
// * * * * *
// * * * *
// * * *
// * *
// *

// let n = prompt("Enter a Number ");
// for(let i = 1; i<=n; i++){
//     for(let j= 1; j<=n-i+1; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// Q 39.mirror right angle triangle
//              *
//           * *
//        * * *
//     * * * *
// * * * * *

// let n = prompt("Enter a number ");
// for(let i=1;i<=n; i++){
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write("  ")// 2space for this pattern 
//     }
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log()
// }


// Q.20 triangle

// let n = prompt("Enter a number");
// for(let i =1; i<=n; i++){
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write(" ") // one space for this question 
//     }
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log()

// }

// Q 21.
// *              *
//    *       *
//        *
//    *       *
// *               *

// let n = Number(prompt("Enter a number "));
// for(let i=1; i<=n;i++){
//     for(let j=1; j<=n; j++){
//         if(i==j || i+j === n+1){
//             process.stdout.write("* ")
//         }else process.stdout.write("  ")
//     }
//     console.log()
// }

// Q 22.
//  *         *
//    *     *

//     *   *

//      * *

//       *

let n = Number(prompt("Enter a Number "))
for(let i=1; i<=n; i++){
    for(let j=1; j<=(n*2)-1; j++){
        if(i==j || i+j === n*2) {
            process.stdout.write("* ")
        }else process.stdout.write("  ")
    }
    console.log()
}