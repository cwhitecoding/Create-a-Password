// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener on generate button
generateBtn.addEventListener("click", writePassword);

// Begins process of creating password parameters
function generatePassword(generateBtn) {

  // Collects user inputs as data to create the right password
  var lengthPrompt = prompt ("How long would you like your password to be?\nMin: 8 - Max: 128");
  
  //
  if (lengthPrompt < 8 || lengthPrompt > 128) {
    alert ("Error. Please enter a number within parameters.");
    return "Error";
  } 

  // 
  var lowercaseP = confirm ("Would you like to use lower case letters?\nClick 'OK' for yes, 'Cancel' for no.");
  var upperCase = confirm ("Would you like to use upper case letters?\nClick 'OK' for yes, 'Cancel' for no.");
  var numbersP = confirm ("Would you like to use numbers?\nClick 'OK' for yes, 'Cancel' for no.");
  var symbolsP = confirm ("Would you like to use symbols?\nClick 'OK' for yes, 'Cancel' for no.");

  // Variables for confirmed input from previous prompts
  var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
  var upps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*(_-+=[{];:?/.>,<`~";

  // 
  var selectedCriteria = "";

  // IF statement confirming password is within correct parameters
  if (!upperCase && !numbersP && !symbolsP && !lowercaseP) {
    alert ("Error. Please enter at least one parameter.")
    return "Error"
  }
  if (upperCase) { 
    selectedCriteria += upps
  }
  if (lowercaseP) {
    selectedCriteria += lowercase
  }
  if (numbersP) {
    selectedCriteria += numbers
  }
  if (symbolsP) {
    selectedCriteria += symbols
  }

  // 
  var selectedChar = "";
  
  // Probably need a for loop for something.. run numbers and generate?
  for (var i=0; i < lengthPrompt; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCriteria.length);
    selectedChar += selectedCriteria[randomIndex];
}
return selectedChar
}