// Function to generate a new secure password
function generatePassword() {
  // Get the user's input for password criteria.
  var criteria = {
    length: window.prompt("How long do you want your password to be? (8-128 characters)"),
    lowercase: window.confirm("Do you want to include lowercase letters? Click 'OK' to confirm."),
    uppercase: window.confirm("Do you want to include uppercase letters? Click 'OK' to confirm."),
    numeric: window.confirm("Do you want to include numeric characters? Click 'OK' to confirm."),
    special: window.confirm("Do you want to include special characters? Click 'OK' to confirm."),
  };

  // Validate the user's input.
  if (criteria.length < 8 || criteria.length > 128) {
    window.alert("Password length must be between 8 and 128 characters.");
    return;
  }
  if (!criteria.lowercase && !criteria.uppercase && !criteria.numeric && !criteria.special) {
    window.alert("You must select at least one character type.");
    return;
  }

  // Confirm the amount of characters
  window.confirm("Your password will have " + criteria.length + " charachers.");

  // Confirm the user's input.
  if (criteria.lowercase === true) {
    window.alert("Your password will contain lowercase characters.");
  } else {
    window.alert("Your password will not contain lowercase characters");
  }
  if (criteria.uppercase === true) {
    window.alert("Your password will contain uppercase characters.");
  } else {
    window.alert("Your password will not contain uppercase characters");
  }
  if (criteria.numeric === true) {
    window.alert("Your password will contain numberic characters.");
  } else {
    window.alert("Your password will not contain numberic characters");
  }
  if (criteria.special === true) {
    window.alert("Your password will contain special characters.");
  } else {
    window.alert("Your password will not contain special characters");
  }

  // Generate the password.
  let password = "";
  for (let i = 0; i = criteria.length; i++) {
    // Get a random character from the selected character types.
    let characters = {
      lowercaseOptions: "abcdefghijklmnopqrstuvwxyz",
      uppercaseOptions: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbericOptions: "0123456789",
      specialOptions: "!@#$%^&*()-_=+",
    }

    if (criteria.lowercase) {
      characters += lowercaseOptions.concat(Math.floor(Math.random()));
    } else if (criteria.uppercase) {
      characters += uppercaseOptions.concat(Math.floor(Math.random()));
    } else if (criteria.numeric) {
      characters += numericOptions.concat(Math.floor(Math.random()));
    } else if (criteria.special) {
      characters += specialOptions.concat(Math.floor(Math.random()));
    }

    // Add the character to the password.
    password += characters;
  }

  // Call the fuction
  generatePassword()

  // Display the password to the user.
  window.alert("Your password is: " + password);
};

// Add an event listener to the button to generate the password.
document.querySelector("#generate").addEventListener("click", generatePassword);


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