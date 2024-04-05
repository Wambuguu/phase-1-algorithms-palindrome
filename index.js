function isPalindrome(word) {
  // Write your algorithm here

  // 1. Convert the word to lowercase to make it case-insensitive
  const lowercaseWord = word.toLowerCase();
  
  //2. Iterate through the word, comparing characters from both ends:
    for (let i = 0; i < lowercaseWord.length / 2; i++) {
      if (lowercaseWord[i] !== lowercaseWord[lowercaseWord.length - i - 1]) {
        return false; // Not a palindrome
      }
    }
    // If all characters match, it's a palindrome:
    return true; 
  }

/* 
  Add your pseudocode here
*/
// 1. Convert the input word to lowercase.
// 2. Iterate through the normalized word, comparing characters from the beginning and end.
// 3. If any characters don't match, return false (not a palindrome)
// 4. If all characters match, return true (palindrome)

/*
  Add written explanation of your solution here
*/

// The function takes a word as input and checks whether it is a palindrome.
// It converts the word to lowercase to make the comparison case-insensitive.
// It then iterates through the lowercase word, comparing characters from the beginning and end using a for loop.
// If any characters don't match, it means the word is not a palindrome, so it returns false.
// If all characters match, it means the word is a palindrome, so it returns true.

// Custom tests:

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
