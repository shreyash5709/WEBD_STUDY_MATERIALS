let todo = [];
let req = prompt("Pleas enter ypur choice !");
console.log(req);

while(true){
    if(req=="quite"){
        console.log("Quiting app !");
        break;
    }
    else if(req == "list"){
        console.log("-----------------------------------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i+1, todo[i]);
        }
        console.log("-----------------------------------------------");
    }
    else if(req == "add"){
        let task = prompt("Enter the task : ");
        todo.push(task);
        console.log("Task added.");
    }
    else if(req=="delete"){ 
        let idx = prompt("Enter the task no. : ");
        todo.splice(idx-1, 1);
        console.log("Task deleted!");
    }
    else{
        req = prompt("Please enter valid operatons!");
    }
    req = prompt("Pleas enter ypur choice !");
}
