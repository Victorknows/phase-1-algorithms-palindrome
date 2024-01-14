function isPalindrome(word) {
  // Write your algorithm here
    const wordToArray = word.split('');
    const reverse = wordToArray.slice().reverse();
    const rejoin = reverse.join('');
  
    return rejoin === word;
  }
  

/* 
  Add your pseudocode here
  1.Converts the word to an array of characters
  2.Reverse the array
  3.Join the reversed array to a string
  4.Compare the reversed string with the original word
*/

/*
  Add written explanation of your solution here
  The function takes in a word and converts it into an array of characters. This array is then reversed
  and ten turned into a string. The function then compares the reversed string with the original word.
*/

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
