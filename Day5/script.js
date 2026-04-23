// sorting -> 



// let arr = [ 1,4,3,2,10,9]

// let n = arr.length
// for(let i=0; i<n-1; i++){
//     for(let j=0; j<n-i-1; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);



// let arr = [1,4,3,2,9,10,20,14,15]
// for(let i=0; i<arr.length-1; i++){
//     let small = i;
//     for(let j =i+1; j<arr.length; j++){
//         if(arr[small]> arr[j]){
//             small = j;
//         }
//     }
//     if(i != small){
//         let temp = arr[i]
//         arr[i] = arr[small]
//         arr[small] = temp;
//     }
// }

// console.log(arr)

// let arr = [1,4,3,2,9,11]

// for(let i=1; i<arr.length; i++){
//     let key = arr[i]
//     let j = i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] =key;
// }

// console.log(arr);




                //   Time Complexity 


// Time Complexity -> Amount of time taken ( operation as function of input size (n))

// Complexity Representation -> Big o ,thetha , Omega 




// Multi dimensional

// let arr = [[1,2,3],[4,5,6], [7,8,9]];

// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr[i].length; j++){
//         process.stdout.write(`${arr[i][j]} `) // ageCases 
//     }
//     console.log();
// }



// let prompt = require("prompt-sync")();
// let size  = Number(prompt("Enter Inner array size "));
// let arr = new Array(size);
// for(let i =0; i<arr.length; i++){
//     arr[i] = new Array(size);
// }

// for(let i=0; i<arr.length;i++){
//     for(let j=0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter element"))
//     }
// }
// console.log(arr);


// let prompt = require("prompt-sync")();
// let size  = Number(prompt("Enter  array size "));
// let innerArraySize = Number(prompt("Enter inner array size"));
// let arr = new Array(size);
// for(let i =0; i<arr.length; i++){
    
//     arr[i] = new Array(innerArraySize);
// }

// for(let i=0; i<arr.length;i++){
//     for(let j=0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter element"))
//     }
// }
// console.log(arr);


// // jacked Array 

// let prompt = require("prompt-sync")();
// let arr = new Array(4)

// for(let i=0; i<arr.length; i++){
//     let size = Number(prompt("Inner Array's Size "))
//     arr[i] = new Array (size)
// }
// for(let i=0; i<arr.length; i++){
//     for(let j= 0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter array Element"))
//     }
// }
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i])
// }

// lemda expression 

// let arrr = Array.from({length:3},()=>Array(4).fill(0))

// console.log(arrr)


// let arr = [[1, 2], [3, 4]];
// console.log(arr[1][0]);


// LeetCode  solution 

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// let row  = matrix.length;
// let col = matrix[0].length;
// let ans = new Array(col);
// for(let i=0; i<ans.length;i++){
//     ans[i] = new Array(row)
// }
// for(let i=0; i<ans.length; i++){
//     for(let j=0; j<ans[i].length; j++){
//         ans[i][j] = matrix[j][i]
//     }
// }
// console.log(ans)

// let arr = new Array(2).fill(new Array(2).fill(0));
// arr[0][0] = 5;
// console.log(arr); //all rows changes fisrt element


// let arr = [[10, 20], [30, 40]];
// arr[0][1] = arr[1][0];
// console.log(arr[0][1]);  // 30


// Spiral Matrix 




