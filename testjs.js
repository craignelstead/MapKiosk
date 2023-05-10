/*
  This program was written by Craig Nelstead with some help from chatGPT

  This program should cause the page to reload after X amount of time has passed
  since the last detected user activity. The amount of time to wait can be
  adjusted my changing the value of the variable "reloadAfterX" on line 79.

  This program works by giving the div "floatingQR" focus shortly after the page
  loads. It then checks to see whether or not that div still has focus. If it 
  does not, it is because a user is interacting with the map.

  If user activity is detected (floatingQR loses focus), focus is restored to
  the div after a short period. It then checks to see from there if it has lost 
  focus again. This is to see if the user is still active or if they are still
  interacting with the page content.
*/

const dummy = document.getElementById('floatingQR');
let timer;
let timerStarted = false;
let secondTimer;
let secondTimerStarted = false;

setTimeout(giveFocus, 10000);

//This function gives the div "floatingQR" focus shortly after the page loads.
function giveFocus() {
  dummy.setAttribute('tabindex', '0');
  dummy.focus();
  setInterval(checkFocus, 1000);
}

//This function checks for focus. If the div does not have focus, there has been
//user activity and a timer begins.
function checkFocus() {
  let isFocused = (document.activeElement === dummy);

  if (isFocused) {
    console.log('Div has focus');
    clearInterval(timer);
    timerStarted = false;
  } else {
    console.log('Div does not have focus');

    if (!timerStarted) {
      startTimer();
      timerStarted = true;
    }
  }
}

//This timer waits and then returns the focus to the div.
function startTimer() {
  let count = 1;
  timer = setInterval(() => {
    console.log('First Timer:', count);

    if (count === 10) {
      clearInterval(timer);
      console.log('Focus dummy and start the second timer');
      dummy.setAttribute('tabindex', '0');
      dummy.focus();
      startSecondTimer();
    }

    count++;
  }, 1000);
}

function startSecondTimer() {
  if (secondTimerStarted) {
    clearInterval(secondTimer);
    console.log('Restarting the second timer');
  }

  let count = 1;
  //Adjust reloadAfterX to alter the amount of time (in seconds) after which
  //the page should reload.
  let reloadAfterX = 120;
  secondTimer = setInterval(() => {
    console.log('Second Timer:', count);

    if (count === reloadAfterX) {
      clearInterval(secondTimer);
      console.log('PARTY! REFRESH!');
      location.reload();
    } else {
      const isFocused = (document.activeElement === dummy);
      if (!isFocused) {
        console.log('Dummy does not have focus. Restarting the second timer.');
        count = 0; // Reset the count to 0 to start from 1 in the next iteration
      }
    }

    count++;
  }, 1000);

  secondTimerStarted = true;
}
