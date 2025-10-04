let n = prompt("Enter the max number : ");
let x = Math.floor(Math.random()*n)+1;
let z = prompt("Guess the number : ");
while(true){
    if(z == "quite"){
        console.log("Quiting game....");
        break;
    }
    else if(x==z){
        console.log(`Your guess is correct : ${z}`);
        break;
    }
    else if(z<x){
        z = prompt("Your guess is smaller, Guess Again :")
    }
    else{
        z = prompt("Your guess is bigger, Guess Again : ");
    }
}