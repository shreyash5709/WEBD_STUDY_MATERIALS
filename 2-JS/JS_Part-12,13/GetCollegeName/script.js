let url = "http://universities.hipolabs.com/search?name=";
let country = "india"; 
let btn = document.querySelector("button");

btn.addEventListener('click', async()=>{
    let state = document.querySelector("input").value;
    let colArr = await getCollege();
    show(colArr, state);
});

function show(colArr, state){
    let list = document.querySelector(".list");
    list.innerHTML = "";
    let found = false;
    for(college of colArr){
        let name = college["state-province"];
        if(name===state){
            let li = document.createElement("li");
            li.innerHTML = college.name;
            list.appendChild(li);
            found=true;
        }
    }
    if(found==false){
        let li = document.createElement("li");
        li.innerHTML = "Not Found!";
        list.appendChild(li);
    }
}

async function getCollege(){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }
}

