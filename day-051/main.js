// const play = document.querySelector("#play");
// const pause = document.querySelector("#pause");
// let counter = document.querySelector(".timer");
// let t=0
// let flag=true;
// play.addEventListener("click",()=>{
//     play.style.setProperty("display",'none')
//     pause.style.setProperty("display",'block')
//     flag = false;
//     startTimer();
// })
// pause.addEventListener("click",()=>{
//     pause.style.setProperty("display",'none')
//     play.style.setProperty("display",'block')
//     flag = false;
//     startTimer();
// })
// function startTimer(){
//     let localCounter = setInterval(timer, 1000);

//         function timer() {
//           if (!flag) {
//             i++;
//             let fourDigitsMaker = (num, digitsNum) =>
//               String(num).padStart(digitsNum, "0");
//             counter.textContent = fourDigitsMaker(i, 4);
//           } else {
//             clearInterval(localCounter);
//           }
//         }
// }

const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
let counter = document.querySelector(".timer");

let i = 0;
let isPaused = true;

function startTimer() {
  let localCounter = setInterval(timer, 1000);

  function timer() {
    if (isPaused) {
      i++;
      let fourDigitsMaker = (num, digitsNum) =>
        String(num).padStart(digitsNum, "0");
      counter.textContent = fourDigitsMaker(i, 4);
    } else {
      clearInterval(localCounter);
    }
  }
}

play.addEventListener("click", () => {
    play.style.setProperty("display", "none");
    pause.style.setProperty("display", "block");
    isPaused = false;
    startTimer();
  });

  pause.addEventListener("click", () => {
    play.style.setProperty("display", "block");
    pause.style.setProperty("display", "none");
    isPaused = true;
    startTimer();
  });
startTimer()