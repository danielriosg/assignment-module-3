// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create function to prompt the password with the required criteria
function writePassword() {
  var passwordLength = parseInt(
    prompt("Enter the length of the password, between 8 and 128 characters")
  );
}

// Validate password length
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Invalid password length. Please enter a number between 8 and 128");
  return;
}
