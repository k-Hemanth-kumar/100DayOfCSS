var logo1=document.querySelectorAll('.logo')
logo1.forEach((b)=>{
    b.addEventListener('click',()=>{
        remove()
        b.classList.toggle('active')
    })
})
function remove(){
    logo1.forEach((b)=>{
        b.classList.remove('active')
    })
}