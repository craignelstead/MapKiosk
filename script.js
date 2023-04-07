//This script should automatically reload the page if user was last active
//X seconds ago. You can change the amount of time by editing the integer on 
//line 42.

let count = 1;
let interval;

// When the page is done loading, have event listeners for any kind of user activity
window.addEventListener('load', () => {
  // Add event listeners for touchmove, keydown, mousemove, click, and touchstart
  document.addEventListener('touchmove', startCount);
  document.addEventListener('keydown', startCount);
  document.addEventListener('mousemove', startCount);
  document.addEventListener('click', startCount);
  document.addEventListener('touchstart', startCount);
});

// If one of these event listeners is triggered, immediately start listening for
// new activity again. So there should always be event listeners actively listening.
function startCount() {
  // Remove all event listeners
  document.removeEventListener('touchmove', startCount);
  document.removeEventListener('keydown', startCount);
  document.removeEventListener('mousemove', startCount);
  document.removeEventListener('click', startCount);
  document.removeEventListener('touchstart', startCount);

  // Add event listeners back
  document.addEventListener('touchmove', startCount);
  document.addEventListener('keydown', startCount);
  document.addEventListener('mousemove', startCount);
  document.addEventListener('click', startCount);
  document.addEventListener('touchstart', startCount);

  // If the timer is not running, start it
  if (!interval) {
    interval = setInterval(() => {
      console.log(count);

      //If you need to change the reload time, edit the integer below.
      //The integer will determine the number of seconds before page reload.
      if (count === 30) {
        count = 1;
        clearInterval(interval);
        location.reload();
      }
      count++;
    }, 1000);
  } else {
    count = 1; // reset count to 1
  }
}
