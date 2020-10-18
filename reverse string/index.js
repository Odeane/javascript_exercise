// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

function reverse(str) {

  let reversed = "";

  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}

// function reverse(str) {
//   debugger;
//    return str.split('').reduce((reversedString, character) => character + reversedString, '')

//  }


module.exports = reverse;