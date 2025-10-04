let url = "https://catfact.ninja/fact";

async function getFact(){
    try{
        let res1 = await axios.get(url);
        console.log("Data1 - ", res1.data.fact);

        let res2 = await axios.get(url);
        console.log("Data2 - ", res2.data.fact);
    }
    catch(error){
        console.log("Error - ", error);
    }
}

getFact();