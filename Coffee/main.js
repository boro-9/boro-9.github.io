//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
 const target = document.querySelector(qSelector);
 let startTimestamp = null;
 const step = (timestamp) => {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  target.innerText = Math.floor(progress * (end - start) + start);
  if (progress < 1) {
   window.requestAnimationFrame(step);
  }
 };
 window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
 counterAnim("#count1", 10, 3000, 1000);
 counterAnim("#count2", 5000, 10265, 1500);
 counterAnim("#count3", -1000, 1500, 2000);
 counterAnim("#count4", 500, 14765, 2500);
});