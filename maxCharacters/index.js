// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// create an object to accept characters
//loop over charcters and count how many time they appear
// assigna value to to each character depending on how many times it appear


function maxChar(str) {
  let charObj = {}
  let max = 0
  let maxChar = ''

  for (let letter of str) {
    if (!charObj[letter]) {
      charObj[letter] = 1
    } else {
      charObj[letter]++
    }
  }

  for (let item in charObj) {
    if (charObj[item] > max) {
      max = charObj[item]
      maxChar = item;
    }
  }
  return maxChar
}




module.exports = maxChar;
