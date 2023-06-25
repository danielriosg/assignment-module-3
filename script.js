// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create function to prompt the password with the required criteria
function writePassword() {
  var passwordLength = parseInt(
    prompt("Enter the length of the password, between 8 and 128 characters")
  );

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128");
    return;
  }

  // Confirm characters
  var includeLowercase = confirm(
    "Do you want to include lowercase characters?"
  );
  var includeUppercase = confirm(
    "Do you want to inlcude uppercase characters?"
  );
  var includeNumeric = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");

  // Validate at least one type character is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    includeSpecial
  ) {
    alert("You must select at least one character type");
    return;
  }

  // Generate the password criteria
  var password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial
  );

  // alert for generated password
  alert("Your generated password is: " + password);
}
