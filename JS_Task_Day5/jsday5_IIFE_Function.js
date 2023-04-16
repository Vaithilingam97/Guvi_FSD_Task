/*****************           1. Do the below programs in IIFE Function           *****************/


console.log("");
console.log("                 IIFE Function                              ");

//a. Print odd numbers in an array
console.log("a. Print odd numbers in an array");

(function() {
  function printOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
  }
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})();


//b. Convert all the strings to title caps in a string array
console.log("b. Convert all the strings to title caps in a string array");

(function() {
  function convertToTitleCaps(arr) {
    const titleCapsArr = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCapsArr);
  }
  convertToTitleCaps(["be the best", "version of you"]);
})();

//c. Sum of all numbers in an array

console.log("c. Sum of all numbers in an array");

(function() {
  function sumOfNumbers(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    console.log(sum);
  }
  sumOfNumbers([1, 2, 3, 4, 5]);
})();

//d. Return all the prime numbers in an array
console.log("d. Return all the prime numbers in an array");

(function() {
  function getPrimeNumbers(arr) {
    const isPrime = num => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const primeNumbers = arr.filter(num => isPrime(num));
    console.log(primeNumbers);
  }
  getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})();

//e. Return all the palindromes in an array
console.log("e. Return all the palindromes in an array");

(function() {
  function getPalindromes(arr) {
    const isPalindrome = str => str === str.split("").reverse().join("");
    const palindromes = arr.filter(str => isPalindrome(str));
    console.log(palindromes);
  }
  getPalindromes(["refer", "array", "pop", "string","wow"]);
})();

//f. Return median of two sorted arrays of the same size
console.log("f. Return median of two sorted arrays of the same size");

(function() {
  function getMedian(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    const len = mergedArr.length;
    const median = len % 2 === 0 ? (mergedArr[len / 2 - 1] + mergedArr[len / 2]) / 2 : mergedArr[Math.floor(len / 2)];
    console.log(median);
  }
  //getMedian([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
  getMedian([1, 2, 3], [4, 5, 6, 7]);
})();

//g. Remove duplicates from an array using IIFE function
console.log("g. Remove duplicates from an array using IIFE function");

(function () {
  const arr = [1, 2, 2, 3, 3, 4, 5];
  const uniqueArr = [...new Set(arr)];
  console.log( uniqueArr);
})();

//h. Rotate an array by k times
console.log("h. Rotate an array by k times");

(function () {
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  const len = arr.length;
  const rotateIndex = k % len;
  const rotatedArr = [...arr.slice(rotateIndex), ...arr.slice(0, rotateIndex)];
  console.log( rotatedArr);
})();




function add(x, y) {
  return x + y;
  }

  // let add = function(a, b) {
  //   return a + b;
  //   }

  //   (function() {
  //     // code to be executed
  //     })();

  //     const add = (a, b) => {
  //       return a + b;
  //       }

  //       const add = (a, b) => a + b;