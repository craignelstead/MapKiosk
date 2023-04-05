/*
This script will automatically refresh the page after no activity (mouse or keyboard)
is registered for the set time. This time can be adjusted by changing the value
for the variable pageReloadsAfterX.
*/

//Get the current time in milliseconds
let time = new Date().getTime();
let timeoutId;

//Call function to get time in milliseconds of user activity
const setActivityTime = (e) => {
  time = new Date().getTime();
  resetTimer();
}

document.body.addEventListener("mousemove", setActivityTime);
document.body.addEventListener("keypress", setActivityTime);

const resetTimer = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    if (new Date().getTime() - time >= 60000) {
      refresh();
    } else {
      resetTimer();
    }
  }, 10000);
}

const refresh = () => {
  window.location.reload(true);
}

resetTimer();