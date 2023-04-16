/*****************           1. Do the below programs in Arrow Function           *****************/

console.log("");
console.log("                 Arrow Function                              ");

//a. To print odd numbers in an array
console.log("a. To print odd numbers in an array");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = arr.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//b. To convert all strings to title case in a string array
console.log("b. To convert all strings to title case in a string array");

const arrayInCaps = ["either find a way", "or create one", "but don't stop"];
const titleCaseArr = arrayInCaps.map(str => str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" "));
console.log(titleCaseArr);

//c. To calculate the sum of all numbers in an array
console.log("c. To calculate the sum of all numbers in an array");

const sumOfArray = [1, 2, 3, 4, 5];
const sum = sumOfArray.reduce((actualnumber, currentnumber) => actualnumber + currentnumber, 0);
console.log(sum);

//d. To return all prime numbers in an array
console.log("d. To return all prime numbers in an array");

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
};

const primeNumbers = numberArray.filter(isPrime);
console.log(primeNumbers);

//e. To return all palindromes in an array
console.log("e. To return all palindromes in an array");

const findPalindromes = ["radar","value","level","number","noon","null"];

const isPalindrome = str => str.split("").reverse().join("") === str;
const palindromeArr = findPalindromes.filter(isPalindrome);
console.log(palindromeArr);



