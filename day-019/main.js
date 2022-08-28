// let dotsolid=document.querySelector('.dot');
// let bg=document.querySelector('.bg');
// let dotouline=document.querySelectorAll('.dot-out')

// dotouline.forEach((item) => {
//     item.addEventListener('click', (e) =>{
//         if(e.target.classList.contains('dot-1')){
//             bg.style.left = '0px';
//             dotsolid.style.left='108px'
//         }
//         else if(e.target.classList.contains('dot-2')){
//             bg.style.left = '-400px';
//             dotsolid.style.left='180px'
//         }
//         if(e.target.classList.contains('dot-3')){
//             bg.style.left = '-800px';
//             dotsolid.style.left='252px'
//         }
//     })
// });


//METHOD-2------------------------------------------------

let dotactive=document.querySelector('.dot-active');
let bg=document.querySelector('.bg');
let dots=document.querySelectorAll('.dot')

dots.forEach((dot) => {
    dot.addEventListener('click',(e)=>{
        if(e.target.classList.contains('dot-1')){
            dotactive.style.display='inline';
            dotactive.style.left='5px';
            bg.style.left='0px'
        }
        else if(e.target.classList.contains('dot-2')){
            dotactive.style.display='inline';
            dotactive.style.left='50px';
            bg.style.left='-400px'
        }
        else if(e.target.classList.contains('dot-3')){
            dotactive.style.display='inline';
            dotactive.style.left='95px';
            bg.style.left='-800px'
        }
    })
})