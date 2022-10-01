function value() {
    const range=document.querySelector('#range');
    range.addEventListener('input',()=>{
     document.querySelector('label').textContent=range.value;
     const r=document.querySelector(':root');
     var s=range.value
     r.style.setProperty('--range-value',s + '%')
     console.log(s);
 })
 }
 value()