const add=document.querySelector(".plus")
const minus=document.querySelector(".minus")
let value=document.querySelector(".value")
add.addEventListener('click',adding)
    function adding() {
        
        value.style.setProperty('animation', 'fadeDown 350ms');
        value.textContent=Number(value.textContent) + 1;
        setTimeout(() => value.style.removeProperty('animation'), 350)
    }
minus.addEventListener("click",subtract)

function  subtract() {
    value.style.setProperty('animation', 'fadeUp 350ms');
    value.textContent=Number(value.textContent) - 1;
    setTimeout(() => value.style.removeProperty('animation'), 350)
}
