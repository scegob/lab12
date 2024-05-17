function handleSubmit() {
  var usernameInput = document.getElementById("username");
  var greetingDiv = document.getElementById("hi");
  var passwordInput = document.getElementById("password");

  if (!usernameInput || !passwordInput) {
    console.error("Input elements not found");
    return false;
  }

  // Access value
  var username = usernameInput.value;
  var password = passwordInput.value;
  greetingDiv.textContent = "Hi, " + username;

  // Log values
  console.log("Username:", username);
  console.log("Password:", password);
  return false;
}
