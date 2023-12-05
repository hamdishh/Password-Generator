// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var lengthOfPassword = prompt("Enter the length of the password. It must be between 8 and 128 characters:");

  // Use logical operators to authenticate input for the length of the password
  if (lengthOfPassword < 8 || lengthOfPassword > 128 || isNaN(lengthOfPassword)) {
    console.log("Invalid password length entered by the user.");
    alert("Password length is not valid. Please enter a number of characters between 8 and 128.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Ensure that at least one character type will be used by the user
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    console.log("No character type selected by the user.");
    alert("Please select at least one character type.");
    return;
  }

  console.log("The user's input has been received without any errors.");
  return {
    length: lengthOfPassword,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  console.log("obtaining an index at random from the array...");

  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions ();

  var allChars = [];
  var password = "";

  if (options.includeLowercase) {
    allChars = allChars.concat(lowerCasedCharacters);
    password += getRandom(lowerCasedCharacters);
  }

  if (options.includeUppercase) {
     allChars = allChars.concat(upperCasedCharacters);
     password += getRandom(upperCasedCharacters);
  }
  if (options.includeNumbers) {
    allChars = allChars.concat(numericCharacters);
    password += getRandom(numericCharacters);
  }
  if (options.includeSpecialChars) {
    allChars = allChars.concat(specialCharacters);
    password += getRandom(specialCharacters);
  }

  for (var i = password.length; i < options.length; i++) {
    password += getRandom(allChars);
  }

  console.log("Password successfully inputed");
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);