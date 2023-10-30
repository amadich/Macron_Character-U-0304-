function convertLetterToMacron(inputLetter) {
  // Check if the input is a single letter (in this case, 'B')
  if (/^[A-Za-z]$/.test(inputLetter)) {
    // Create a combining macron character (U+0304) by using the normalized form
    const combiningMacron = '\u0304';

    // Return the letter followed by the combining macron character
    return inputLetter + combiningMacron;
  } else {
    // If the input is not a single letter, return it as is
    return inputLetter;
  }
}

// Example usage:
const inputLetter = "C";
const convertedLetter = convertLetterToMacron(inputLetter);
console.log(convertedLetter);  // Output: "B̄"
