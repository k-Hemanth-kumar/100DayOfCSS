var lines=document.querySelector('.lines')

lines.addEventListener('click',()=>{
    lines.classList.add('active')
    document.querySelector('.menu').classList.add('active')
})
// document.querySelector('.menu').addEventListener('click',()=>{
//     lines.classList.remove('active')
//     document.querySelector('.menu').classList.remove('active')
// })
document.querySelectorAll('li').forEach((a)=>{
    a.addEventListener('click',()=>{
        lines.classList.remove('active')
    document.querySelector('.menu').classList.remove('active')
    })
})