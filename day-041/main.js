var btn=document.querySelector('.button')
var se=document.querySelector('.show-error')
btn.addEventListener('click',()=>{
    document.querySelector('.error').classList.add('hide')
    
})
se.addEventListener('click',()=>{
    document.querySelector('.error').classList.remove('hide')
})