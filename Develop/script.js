// Assignment Code
function generatePassword(){
  var strCapitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var strLowercase = 'abcdefghijklmnopqrstuvwxyz'
  var strNums = '1234567890'
  var strSpecialchars = '~!@#$%^&*()_+`=,./<>?;:'
  var toPullfrom =''

  var lowerCaseinput = confirm("Would you like the password to have lowercase letters")
  var specialCharinput = confirm("would you like it to have special characters?")
  var capitalLettersinput = confirm("Would you like the password to have capital letters")
  var numbersInputs = confirm("would you like it to have numbers?")

  if (!specialCharinput && !capitalLettersinput && !numbersInputs && !lowerCaseinput){
    alert("Password must have at least one of these")
    return;
  }else{
    var numCharinput = prompt("How many characters would you like?")
    console.log(typeof numCharinput)
  }
  if(isNaN(numCharinput)){
    alert('Input needs to be a number')

  }else if ((numCharinput < 8) ){
    alert("That is too little characters. Password must be at least 8 characters and no more than 128 characters")
    return;
  }else if (numCharinput > 128){
     alert("That is too many characters. Password must be at least 8 characters and no more than 128 characters")
    return;
  }

  if (lowerCaseinput){
    toPullfrom = toPullfrom + strLowercase
  }
  if (capitalLettersinput){
    toPullfrom = toPullfrom + strCapitals
  }
  if (specialCharinput){
    toPullfrom = toPullfrom + strSpecialchars
  }
  if (numbersInputs){
    toPullfrom = toPullfrom + strNums
  }
  var finalPassword = ''
  for (let i = 0; i < numCharinput; i++) {
     finalPassword = finalPassword + toPullfrom[Math.floor(Math.random() * toPullfrom.length)];
    
  }
  return finalPassword
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
