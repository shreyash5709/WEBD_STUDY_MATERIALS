let input = document.querySelector("input");
let ul = document.querySelector("ul");
let add = document.querySelector("#add");

add.addEventListener('click', ()=>{
    let li = document.createElement("li");
    li.innerText = input.value;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("delete")
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = "";
});

ul.addEventListener('click', (ul)=>{
    if(ul.target.nodeName == "BUTTON"){
        let par = ul.target.parentElement;
        par.remove();
    }
});
