// Assignment Code
function generatePassword(){
  specialChar = confirm("would you like it to have special characters?")
  capitalLetters = confirm("Would you like the password to have capital letters")
  Numbers = confirm("would you like it to have special characters?")

  if (!specialChar && !capitalLetters && !Numbers){
    alert("Password must have at least one of these")
    return;
  }else{
    numChar = prompt("How many characters would you like?")
  }
  if ((numChar < 8) ){
    alert("That is too little characters. Password must be at least 8 characters and no more than 128 characters")
    return;
  }else if (numChar > 128){
     alert("That is too many characters. Password must be at least 8 characters and no more than 128 characters")
    return;
  }
  return 'testing'


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
