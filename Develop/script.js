// Password Generator
// Add an event listener to the button to generate the password.
document.querySelector("#generate").addEventListener("click", generatePassword);

// Function to generate a new secure password
function generatePassword() {
  
  // Generate password
  let password = "";
  let length = prompt("How long do you want your password to be? Your password must be 8-128 characters long.");
    // Validate the user's input.
    if (length < 8 || length > 128) {
      window.alert("Password length must be between 8 and 128 characters long. Please try again.");
      return;
    }
    if (isNaN(length)) {
      window.alert("You must enter a number. Please try again.")
      return;
    }
  
  // Confirm the amount of characters
  window.confirm("Your password will have " + length + " charachers.");

  // Get the user's input for password criteria.
  var criteria = {
    lowercase: window.confirm("Do you want to include lowercase letters? Click 'OK' to select."),
    uppercase: window.confirm("Do you want to include uppercase letters? Click 'OK' to select."),
    numeric: window.confirm("Do you want to include numeric characters? Click 'OK' to select."),
    special: window.confirm("Do you want to include special characters? Click 'OK' to select."),
  };

  // Array to declare character types
  var characters = [];
  if (criteria.lowercase === true) {
   characters.concat("abcdefghijklmnopqrstuvwxyz");
   window.alert("Your password will contain at least one lowercase character.");
  } else {
    window.alert("Your password will not contain any lowercase characters");
  }
  if (criteria.uppercase === true) {
   characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
   window.alert("Your password will contain at least one uppercase character.");
  } else {
    window.alert("Your password will not contain any uppercase characters");
  }
  if (criteria.numeric === true) {
   characters.concat("0123456789");
   window.alert("Your password will contain at least one numberic character.");
  } else {
    window.alert("Your password will not contain any numberic characters");
  }
  if (criteria.special === true) {
   characters.concat("!@#$%^&*()_+");
   window.alert("Your password will contain at least one special character.");
  } else {
    window.alert("Your password will not contain any special characters");
  }

  if (!criteria.lowercase && !criteria.uppercase && !criteria.numeric && !criteria.special) {
    window.alert("You must select at least one character type.");
    return;
  }

  for (let i = 0; i < length; i++) {
    const index = characters.concat(Math.floor(Math.random() * characters.length));
    password = index;
    // Display the password to the user.
    window.alert("Your password is: " + password);
    return;
  }
  
  // Call the fuction
  generatePassword()
  
}

/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/