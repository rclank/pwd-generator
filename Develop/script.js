// Assignment code here
let getLength = function() {
  const minLength = 8;
  const maxLength = 128;


  // prompt for length
  let promptLength = window.prompt(`Please choose a password length from ${minLength}-${maxLength} characters (inclusive).`);

  // potential enhancement: terminate function if cancel (null)?

  // validate length input
  if (!(promptLength >= 8 && promptLength <= 128)) {
    window.alert(`You need to provide a valid length from ${minLength}-${maxLength} characters (inclusive)! Please try again.`);
    return getLength();
  }
  return parseInt(promptLength);
}

let getCharCriteria = function() {
  let charCriteriaObj = {};

  charCriteriaObj.lowerChars = window.confirm(`Would you like to include lowercase characters?`);
  charCriteriaObj.upperChars = window.confirm(`Would you like to include uppercase characters?`);
  charCriteriaObj.numbers = window.confirm(`Would you like to include numbers?`);
  charCriteriaObj.specialChars = window.confirm(`Would you like to include special characters?`);

  // check if at least one value is true. not extensible
  if (!(charCriteriaObj.lowerChars || charCriteriaObj.upperChars || charCriteriaObj.numbers || charCriteriaObj.specialChars)) {
    window.alert('Please specify at least 1 criteria!');
    return getCharCriteria();
  }
  // enhancement: better way to check if at least one is true

  return charCriteriaObj;
}

let getCriteria = function() {
  let criteriaObj = {};

  criteriaObj.length = getLength();

  // break out character criteria to check that at least one is true
  let charCriteria = getCharCriteria();

  // concat critriaObj and charCriteria
  criteriaObj = Object.assign(criteriaObj, charCriteria);

  return(criteriaObj);
}

let getCharacters = function(criteriaObject) {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}


function generatePassword() {
  let criteria = getCriteria();

  let characters = getCharacters();


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
