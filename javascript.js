//Functions
// simple functions

function sum(a, b){
   let result = a + b;
    console.log(`Sum of ${a} + ${b} = ${result}`);
}
sum(3,6);

// arrow function
const mul = (a,b) =>{
        console.log(`Multiplication of ${a} * ${b} = ${a*b}`);
}
mul(3,5);

const print = () => console.log("Hi :)");

const vowels = (str) =>{
    let count = 0;
    for(const letter of str){
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            count++;
        }
    }
    console.log(`In ${str} there are ${count} vowels present.`)
}

//call back functions

function what(name, callback){
    console.log(`hello ${name}`);
    callback();
}

const callback = ()=>{
    console.log('Call you latter.');
}

what("fomi",callback);

//scope
// let

let alpha = ()=>{
    let a = 10;
    console.log(a);
}

//console.log(a);
let a = 2
console.log(a);

const arr = [1, 2, 3, 4, 5];
arr.push(3); // addds three in the end
console.log(arr);

//arrays

const array = [1, 2, 3, 4, 5];
array.push(99); // add in the end
array.pop(); // remove fromt the end
array.shift(); // remove from the start
array.unshift(100); // adds in the start

console.log(`modified array ${array}`);

array.forEach((val) =>{ // kind a loop go onto every value in the array
    console.log(val);
})

let result = array.map((val) =>{ // same a s for each but it return a new array 
    return val * 2;
})
console.log("map func",result);
console.log("previous array",array) // previous remanin unchaged

let even = array.filter((val)=>{ // filters some thing on given condition and return 
    return val % 2 == 0;
})
console.log("Filter function",even);

let odd = array.filter((val,idx,array) =>{ // the index and array its-self can 
                                           //be used inside the parameter for these functions
    console.log(`index: ${idx} and array: ${array}`)
    return val % 2 != 0
})
console.log("Filter with index and array", odd);

//Objects
const student = {
    name : "Ali",
    age : 21,
    courses : ['DSA','OOP','WEB']
}

console.log(student);
console.log(student.age);
console.log(student.courses[1]);

student.age = 22;
student["Grades"] = ['A', 'B', 'C'];
console.log(student);
student.courses[2] = 'CN';
console.log(student);

// destructors
 let first, second = ["apple", "banana"];

// spread
 const array1 = [1, 2, 3, 4];
 const array2 = [ 5, 6, 7];

let combo = [...array1, ...array2];
console.log("spread" , combo);

// rest
const [one , ...rest] = [1, 2, 3, 4, 5, 6];
console.log(one);
console.log(rest);


