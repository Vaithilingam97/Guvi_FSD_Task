/*****************           1. Do the below programs in Anonymous Function           *****************/

console.log("                 Anonymous Function                              ");

//a. Print Odd numbers in an Array
console.log("a. Print Odd numbers in an Array")
var array = [1,2,3,4,5,6,7,8,9,10];

var odd = array.filter(function(oddnumber) {
  return oddnumber % 2 != 0; 
});
console.log(odd);

//b. Convert all the strings to title caps in a string array
console.log("b. Convert all the strings to title caps in a string array")
const strArr = ["hi", "how are you?"];

(function() {
  const titleCaps = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  console.log(titleCaps);
})();

//c. Sum of all numbers in an array
console.log("c. Sum of all numbers in an array")
const numArr = [1, 2, 3, 4, 5];

(function() {
  const sum = numArr.reduce((actualnumber, currentnumber) => actualnumber + currentnumber);
  console.log(sum);
})();

//d. Return all the prime numbers in an array
console.log("d. Return all the prime numbers in an array")

const numArr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

(function() {
  const isPrime = num => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const primeNumbers = numArr1.filter(num => isPrime(num));
  console.log(primeNumbers);
})();

//e. Return all the palindromes in an array
console.log("e. Return all the palindromes in an array")

const strArr1 = ["mom", "heaven", "liril", "hell","madam"];
(function() {
  const isPalindrome = str => str === str.split("").reverse().join("");
  
  const palindromes = strArr1.filter(str => isPalindrome(str));
  console.log(palindromes);
})();

//f. Return median of two sorted arrays of the same size
console.log("f. Return median of two sorted arrays of the same size")

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

(function() {
  const mergedArr = [...arr1,...arr2];
  const sortedArr = mergedArr.sort((a, b) => a - b);
  const mid = sortedArr.length / 2;
  const median = sortedArr.length % 2 === 0 ? (sortedArr[mid - 1] + sortedArr[mid]) / 2 : sortedArr[Math.floor(mid)];
  console.log(median);
})();


//g. Remove duplicates from an array
console.log("g. Remove duplicates from an array")

const array1 = [1, 2, 3, 4, 5, 1, 2, 3];
(function() {
  const uniqueArr = [...new Set(array1)];
  console.log(uniqueArr);
})();

//h. Rotate an array by k times
console.log("h. Rotate an array by k times")

const array2 = [1, 2, 3, 4, 5];
const k = 3;

(function() {
  const rotatedArr = [...array2.slice(k), ...array2.slice(0, k)];
  console.log(rotatedArr);
})();

