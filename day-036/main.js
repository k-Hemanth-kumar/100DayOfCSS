var top=document.querySelector('.top')
var span=document.querySelectorAll('span')
var box=document.querySelectorAll('.box')
var id=0

function add(){
    span.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            remove()
            boxr(index)
            button.classList.add('active')
            box.forEach((button,id)=>{
                if(id===index){
                    button.classList.add('active1')
                }
            })
            
        })
    })
}
function remove(){
    span.forEach((button,index)=>{
        button.classList.remove('active')
    })
    
    
}
function boxr(index){
    box.forEach((button,id)=>{
        if(id!=index){
            button.classList.remove('active1')
        }
    })
}
add()
