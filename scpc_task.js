//! Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseText = (text) => {
  const arr = text.split("");
  let x = [];
  for (let index = arr.length - 1; index > -1; index--) {
    x.push(arr[index]);
  }
  return x.join("");
};
console.log(reverseText("Hello World"));

//! Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumbers = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    if (number > -1) sum += number;
  }
  return sum;
};
console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));

//! Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findMostFrequentElement = (arr) => {
  const frequency = {};

  arr.forEach((element) => {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  });
  let mostFrequentElement;
  let highestFrequency = 0;

  for (const element in frequency) {
    if (frequency[element] > highestFrequency) {
      mostFrequentElement = element;
      highestFrequency = frequency[element];
    }
  }
  return mostFrequentElement;
};
console.log(
  "Most frequent element:",
  findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])
);

//! Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbersSum = (sortedArray, target) => {
  const length = sortedArray.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const sum = sortedArray[i] + sortedArray[j];
      if (sum === target) {
        return [i, j];
      }
      if (sum > target) {
        break;
      }
    }
  }
  return [];
};
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

const result = findTwoNumbersSum(inputArray, targetValue);
console.log(result);

//! Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculate = (num1, num2, operator) => {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Cannot divide by zero!";
    }
    return num1 / num2;
  } else {
    return "Invalid operator. Please use one of '+', '-', '*', or '/'.";
  }
};
console.log(calculate(5, 2, "+"));
console.log(calculate(5, 2, "-"));
console.log(calculate(5, 2, "*"));
console.log(calculate(5, 2, "/"));
console.log(calculate(5, 0, "/"));
console.log(calculate(5, 2, "%"));

//! Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
  const allCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    if (i < 4) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    } else if (i === 4) {
      const randomIndex = Math.floor(Math.random() * uppercaseLetters.length);
      password += uppercaseLetters.charAt(randomIndex);
    } else if (i === 5) {
      const randomIndex = Math.floor(Math.random() * lowercaseLetters.length);
      password += lowercaseLetters.charAt(randomIndex);
    } else if (i === 6) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      password += numbers.charAt(randomIndex);
    } else if (i === 7) {
      const randomIndex = Math.floor(Math.random() * specialCharacters.length);
      password += specialCharacters.charAt(randomIndex);
    }
  }

  return password;
};

const passwordLength = 8;
console.log(generateRandomPassword(passwordLength));

//! Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanNumeral) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentNumeral = romanNumerals[romanNumeral[i]];
    const nextNumeral = romanNumerals[romanNumeral[i + 1]];

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++;
    } else {
      result += currentNumeral;
    }
  }

  return result;
};
console.log(romanToInt("XLII"));

//! Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallNumber = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[1];
};
console.log(findSecondSmallNumber([1, 6, 8, 10, 12, 3, 5, 2, 0]));
