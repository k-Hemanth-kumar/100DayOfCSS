// let active = 0;
// let btn = Array.from(document.getElementsByClassName('button'));
// let card = document.getElementsByClassName('card');

// btn.forEach(element => {
//     element.addEventListener('click', function(){
//         card[active].classList.remove('active');
//         card[active].classList.add('inactive');
//         active++;
//         if(active == 3){
//             active = 0;
//         }
//         card[active].classList.add('active');
//         card[active].classList.remove('inactive')
//     });
// });
let buttons = document.getElementsByClassName("button");
let cards = document.querySelectorAll(".card");
let active=0
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (active === 0) {
      cards[0].classList.add("inactive");
      cards[0].classList.remove("active");
      cards[1].classList.add("active");
      cards[1].classList.remove("inactive");
      active++;
    } else if (active === 1) {
      cards[1].classList.add("inactive");
      cards[1].classList.remove("active");
      cards[2].classList.add("active");
      cards[2].classList.remove("inactive");
      active++;
    } else {
      cards[2].classList.add("inactive");
      cards[2].classList.remove("active");
      cards[0].classList.add("active");
      cards[0].classList.remove("inactive");
      active = 0;
    }
    
  });
});