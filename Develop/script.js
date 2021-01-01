// Assignment code here

//possible password values
var upperCaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCaseValues = 'abcdefghijklmnopqrstuvwxyz';
var numberValues = '0123456789';
var specialCharValues = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

var generatePassword = function() {
  //Determine user's preference for the number of characters included in password
  var length = "";

  while (length == "" || length == null || length <= 7 || length > 128) {
    length = prompt("Caution: Your password must be between 8 and 128 characters. Choose a valid password length.")
  }
  console.log(length);

  //Determine user's preference for characters included in password
  var lowerCase = confirm("Would you like to include lower case letters? Choose OK for yes or CANCEL for no.");
  var upperCase = confirm("Would you like to include upper case letters? Choose OK for yes or CANCEL for no.");
  var numbers = confirm("Would you like to include numbers? Choose OK for yes or CANCEL for no.");
  var special = confirm("Would you like to include special characters? Choose OK for yes or CANCEL for no.");

  while (lowerCase == false && upperCase == false && numbers == false && special == false) {
    alert("Caution: You must choose at least one parameter for your password. Please try again.");
    lowerCase = confirm("Would you like to include lower case letters? Choose OK for yes or CANCEL for no.");
    upperCase = confirm("Would you like to include upper case letters? Choose OK for yes or CANCEL for no.");
    numbers = confirm("Would you like to include numbers? Choose OK for yes or CANCEL for no.");
    special = confirm("Would you like to include special characters? Choose OK for yes or CANCEL for no.");
  }
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numbers);
  console.log(special);

  //Create list of characters to include in password based on user's selections

  var characters = ""

    if(lowerCase) {
      characters = characters.concat(lowerCaseValues)
    }

    if(upperCase) {
      characters = characters.concat(upperCaseValues)
    }

    if(numbers) {
      characters = characters.concat(numberValues)
    }

    if(special) {
      characters = characters.concat(specialCharValues)
    }
    console.log(characters);

  //choose password characters based on length provided by user

  var passwordString = ""
  
  for(var i=0; i <= length-1; i++){
    passwordString = passwordString + characters[Math.floor(Math.random() * Math.floor(characters.length -1))];
    console.log(passwordString);
  }
  return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);