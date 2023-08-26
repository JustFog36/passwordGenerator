var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password === undefined) {
    passwordText.value = "There was an error generating the password, please try again.";
  } else if (password === 0) {
    passwordText.value = "If you need a password, please try again.";
  } else {
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lengthPrompt = prompt("Please choose a password character length between 8-128", "24");
  var length = Number(lengthPrompt);

  if (isNaN(length)) {
    alert("Please use only numbers!");
    return;
  } else if (length === 0) {
    alert("You need to set a password length!");
    return 0;
  } else if (length < 8) {
    alert("Minimum length is 8.");
    return;
  } else if (length > 128) {
    alert("Maximum length is 128.");
    return;
  }

  var generatedString = "";

  var lowerCaseConfirm = confirm("Would you like lowercase characters included in your password?");
  if (lowerCaseConfirm) {
    generatedString += "abcdefghijklmnopqrstuvwxyz";
  }

  var upperCaseConfirm = confirm("Would you like UPPERCASE characters included in your password?");
  if (upperCaseConfirm) {
    generatedString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var numberConfirm = confirm("Would you like numbers included in your password?");
  if (numberConfirm) {
    generatedString += "0123456789";
  }

  var symbolConfirm = confirm("Would you like symbols included in your password?");
  if (symbolConfirm) {
    generatedString += "!#$%&()*+,-./:;<=>?@[]/^_`{|}~";
  }

  if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !symbolConfirm) {
    return "Please allow at least one character type to generate a password";
  }

  var generatedPassword = "";

  for (var i = 0; i < length; i++) {
    generatedPassword += generatedString[Math.floor(Math.random() * generatedString.length)];
  }

  return generatedPassword;
}