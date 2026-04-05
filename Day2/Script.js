// Brut force solution
// let year = Number(prompt("Enter a year"))

// let isLeap = false;

// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0) isLeap = true;
//         else isLeap = false;
// }else{
//     isLeap = true;
// }
// }else isLeap = false;

// console.log(isLeap? "Leap year":"not a leap year")

// second way to write the same logic  and optimized solution 

// let year = Number(prompt("Enter a year"));

// let isLeap = false;
// if((year % 4 == 0 && year % 100 !==0)){
//     console.log("Leap year");
// }else if (year % 400 ==0){
//     console.log("Leap year");
// }else console.log('no leap year');



// Discount related question 

// let amount = Number(prompt("Enter a number"));

// if(amount >=0 && amount <= 5000){
//     console.log(amount)
// }else if(amount > 5000 && amount <=7000){
//     console.log(amount -(5*amount)/100);
// } else if( amount > 7000 && amount <=9000){
//     console.log(amount -(20*amount)/100)
// } else if (amount >9000){
//     console.log(amount -(20*amount)/100)
// } else {
//     console.log('invalid input')
// }

// optimized way 

// let amount = Number(prompt("Enter a Number"))

// let dis = 0;

// if(amount>=0 && amount<=5000) dis = 0
// else if(amount >5000 && amount<=7000) dis = 5;
// else if(amount > 7000 && amount <=9000) dis =10;
// else if(amount >9000) dis = 20;
// else console.log("Invalid Input")

// console.log(amount -(dis*amount)/100);




// let unit = Number(prompt("Enter a unit"));

// let amount = 0;

// if(unit >0 && unit <=100){
//     amount = unit * 4.2;
// }else if(unit >100 && unit<=200){
//     amount = (100 *4.2) + (unit -100) *6;
// }else if(unit >200 && unit <=400){
//     amount = (100*4.2) + (100*6) + (unit-200)*8;
// }else if(unit>400){
//     amount = (100 *4.2) +(100*6) + (200*8)+(unit-400)*13 ;
// }

// console.log(amount)


// optimized way 

// if(unit> 400){
//     amount = (unit -400) *13;
//     unit= 400;
// }if(unit>200 && unit<=400){
//     amount = amount +(unit-100)*6;
//     unit = 200;
// }
// if(unit>100 && unit<=200){
//     amount = amount +(unit - 100) * 6;
//     unit = 100;
// }
// amount = amount + unit*4.2;
 
// console.log(amount);



// Enter controlled loop means that where logic want to enter in the loop
// for
//  while

// Exit controlled  -
//  do while

//  declare/initilized , condition , change

// 15


// let n= Number(prompt("Enter a number"));
// 1 to n;

// for(let i=1; i<=n; i++){
//   console.log(i)
// }

// n to 1;
// for(i=n; i>=1;i--){
//   console.log(i)
// }


// for(let i=1; i<=10; i++){
//   console.log(n +" * " + i + "=" + (n*i));
// }


// sum up to n terms
// let sum = 0;
// for(let i = 1; i<=n; i++){
//   // sum=  sum +i;
//   sum +=i;
  
// }

// console.log(sum)

// factorial of a Number
// let fact  = 1;
// for(let i = 1; i<=n; i++){
//   fact *= i;
// }
// console.log(fact);



// even sum or odd sum 
// let evenSum  =0, oddSum = 0
// for(let i = 1; i<=n;i++){
//   if(i%2==0) evenSum = evenSum +1;
//   else oddSum = oddSum + i;
// }

// console.log("even Sum" + evenSum)
// console.log("odd Sum" + oddSum)



// .....
// for(let i = 1; i<=n/2; i++){
//   if(n % i== 0) console.log(i)
// }
// console.log(n)

// prime or not 

// let isPrime = true;

// for(let i=2; i<n/2; i++){
//   if(n % i == 0){
//     isPrime = false;
//     break;
//   }
// }

// if( isPrime) console.log("Prime Number")
// else console.log('no Prime Number')

// let isPrime = isPrimeFun(n)
// if(isPrime)console.log("Prime Number")
//   else console.log("no Prime Number")

// function isPrimeFun(n){
//   if(n<=1) return false
//   if(n==2) return true
//   if(n %2 == 0) return false
//   for(let i= 3; i<=Math.floor(Math.sqrt(n)); i+= 2){
//     if(n % i == 0) return false;

//   }
//   return true;

// }

//  declare/ initialize

// while(Condition){
  // change
  
// }

// let n = 5;
// let i = 1;


// while(i<=n){
//   console.log("hello world")
//   i++;
// }


//  if iteration give ho tab for loop ka use karta hai par jisme define nahi ho usme while loop karte hai 



// let n = Number(prompt ("Enter a number"));


// let sum = 0;
// while(n>0){
//   let rem  = n%10;
//   sum = sum + rem;
//   n = Math.floor(n/10);
// }
// console.log(sum);



// let n = Number(prompt("Enter a number"));

// let rev = 0;
// while(n>0){
//   let rem = n%10;
//   rev = (rev *10) + rem
//   n = Math.floor(n/10);
// }
// console.log(rev)

// Automorphic Number 
// let  n = Number(prompt("Enter a number"));

// let copy = n;
// let sq = n* n;

// let count = 0;
// while(n>0){
//   count++;
//   n = Math.floor(n/10);
// }

// if(sq%Math.pow(10 ,count) == copy) console.log("Automorphic number");
// else  console.log("No Automorphic Number");



// Switch Loop

// switch(true){
//   case 10 > 9 : console.log("hello")
//   break

//   case 18>7 && 45 >9 :console.log("hey");
//   break 

//   default : console.log("mai  to chalunga")

// }



//  do While loop 
// -> without asking you first time automatically run do after thatwhile  asked you to run 


// let  i = 1;

// do{
//   console.log("Hello world")
//   i++;
// }while(i<=5);

// let userInput;

// do{
//   console.log("Namste Rahul")
//   userInput = prompt("App continue karna chahte ho ").toLowerCase()
// }while(userInput === 'yes')



// let com = Math.floor(Math.random() * 100) + 1;

// let userInput;

// do{
//    userInput = Number(prompt("Guess the number in b/w  1 to 100"))
//   if(isNaN(userInput) || userInput <0 || userInput >100){
//     console.log("Please enter valid Number");
//     continue
//   }
//   if(userInput > com) console.log("too high , try again")
//   else if(userInput < com) console.log("too low , try again");
// else console.log("Congrats and Number was " + com)

// }while(userInput !== com);


