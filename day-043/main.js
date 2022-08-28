const bulb = document.querySelector(".bulb");
const bulbc = document.querySelector(".bulb-circle");
const bulbColor = ["yellow", "orange", "pink", "white", "salmon", "plum", "lightgreen"];
var r = document.querySelector(':root');
r.style.setProperty('--blue', 'lightblue');
bulb.addEventListener('mouseover',()=>{
    var cor=bulbColor[Math.floor(Math.random()*bulbColor.length)]
    r.style.setProperty('--fill',cor );
    //bulb.style.fill=bulbColor[Math.floor(Math.random()*bulbColor.length)]
    bulbc.style.boxShadow=`0 0 80px 20px ${cor}`
})
bulb.addEventListener('mouseout',()=>{
    r.style.setProperty('--fill', 'lightgray');
    //bulb.style.fill=bulbColor[Math.floor(Math.random()*bulbColor.length)]
    bulbc.style.boxShadow=`0 0 0px 0px `
})
