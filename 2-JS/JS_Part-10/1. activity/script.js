let btn = document.querySelector("button");
let div = document.querySelector("div");
let head = document.querySelector("h1");
btn.addEventListener('click', ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let clr = `rgb(${r}, ${g}, ${b})`;
    head.innerHTML = clr;
    div.style.backgroundColor = clr;
});

btn.addEventListener('mouseenter', ()=>{
    btn.setAttribute("class", "btn");
});

btn.addEventListener('mouseleave', ()=> btn.removeAttribute("class", "btn"));

div.addEventListener('mouseenter', ()=> div.setAttribute("class", "div"));
div.addEventListener('mouseleave', ()=> div.removeAttribute("class", "div"));