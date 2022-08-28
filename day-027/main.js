var d=document.querySelector(".date")
var day=document.querySelector(".day")
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function get_date(){
    var date=new Date();
    var month=months[date.getMonth()]
    var todayd=date.getDate()
    var year=date.getFullYear()
    d.textContent=""+month+" "+todayd+", "+year;
    //console.log(todayd);
    day.textContent=""+weekDays[date.getDay()]
}
get_date();
