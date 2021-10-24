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

  // check if at least one value is true. this implementation is not extensible
  if (!(charCriteriaObj.lowerChars || charCriteriaObj.upperChars || charCriteriaObj.numbers || charCriteriaObj.specialChars)) {
    window.alert('Please specify at least 1 criteria!');
    return getCharCriteria();
  }
  // enhancement: better way to check if at least one is true

  return charCriteriaObj;
}

let getCriteria = function() {
  let criteriaObj = {};

  criteriaObj.pwdLength = getLength();

  // break out character criteria to check that at least one is true
  let charCriteria = getCharCriteria();

  // concat criteriaObj and charCriteria
  criteriaObj = Object.assign(criteriaObj, charCriteria);

  return(criteriaObj);
}

let getCharacters = function(criteriaObject) {
  let charactersObj = {};

  // hard-coded. enhancement opportunity
  if (criteriaObject.lowerChars) {
    charactersObj.lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  }
  if (criteriaObject.upperChars) {
    charactersObj.upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (criteriaObject.numbers) {
    charactersObj.numbers = '0123456789';
  }
  if (criteriaObject.specialChars) {
    charactersObj.specialChars = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
    // charactersObj.specialChars = `"`;
  }

  return charactersObj;
}

let randBetween = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function generatePassword() {
  let criteria = getCriteria();

  let characters = getCharacters(criteria);
  console.log(characters);

  let password = '';
  let characterKeys = Object.keys(characters);
  let multiKeys = characterKeys.length > 1;
  let currentCharSet = characters[characterKeys[0]];
  console.log(currentCharSet);
  let currentLength = currentCharSet.length;

  for (let i = 0; i < criteria.pwdLength; i++) {
    // if there's more than one key, select random key
    if (multiKeys) {
      let randKey = characterKeys[randBetween(0, characterKeys.length - 1)];
      currentCharSet = characters[randKey];
      currentLength = currentCharSet.length;
    }

    //select random character
    let currentRandIndex = randBetween(0, currentLength - 1);
    let randChar = currentCharSet.charAt(currentRandIndex);

    //concat to password, catch \' to escape that --> afte testing, don't think this is needed?
    // if (randChar == "'") {
    //   randChar = "\'";
    // }

    password += randChar;
  }


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
