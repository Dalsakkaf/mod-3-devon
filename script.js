// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength
var password

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;

}
// the prompts for the length of the password, must be within the parameters of 8-128 charcters 
function generatePassword() {
  passwordLength =  prompt("How long is your password?");
console.log(passwordLength);
if (passwordLength < 8 && passwordLength > 128) {
  alert("u done messed up"); 
};
if (passwordLength > 8 && passwordLength < 128) {
  then("gortort");
};
}

function generatePassword(){

}

// these prompts 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


onclick.spec("Password Length?");





// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters YES!
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page