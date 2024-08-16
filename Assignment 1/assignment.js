//Harshil Patel - IU2141230170

// 1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
// : a word or phrase made by transposing the letters of another word or phrase
// The word "secure" is an anagram of "rescue."
// function isAnagram(str1, str2) {
//     // Remove spaces and convert to lowercase
//     str1 = str1.replace(/\s+/g, '').toLowerCase();
//     str2 = str2.replace(/\s+/g, '').toLowerCase();

//     // Check if lengths are different
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     // Create frequency maps
//     const countMap1 = {};
//     const countMap2 = {};

//     for (let char of str1) {
//         countMap1[char] = (countMap1[char] || 0) + 1;
//     }

//     for (let char of str2) {
//         countMap2[char] = (countMap2[char] || 0) + 1;
//     }

//     // Compare frequency maps
//     for (let char in countMap1) {
//         if (countMap1[char] !== countMap2[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isAnagram('secure','rescue'));

// Question 1 Complete


// 2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and returns a list of objects where each object is unique category-wise and has total price spent as its value.
// function calculateTotalSpentByCategory(transactions) {
//     const totalByCategory = {};

//     transactions.forEach(transaction => {
//         const { category, amount } = transaction;
//         if (!totalByCategory[category]) {
//             totalByCategory[category] = 0;
//         }
//         totalByCategory[category] += amount;
//     });

//     // Convert the object to an array of objects
//     return Object.keys(totalByCategory).map(category => ({
//         category,
//         totalSpent: totalByCategory[category]
//     }));
// }

// const transactions = [
//     { category: 'Food', amount: 50 },
//     { category: 'Transport', amount: 20 },
//     { category: 'Food', amount: 30 },
//     { category: 'Entertainment', amount: 70 }
// ];
// console.log(calculateTotalSpentByCategory(transactions));



// 3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
// function findLargestElement(numbers) {
//     return Math.max(...arr);
// }
// let arr =[1,10,50,20,1,2]
// console.log(findLargestElement(arr)); 




// 4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
// function isPalindrome(str) {
//     // Normalize the string: remove spaces and convert to lowercase
//     const normalizedStr = str.replace(/\s+/g, '').toLowerCase();

//     // Check if the normalized string is equal to its reverse
//     return normalizedStr === normalizedStr.split('').reverse().join('');
// }
// console.log(isPalindrome("abba"));


// 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
// function calculateSumTime(n) {
//     // Start the timer
//     const startTime = performance.now();
    
//     // Calculate the sum from 1 to n
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
    
//     // End the timer
//     const endTime = performance.now();
    
//     // Calculate the time taken in seconds
//     const timeTaken = (endTime - startTime) / 1000;
    
//     return timeTaken;
// }

// // Example usage:
// const n = 1000;
// const timeInSeconds = calculateSumTime(n);
// console.log(`Time taken to calculate sum from 1 to ${n}: ${timeInSeconds} seconds`);



// 6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
// function countVowels(str) {
//     // Define a string containing all vowels
//     const vowels = 'aeiouAEIOU';
    
//     // Initialize a counter for the number of vowels
//     let count = 0;
    
//     // Iterate through each character in the input string
//     for (let char of str) {
//         // If the character is a vowel, increment the counter
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
    
//     return count;
// }

// // Example usage:
// const inputString = "Hello, World!";
// const numberOfVowels = countVowels(inputString);
// console.log(`Number of vowels in "${inputString}": ${numberOfVowels}`);

// 7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.
// function sumArray(numbers) {
//     // Initialize a variable to store the sum
//     let sum = 0;

//     // Iterate through each number in the array
//     for (let number of numbers) {
//         // Add the current number to the sum
//         sum += number;
//     }

//     return sum;
// }

// // Example usage:
// const numbersArray = [1, 2, 3, 4, 5];
// const totalSum = sumArray(numbersArray);
// console.log(`Sum of the array [${numbersArray}]: ${totalSum}`);


// 8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
// function filterEvenNumbers(numbers) {
//     // Use the filter method to return only even numbers
//     return numbers.filter(number => number % 2 === 0);
// }

// // Example usage:
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = filterEvenNumbers(numbersArray);
// console.log(`Even numbers in the array [${numbersArray}]: [${evenNumbers}]`);


// 9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.
// function findSmallestElement(numbers) {
//     // Return undefined if the array is empty
//     if (numbers.length === 0) {
//         return undefined;
//     }

//     // Use Math.min with the spread operator to find the smallest element
//     return Math.min(...numbers);
// }

// // Example usage:
// const numbersArray = [34, -5, 23, 0, 89, -1, 8];
// const smallestElement = findSmallestElement(numbersArray);
// console.log(`Smallest element in the array [${numbersArray}]: ${smallestElement}`);

// 10: Create a function `reverseString` that takes a string and returns the string reversed.
// function reverseString(str) {
//     // Split the string into an array of characters, reverse the array, and join it back into a string
//     return str.split('').reverse().join('');
// }

// // Example usage:
// const inputString = "Hello, World!";
// const reversedString = reverseString(inputString);
// console.log(`Reversed string of "${inputString}": "${reversedString}"`);

// 11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.
// function fibonacci(n) {
//     // Handle the base cases
//     if (n <= 0) return 0;
//     if (n === 1) return 1;

//     // Initialize the first two Fibonacci numbers
//     let a = 0, b = 1, fib;

//     // Compute the Fibonacci numbers iteratively up to the nth number
//     for (let i = 2; i <= n; i++) {
//         fib = a + b;
//         a = b;
//         b = fib;
//     }

//     return fib;
// }

// // Example usage:
// const n = 3
// const fibNumber = fibonacci(n);
// console.log(`The ${n}th Fibonacci number is: ${fibNumber}`);



// 12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.
// function removeDuplicates(array) {
//     // Use a Set to remove duplicates and convert it back to an array
//     return [...new Set(array)];
// }

// // Example usage:
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 5];
// const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
// console.log(`Array with duplicates removed: [${arrayWithoutDuplicates}]`);

// 13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.
// function countOccurrences(str, char) {
//     // Use the split method to count occurrences of the character
//     return str.split(char).length - 1;
// }

// // Example usage:
// const inputString = "hello world";
// const character = "l";
// const occurrences = countOccurrences(inputString, character);
// console.log(`The character "${character}" appears ${occurrences} times in the string "${inputString}".`);

// 14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.
// function findCommonElements(arr1, arr2) {
//     // Use the filter method to find common elements
//     return arr1.filter(element => arr2.includes(element));
// }

// // Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// const commonElements = findCommonElements(array1, array2);
// console.log(`Common elements between the arrays: [${commonElements}]`);


// 15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(strings) {
    // Use the sort method to sort the array of strings alphabetically
    return strings.slice().sort();
}

// Example usage:
const stringArray = ["banana", "apple", "cherry", "date"];
const sortedArray = sortStrings(stringArray);
console.log(`Sorted array: [${sortedArray}]`);

