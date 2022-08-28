let input=document.querySelector(".search-width")
let sugg=document.querySelector(".suggestions")
li=document.createElement("li");
li1=document.createElement("li")
li2=document.createElement("li")
input.addEventListener("keyup",(e)=>{
    var btn=document.querySelector(".search");
    btn.addEventListener("click",()=>{
    var key=e.target.value;
    li.innerText=key
    li1.innerText="Did you mean:"+key+"?"
    li2.innerText=key+"?"+" I'm sorry, it's not here"
    // sugg.appendChild(li)
    //sugg.classList.add("active")
     if(key.length){
        sugg.appendChild(li)
        sugg.appendChild(li1)
        sugg.appendChild(li2)
        sugg.classList.add("active")
    }
    if(key==='' || key===null || !key.trim()){
        btn.removeEventListener("click")
        sugg.classList.remove("active")
    }
})
 
})
