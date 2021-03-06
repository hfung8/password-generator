// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set our global vars
var userOptions = {
    expectSpecialChars: false,
    expectNumericChars: false,
    expectUppercaseChars: false,
    expectLowercaseChars: false,
  };

// Write password to the #password input
function start() {
   console.log("we're here!");
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
}

//return a string
function generatePassword() {
   // ======= vars definition ======
   // Array of special characters to be included in password
   var specialCharacters = [
      "@",
      "%",
      "+",
      "\\",
      "/",
      "'",
      "!",
      "#",
      "$",
      "^",
      "?",
      ":",
      ",",
      ")",
      "(",
      "}",
      "{",
      "]",
      "[",
      "~",
      "-",
      "_",
      ".",
   ];
   // Array of numeric characters to be included in password
   var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   // Array of lowercase characters to be included in password
   var lowerCasedCharacters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
   ];
   // Array of uppercase characters to be included in password
   var upperCasedCharacters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
   ];
   var userOptionalChars = [];
   var passwordLength = parseInt(prompt("How many characters would you like your passsword to contain? It should be longer than 8 and shorter than 128!"));
   // ======= functions definition ======
   function getUserOptions() {
      // Get user options and store in vars
      // Check for length (it should be longer than 8 and shorter than 128)
      if (passwordLength < 8 || passwordLength > 128){
        alert("Please put in a length that is longer than 8 and shorter than 128!");
        getUserOptions();
      } else if (8 < passwordLength < 128){
      // Check if lower
      var lowerConfirm = confirm("Do you want it to contain lower case characters?");
      if (lowerConfirm){
      userOptions.expectLowercaseChars = true;
      }
      // Check if upper
      var upperConfirm = confirm("Do you want it to contain upper case characters?");
      if (upperConfirm){
      userOptions.expectUppercaseChars = true;
      }
      // Check if special
      var specialConfirm = confirm("Do you want it to contain special case characters?");
      if (specialConfirm){
      userOptions.expectSpecialChars = true;
      }
      // Check if numeric
      var numericConfirm = confirm("Do you want it to contain numbers?");
      if (numericConfirm){
      userOptions.expectNumericChars = true;
      }
      // Check that at least one is true
      if (lowerConfirm == true || upperConfirm == true || specialConfirm == true || numericConfirm == true){
          alert("Great! You have selected one or more of the prompts to create your password!");
      }
      else {
          alert("Select one of the choices to generate your password!");
          getUserOptions();
            }
        }
    }

    function generatePassword(userOptions) {
      var password = [];
      var optionsArray = [];
      var solved = '';

      // We push the specified array characters to optionalChars and then pull from there to create the password
      // Once we have the optionalChars we combine the possible characters together with the concat method and then generate
      // a random password

      // If lower
      if (userOptions.expectLowercaseChars == true){
      // add lowerCharsArray to userOptionalChars
        userOptionalChars.push(lowerCasedCharacters);
      }

      // If upper
      if (userOptions.expectUppercaseChars == true){
      // add upperCharsArray to userOptionalChars
        userOptionalChars.push(upperCasedCharacters);
      }

      // If special
      if (userOptions.expectSpecialChars == true){
      // Add specialCharsArray to userOptionalChars
        userOptionalChars.push(specialCharacters);
      }

      // If numeric
      if (userOptions.expectNumericChars == true){
      // Add numericCharsArray to userOptionalChars
        userOptionalChars.push(numericCharacters);
      }

      // Grab the pushed arrays from userOptional Chars and combine them in optionsArray
      for (var h = 0; h < userOptionalChars.length; h++){
        optionsArray = optionsArray.concat(userOptionalChars[h]);
      }

      // Get the length of the optionsArray
      var length = optionsArray.length;

      // For loop for creating password
      for (var i = 0; i < passwordLength; i++){
          password.push(optionsArray[Math.floor(Math.random() * length) + 1 ]);
      }

      // Create a for loop for password and add password to solved string one character at a time
      for (var x = 0; x < password.length; x++){
        solved += password[x];
      }

      // Set password to solved so that we can append password to the screen later on
      password = solved;

     // The function will return a password because this is used to append the password to the screen later on
      return password;
    }
   // ======= functions calls (start) ======
   getUserOptions();

   // We will return a the function in order to return a password from generatePassword() the larger function
   return generatePassword(userOptions)
}

// Add event listener to generate button
generateBtn.addEventListener("click", start);


