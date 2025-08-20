let newbtn = document.createElement("button");
newbtn.innerText = "Click me";
let para = document.querySelector("p");
para.after(newbtn);
body = document.querySelector("body");
body = "white";
newbtn.addEventListener("click",()=>{
    if(body === "white"){
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        body = "black";
    }
    else{
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        body = "white";
    }
})

let newel = document.createElement("div");
newel.style.height = "200px";
newel.style.width = "200px";
newel.style.margin = "6px";
newel.innerHTML = "<button>double click to on </button>";
newel.style.backgroundColor = "blue";
newel.style.borderRadius = "100px";
newel.style.alignContent = "center"; 
document.querySelector("button").after(newel);

newel.addEventListener("dblclick",()=>{
    document.querySelector("div").style.backgroundColor = "red";
})


