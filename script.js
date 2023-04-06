/*

*/

let activityTimeStamp = null;
const refreshDelayTime = 120000; // 2 minutes
const minRefreshDelayTime = refreshDelayTime;
let refreshTimer = null;

function initialize() {
  // Add event listeners here
  document.addEventListener("mousemove", function(event) {
    activityTimeStamp = Date.now();
    resetRefreshTimer();
    //alert("Mouse moved!");
  });
  document.addEventListener("click", function(event) {
    activityTimeStamp = Date.now();
    resetRefreshTimer();
    alert("Mouse clicked!");
  });
  document.addEventListener("keydown", function(event) {
    activityTimeStamp = Date.now();
    resetRefreshTimer();
    alert("Key pressed!");
  });
  document.addEventListener("touchmove", function(event) {
    activityTimeStamp = Date.now();
    resetRefreshTimer();
    //alert("Touch moved!");
  });
  
  
  // Set up the refresh timer
  resetRefreshTimer();
}

function resetRefreshTimer() {
  clearTimeout(refreshTimer);
  if (activityTimeStamp !== null) {
    const remainingTime = refreshDelayTime - (Date.now() - activityTimeStamp);
    const delayTime = remainingTime < minRefreshDelayTime ? minRefreshDelayTime : remainingTime;
    refreshTimer = setTimeout(function() {
      location.reload();
    }, delayTime);
  }
}

window.onload = function() {
  // Call the initialize function
  initialize();
};
