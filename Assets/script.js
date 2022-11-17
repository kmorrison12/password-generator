// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function for generating password based on user inputs
function generatePassword() {
  var passwordLength = prompt("How many charteracter do you want in your password? (Must be bewteen 8 and 128 characters)");

while ((passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLength) === true)) {
    alert("Password Length must be a number that contains between 8 and 128 characters")
    passwordLength = prompt("How many character would your like your password to be? Must be 8 - 128")
  }

    var useLowercase = confirm("Do you want to include lowercase letters?");
    var useUppercase = confirm("Do you want to include uppercase letters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useCharacters = confirm("Do you want to include characters?");

    // add arrays for choices
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var characters = "!@#$%^&*(),./;'[]<>?:";
    var charbank = "";
    var newpassword = "";

    // if statements for bank depending on responses
    if (useLowercase === true) {
      charbank = charbank.concat(lowercase)
    }

    if (useUppercase === true) {
      charbank = charbank.concat(uppercase)
    }

    if (useNumbers === true) {
      charbank = charbank.concat(number)
    }

    if (useCharacters === true) {
      charbank = charbank.concat(characters)
    }

    // function to randomize characters in bank
    function random(max) {
      return [Math.floor(Math.random() * max)]
    }

    // add new var to take place of password
    for (var i = 0; i < passwordLength; i++) {
      newpassword = newpassword.concat(charbank.charAt(random(charbank.length - 1)))
    }
  
  return newpassword
  
  }

  // alert is none of the password criteria is chosen
  if (useUppercase && useLowercase && useNumbers && useCharacters) {
    alert("At least one criteria must be chosen.")
  }