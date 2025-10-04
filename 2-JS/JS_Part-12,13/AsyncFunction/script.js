let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected.");
            }
            else{
                h1.style.color = color;
                console.log(`Color changed to ${color}!`);
                resolve("Color changed!");
            }
        },delay);
    });
}

async function demo(result) {
    try{
        await changeColor("red",1000);
        console.log(result);
        await changeColor("blue",1000);
        console.log(result);
        await changeColor("green",1000);
        console.log(result);
        await changeColor("darkgray",1000);
        console.log(result);
    }
    catch(error){
        console.log("Error caught!")
        console.log(error);
    }
}

demo();

// changeColor("red",1000)
//     .then((result)=>{
//         console.log(result);
//         return changeColor("green",1000);
//     })
//     .then((result)=>{
//         console.log(result);
//         return changeColor("blue",1000);
//     })
//     .then((result)=>{
//         console.log(result);
//         return changeColor("darkgrey",1000);
//     })
//     .then((result)=>{
//         console.log(result);
//     });