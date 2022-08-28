let menu=document.querySelector(".search-input")
let v=document.querySelector('.search-icon')
v.addEventListener("click",()=>{
    menu.classList.toggle('active')
})


let pro=document.querySelector(".menu")
let d=document.querySelector(".menu-icon")
let p=document.querySelector(".panel")
d.addEventListener("click",()=>{
    p.classList.toggle('show-menu')
    pro.classList.toggle('active-1')
})