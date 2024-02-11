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
  var lengthOfPassword = parseInt(prompt("Enter the length of the password. It must be between 8 and 128 characters:"));

  // Validate password length
  if (isNaN(lengthOfPassword) || lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Ensure at least one character type will be used
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return null;
  }

  return {
    length: lengthOfPassword,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars
  };
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return ""; // exit if options are invalid or not provided

  var allChars = [];
  var password = "";

  if (options.includeLowercase) allChars = allChars.concat(lowerCasedCharacters);
  if (options.includeUppercase) allChars = allChars.concat(upperCasedCharacters);
  if (options.includeNumbers) allChars = allChars.concat(numericCharacters);
  if (options.includeSpecialChars) allChars = allChars.concat(specialCharacters);

  // Generate password
  for (var i = 0; i < options.length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
}

// Get reference to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);