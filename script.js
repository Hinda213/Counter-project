const increaseBtn = document.getElementById("incrBtn");
const decreaseBtn = document.getElementById("decrBtn");
const resetBtn = document.getElementById("rBtn");
const counter = document.getElementById("counter");

 let count = 0;

function updateCounter() {
 
  counter.textContent = count;

  if(count > 5) {counter.style.backgroundColor = "red";}
else if(count < 3) {
  counter.style.backgroundColor = "Blue"
} else {counter.style.backgroundColor = "yellow"}
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});


decreaseBtn.addEventListener("click", () => {
  count = Math.max(0, count-1)
  if (count > 0) {
    count--;
    updateCounter();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
updateCounter();
  // updateCounter();

// let count = 0;

// function counterUpdate() {
//   counter.textContent = count;

//   if (count > 0) {
//     counter.style.backgroundColor = "green";
//     counter.style.color = "white"; // ✅ makes text readable
//   } else if (count < 0) {
//     counter.style.backgroundColor = "red";
//     counter.style.color = "white"; // ✅ for contrast
//   } else {
//     counter.style.backgroundColor = "black";
//     counter.style.color = "white";
//   }
// }

// increaseBtn.onclick = () => {
//   count++;
//   counterUpdate();
// };

// decreaseBtn.onclick = () => {
//   count--;
//   counterUpdate();
// };

// resetBtn.onclick = () => {
//   count = 0;
//   counterUpdate();
// };

// counterUpdate();
