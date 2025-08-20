const URL = "https://api.adviceslip.com/advice";
const para = document.querySelector("#advice");
const btn = document.querySelector("button");

async function getadvice(){
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    //console.log(data);
    para.innerText = data.slip.advice;
    //btn.style.display = "none";

   setTimeout(() => {
        para.innerHTML = "<button id='button'>Get an advice</button>";
        document.querySelector("#button").addEventListener("click", getadvice);
    }, 3000); //it will eep gonna give advices to you cause you need them.
}

btn.addEventListener("click", getadvice);