// Assignment code here
let getLength = function() {
  const minLength = 8;
  const maxLength = 128;

  let promptLength = window.prompt(`Please choose a password length from ${minLength}-${maxLength} characters (inclusive).`);

  if (!(promptLength >= 8 && promptLength <= 128)) {
    
  }
}

let getCriteria = function() {
  let length = getLength();

}



function generatePassword() {
  let criteria = getCriteria();


  console.log(promptLength, typeof(promptLength));


  return password;
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
