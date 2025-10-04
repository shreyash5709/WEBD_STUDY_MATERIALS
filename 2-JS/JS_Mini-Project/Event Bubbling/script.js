let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener('click', ()=>{
    console.log("div is clicked");
    
});

ul.addEventListener('click', (ul)=>{
    ul.stopPropagation();
    console.log("ul is clicked");
});

for(li of lis){
    li.addEventListener('click', (li)=>{
        li.stopPropagation();
        console.log("li is clicked");
    });
}