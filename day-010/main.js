let date=document.getElementById("date")
let time=document.getElementById("time")
let health=document.getElementById("health")
const days=['Sun','Mon','Tue','Wed','Thur',"Fri",'Sat']
const month=["Jan",'Feg','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
let d=new Date()
date.querySelector("span:first-child").innerHTML=days[d.getDay()]
date.querySelector("span:last-child").innerHTML=d.getDate().toString()+" "+month[d.getMonth()]+" "+d.getFullYear().toString()

time.querySelector("span").innerHTML=((d.getHours()<10)? "0" : "")+d.getHours()+":"+((d.getMinutes()<10)? "0": "")+d.getMinutes();