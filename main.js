// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(n1, n2) {
  if (n1 > n2) {
    return 'n1 is larger';
  } else {
    return 'n2 is larger';
  }
}
console.log(max(2, 3));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return 'n1 is the largest';
  } else if (n2 > n3 && n2 > n1) {
    return 'n2 is the largest';
  } else if (n3 > n2 && n3 > n1) {
    return 'n3 is the largest';
  }
}
console.log(maxOfThree(3, 2, 1));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return 'this character is a vowel';
  } else {
    return 'this character is a consonant';
  }
}
console.log(isVowel('t'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(n1, n2) {
  let answer = n1 + n2;
  return answer;
}
console.log (sum(22, 6));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(n1, n2, n3) {
  let answer = ((n1 + n2 + n3) / 3);
  return answer;
}
console.log (avg(2, 6, 10));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {
  let answer = string.length;
  return answer;
}
console.log (getLength('stacey is awesome'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2) {
  return num1 < num2;
}
console.log (greaterThan(10, 11));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(string) {
  return 'Hello,' + ' ' + string + '!';
}
console.log (greet('putz'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(word1, word2, word3, word4) {
  return 'The' + ' ' + word1 + ' ' + word2 + ' ' + 'me' + ' ' + word3 + ' ' + 'I' + ' ' + word4;
}
console.log (madlib('universe', 'gives', 'what', 'need'));
