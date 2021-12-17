// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const splitWord = word.toLowerCase().split("");
  let characterCount = 1;
  let finalString = "";
  let doubledNumbers = [];

  for (let index = 0; index < splitWord.length; index++) {
    for (let i = index + 1; i < splitWord.length; i++) {
      if (splitWord[index] == splitWord[i]) {
        characterCount++;
      }
    }

    if (doubledNumbers.includes(splitWord[index]) == false) {
      if (characterCount == 1) {
        finalString += "(";
      } else {
        finalString += ")";
        characterCount = 1;
        doubledNumbers.push(splitWord[index]);
      }
    } else {
      finalString += ")";
      characterCount = 1;
    }
  }

  return finalString;
}
