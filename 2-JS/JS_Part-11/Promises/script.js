function saveToDB(data){
    return new Promise((resolve, rejected)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4) resolve("Success: Data was saved.");
        else {
            rejected("Failure: Week connection.");
        }
    });
}

saveToDB("Shreyash Jaiswal")
    .then((result)=>{
        console.log("Data1 saved.");
        console.log("Result : ", result);
        return saveToDB("Hello World")
    })
    .then((result)=>{
        console.log("Data2 saved.");
        console.log("Result : ", result);
        return saveToDB("Apna College");
    })
    .then((result)=>{
        console.log("Data3 saved.");
        console.log("Result : ", result);
    })
    .catch((error)=>{
        console.log("Some promise was rejected.");
        console.log("Error : ", error);
    });