// Function to update the counter value
function updateCounter() {
  // Get the counter element
  var counterElement = document.getElementById("counter");

  // Get the current counter value
  var currentValue = parseInt(counterElement.textContent);

  // Update the counter value
  counterElement.textContent = currentValue + 1;
}

// Update the counter value every three seconds using setInterval
setInterval(updateCounter, 3000); // 3000 milliseconds = 3 seconds
