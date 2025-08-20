// set time out

console.log("My self");

setTimeout(() => { //it does something after some time
    console.log("3 seconds up!");
}, 3000)

//set interval

let counter = 0;
let interval = setInterval(() => {
    console.log("Tick!");
    counter++;
    if (counter === 5) {
        clearInterval(interval);
    }
}, 3000)

// promises

let promises = new Promise((resolve, reject) => {
    console.log("my self promise");
})

const getdata = (dataId)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            console.log("dtata",dataId);
            resolve("Sucess");
            //reject("failed");
        }, 5000)
    })
}
//single promises
let promise = getdata(12345);
 
promise.then((res)=>{
    console.log("sucesseddddddd",res);
})

promise.catch((err)=>{
    console.log("error",err)
})

//promise channing
//1st method
getdata(1).then((res)=>{
    console.log("sucess 1");
    getdata(2).then((res)=>{
        console.log("sucess 2")
    })
})

// 2nd and actuall way to do chainning
getdata(1).then((res)=>{
    return getdata(2);
}).then((res)=>{
    return getdata(3);
}).then((res)=>{
    console.log(res);
})

// async-await

async function gettingdata() {
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
}

