// This function detects user activity and sets a timer to refresh the page
// after 60 seconds of inactivity.
function detectUserActivity() {
  // Get the current time.
  let currentTime = new Date();

  // Set a timer to refresh the page after 60 seconds.
  let timer = setTimeout(function() {
    // Refresh the page.
    window.location.reload();
  }, 60000);

  // Listen for user activity.
  window.addEventListener("mousemove", function() {
    // Clear the timer so that the page does not refresh.
    clearTimeout(timer);

    // Get the current time.
    let currentTime = new Date();

    // Set a new timer to refresh the page after 60 seconds.
    let newTimer = setTimeout(function() {
      // Refresh the page.
      window.location.reload();
    }, 60000);

    // Check if the timer has been running for more than 60 seconds.
    if (Date.now() - currentTime > 60000) {
      // If so, clear the timer and set a new one.
      clearTimeout(newTimer);
      newTimer = setTimeout(function() {
        // Refresh the page.
        window.location.reload();
      }, 60000);
    }
  });

  window.addEventListener("click", function() {
    // Clear the timer so that the page does not refresh.
    clearTimeout(timer);

    // Get the current time.
    let currentTime = new Date();

    // Set a new timer to refresh the page after 60 seconds.
    let newTimer = setTimeout(function() {
      // Refresh the page.
      window.location.reload();
    }, 60000);

    // Check if the timer has been running for more than 60 seconds.
    if (Date.now() - currentTime > 60000) {
      // If so, clear the timer and set a new one.
      clearTimeout(newTimer);
      newTimer = setTimeout(function() {
        // Refresh the page.
        window.location.reload();
      }, 60000);
    }
  });

  window.addEventListener("keydown", function() {
    // Clear the timer so that the page does not refresh.
    clearTimeout(timer);

    // Get the current time.
    let currentTime = new Date();

    // Set a new timer to refresh the page after 60 seconds.
    let newTimer = setTimeout(function() {
      // Refresh the page.
      window.location.reload();
    }, 60000);

    // Check if the timer has been running for more than 60 seconds.
    if (Date.now() - currentTime > 60000) {
      // If so, clear the timer and set a new one.
      clearTimeout(newTimer);
      newTimer = setTimeout(function() {
        // Refresh the page.
        window.location.reload();
      }, 60000);
    }

    // Check to see if the user has been active recently.
    if (Date.now() - currentTime < 60000) {
      // If so, clear the timer.
      clearTimeout(newTimer);
    }
  });
}

// Call the detectUserActivity() function when the page loads.
window.onload = detectUserActivity;