
// //Number guessing game
// let num = 29;
// userEnter = prompt("Guess the hidden number");
// while(userEnter != num)
// {
//     if (userEnter < num){
//         console.log("Entered Number is low")
//     }
//     else if (userEnter > num){
//         console.log("Entered Number is High")
//     }
//     else{
//         console.log("invalid number")
//     }
//     userEnter = prompt("Again you gussed the wrong one")
// }
// console.log("Congragulations! you guessed the right number")

// ATMm

// const pass = 12345;
// let name = prompt("Enter your Name");

// let obj = {
//     fullName: name,
//     password: pass,
//     balance: 23000
// };

// alert("Welcome to ATM");
// let userPass = Number(prompt(`Enter your password ${name}`));

// if (userPass === obj.password) {
//     console.log("Access Granted",obj);

//     while (true) {
//         let choice = Number(prompt( "What would you like to do \n1.Withdraw \n2.Deposit\n3.Exit"));
//         if (choice === 1) {
//             let withdraw = Number(prompt("How much money would you like to withdraw?"));
//             if (withdraw > obj.balance) {
//                 alert("Insufficient balance!");
//             } 
//             else {
//                 obj.balance = obj.balance - withdraw;
//                 console.log(`Remaining Balance ${obj.balance}`);
//             }
//         } 
//         else if (choice === 2) {
//             let deposit = Number(prompt("How much money would you like to deposit?"));
//             obj.balance = obj.balance + deposit;
//             console.log(`Remaining Balance: ${obj.balance}`);
//         } 
//         else if (choice === 3) {
//             console.log("Thanks for coming!");
//             break;
//         } 
//         else {
//             alert("Invalid option");
//         }
//         let more = prompt("Would you like to continue Y/N");
//         if (more === "N") {
//             console.log("bye! thans for coming");
//             break;
//         }
//     }
// } 
// else {
//     alert("Access Denied! Incorrect password.");
// }

// Table generator

num = prompt("Enter a number to generate a table:");
console.log(`Table of ${num}`)
for (let i=1; i<11; i++){
    console.log(`${num} x ${i} = ${num*i}`)
 }
 //calc
