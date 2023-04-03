/*
This script will automatically refresh the page after no activity (mouse or keyboard)
is registered for the set time. This time can be adjusted by changing the value
for the variable pageReloadsAfterX.
*/

let time = new Date().getTime();
const setActivityTime = (e) => {
  time = new Date().getTime();
}

document.body.addEventListener("mousemove", setActivityTime);
document.body.addEventListener("keypress", setActivityTime);

const refresh = () => {

  //To adjust reload frequency, change the value for pageReloadsAfterX. 
  //The value is in milliseconds, so 60 seconds would be 60000
  let pageReloadsAfterX = 60000;

  if (new Date().getTime() - time >= pageReloadsAfterX) {
    window.location.reload(true);
  } else {
    setTimeout(refresh, 10000);
  }
}
setTimeout(refresh, 10000);