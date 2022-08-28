var map_point=document.querySelector(".marker");
map_point.addEventListener("click",()=>{
    var addr=document.querySelector(".address");
    addr.classList.add("active")
    map_point.classList.add("inactive")
})
document.querySelector(".address").addEventListener("click",()=>{
    var addr=document.querySelector(".address");
    addr.classList.remove("active")
    map_point.classList.remove("inactive")
})