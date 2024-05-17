// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  if (!usernameInput || !passwordInput) {
    console.error("Input elements not found");
    return false;
  }

  // Access value
  var username = usernameInput.value;
  var password = passwordInput.value;

  // Log values to the console
  console.log("Hi, " + username + ". Here is your password: " + password);
}

// Attach the handleSubmit function to the form's submit event
document.getElementById("login-form").addEventListener("submit", handleSubmit);
