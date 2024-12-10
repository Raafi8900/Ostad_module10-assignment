//  Function to calculate the difference between two arguments
function calculateDifference(first, second) {
    return first - second;
}
const num1 = 10;
const num2 = 5;
console.log("The difference is:", calculateDifference(num1, num2));



//  Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(3)); 
console.log(isOdd(4));



// Function to find the smallest number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}
const nums = [5, 3, 8, 1, 2];
console.log("The smallest number is:", findMin(nums)); 



// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
const nums = [5, 3, 8, 1, 2, 10];
console.log("Even numbers:", filterEvenNumbers(nums));



//Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}
const nums = [5, 3, 8, 1, 2, 10];
console.log("Array sorted in descending order:", sortArrayDescending(nums)); 




// Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Amazon"));
console.log(lowercaseFirstLetter("Bangladesh"));




// Function to find the average of an array of numbers
function findAverage(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}
const nums = [5, 3, 8, 1, 2];
console.log("The average is:", findAverage(nums));



//Function to check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2024));
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 
