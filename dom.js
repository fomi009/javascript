//DOM
//first we access the element that we want to manipulate
//by id
let heading = document.getElementById("header"); //accessing
console.dir(heading);
console.log(heading);
//by tag

let para = document.getElementsByTagName("p"); //this gives us the collection
console.dir(para); // dir print the object its self, shows its methods and properrties in a treee like structure


let paragraph = document.getElementsByClassName("myClass");
console.dir(paragraph);

// using query selector

let query = document.querySelector("#header"); //Accesss first element by css selector, dont have to write specific getid,class etc
console.dir(query);

let queryies = document.querySelectorAll(".myClass"); //All elements by css selector, dont have to write specific getid,class etc
console.dir(queryies); //return nodelist

// reading and modifying dom elemnts

let text = document.querySelectorAll(".myClass");
//console.log(text.innerText);
text[0].innerText = "My name is encylopedia";
//text.style.visibility = "hidden"; //can apply styles as well thorugh js
text[1].innerHTML = "<b>text</b>"; // without chnaginf our index.html file we can make changes thorugh our js file in out html.
console.log(text.textContent); // to seee hidden cntent
console.log(text.tagName); //return tag name

adding in hmtl

let text = document.querySelector(".myClass");
console.log(text[0]);  //you can acess nde list using idexes just ike an array.

//changing text using loop
let index = 0; 
for (lines of text){
    lines.innerText = "hi i am line"+ (index+1);
    index++;

}

console.log(text.getAttribute("class"));
console.log(text.setAttribute("class","Classes"));

//Adding elements through js

let button = document.createElement("Button");
button.innerHTML = "click me";

let myel = document.querySelectorAll(".myClass");
myel[2].append(button);





