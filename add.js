// Timers Exercise
// countdown

function countDown(num) {
  let timer = setInterval(function () {
    num--;
    console.log(num);

    if (num === 1) {
      console.log("DONE!");
      clearInterval(timer);
    }
  }, 1000);
}

//randomGame

let timer;
let count = 0;
function randomGame() {
  timer = setInterval(function () {
    let randomNumber = Math.random() + 1;
    count++;

    if (randomNumber > 0.75) {
      console.log(
        `It took ${count} tries before we found a number greater than .75.`
      );
      clearInterval(timer);
    }
  }, 1000);
}
