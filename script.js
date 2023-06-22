/*
  Written by Craig Nelstead - June 2023

  This program checks for user activity on the page so that it can automatically
  refresh after a user has engaged with the page and then left it unattended.
*/

// Get the dummy element by its ID
let dummy = document.getElementById('bottombar');

//Adjust this variable (refreshTime) to change how long after activity the page will refresh
//(in milliseconds)
let refreshTime = 120000;

// Give focus to dummy after 10 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    dummy.setAttribute('tabindex', '0');
    dummy.focus();
  }, 8000);
});

//Calls the checkFocus function every 15 seconds once the page loads
let initialFocusCheck = setInterval(checkFocus, 15000);

// Function to check if the bottom bar has lost focus
function checkFocus() {
  //console.log(document.activeElement);

  if (document.activeElement === dummy) {
    //Dummy is still focused from its initial state, no user activity detected
    console.log("No activity has been detected");
  }
  else {
    //Dummy has lost focus, user activity has been detected
    console.log("User activity has been detected");
    clearInterval(initialFocusCheck);
    returnFocus();
  }
}

//Function to give focus back to 'dummy' after initial user activity is detected
function returnFocus() {
  dummy.focus();

  //callSecondCheck is called so that 
  setTimeout(callSecondCheck, 10000)
}

function callSecondCheck() {
  //Call function every X seconds to see if user is still active
  let secondaryActivity = setInterval(checkIfSecondaryActivity, refreshTime);
}

//Function to see if user is still interacting with page
function checkIfSecondaryActivity() {
  if (document.activeElement === dummy) {
    //Dummy is still focused, so the user is no longer interacting with the page
    console.log("No secondary user activity detected");
    refreshPage();
  }
  else {
    //Dummy has lost focus again, so the page will not refresh
    console.log("Secondary user activity detected")
    returnFocus();
  }
}

//Function that is called if no further user activity is called after initial
//user activity is detected. This function will reload the page.
function refreshPage() {
  location.reload();
}