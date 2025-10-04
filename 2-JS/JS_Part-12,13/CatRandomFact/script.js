let btn = document.querySelector("button");
let p = document.getElementById("result");
let url = "https://catfact.ninja/fact";

async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("ERROR - ", e);
        return "No fact found!";
    }
}

btn.addEventListener('click', async()=>{
    let fact =  await getFact();
    p.innerHTML = `<b>${fact}</b>`;
});