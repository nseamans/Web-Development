/** revesrseWords
 *  This function takes in a string of data 
 *  and reverses the words independently of the 
 *  order in the string based on the spaces given.
 *  NOTE: any data given is automatically converted 
 *  into a string.
 */
function reverseWords(string) {
  string = string.toString();
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];
  
  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });
  
  return reversedWordsArr.join(' ');
}

// TESTS //
console.log("****FUNCITON CONVERTS ALL DATA INTO A STRING***");
console.log("****Test one****");
console.log(reverseWords('Coding JavaScript is fun'));
console.log("****Test two****");
console.log(reverseWords('Coding JavaScript'));
console.log("****Test three****");
console.log(reverseWords('Coding'));
console.log("****Test four****");
console.log(reverseWords('C'));
console.log("****Test five****");
console.log(reverseWords(56));
console.log("****Test six****");
console.log(reverseWords(" "));
