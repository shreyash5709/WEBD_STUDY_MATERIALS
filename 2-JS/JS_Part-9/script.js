let pika = document.querySelector('#pika');
pika.addEventListener("click", ()=>{
    pika.style.color = "yellow";
    pika.style.backgroundColor = "red";
});

pika.addEventListener("mouseleave", ()=>{
    pika.style.color = "black";
    pika.style.backgroundColor = "white";
});

let chari = document.querySelector('#chari');
chari.addEventListener("mousemove", ()=>{
    chari.style.color = "white";
    chari.style.backgroundColor = "orange";
});

chari.addEventListener("mouseleave", ()=>{
    chari.style.color = "black";
    chari.style.backgroundColor = "white";
});

let mew = document.querySelector('#mew');
chari.addEventListener("click", ()=>{
    mew.style.color = "white";
    mew.style.backgroundColor = "purple";
});

mew.addEventListener("click", ()=>{
    pika.innerHTML = "Bulbasour"
    pika.style.color = "white";
    pika.style.backgroundColor = "green";
});