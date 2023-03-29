// Assignment Code
function generatePassword(){
  //defining all characters that can be used to generate the password
  var strCapitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var strLowercase = 'abcdefghijklmnopqrstuvwxyz'
  var strNums = '1234567890'
  var strSpecialchars = '~!@#$%^&*()_+`=,./<>?;:'
  var toPullfrom =''

  //prompting the user for how many characters they was the password and checking to see if it is long enough or too long or if its not a number
  var numCharinput = prompt("How many characters would you like?")
  if(isNaN(numCharinput)){
    alert('Input needs to be a number')

  }else if ((numCharinput < 8) ){
    alert("That is too little characters. Password must be at least 8 characters and no more than 128 characters")
    return;
  }else if (numCharinput > 128){
     alert("That is too many characters. Password must be at least 8 characters and no more than 128 characters")
    return;
   //if it meets all the length requirements then ask for the character criteria 
  }else{
    var lowerCaseinput = confirm("Would you like the password to have lowercase letters")
    var specialCharinput = confirm("would you like it to have special characters?")
    var capitalLettersinput = confirm("Would you like the password to have capital letters")
    var numbersInputs = confirm("would you like it to have numbers?")
    //check to make sure they answered at least one of them
    if (!specialCharinput && !capitalLettersinput && !numbersInputs && !lowerCaseinput){
    alert("Password must have at least one of these")
    return;
    }
  }
  //depending on what they choose add all the acceptable characters to one string to pull from
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
  //ramdomly grab characters from acceptable characters up to the length to selected length and add them to a final string to return
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
