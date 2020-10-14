/**
 * 04 - Hello, Array
 *
 * 4.1 - Count
 * Create a function that take an array as an input and calculate the number
 * of occurrences of a given element in an array.
 *
 * 4.2 Average
 * Create a function that calculate the average of the elements of an array.
 *
 * 4.3 Min
 * Create a function that calculate the minimum of the elements of an array.
 *
 * 4.4 Max
 * Create a function that calculate the maximum of the elements of an array.
 *
 * 4.5 Max
 * Create a function that calculate the maximum of the elements of an array.
 *
 * 4.6 Shift
 * Create a function that shift the elements of an array.
 *
 * 4.7 Diff
 * Create a function that calculates the largest deviation in an array (the
 * deviation is the absolute value of the difference of two elements).
 *
 * @author Tom Lienard - QuiiBz
 */

const { count, average, min, max, shift, diff } = require('./e04');

// Test the algorithm
const testArray = [2, 5, 6, 1, 8, 3];

console.log(count(testArray));
console.log(average(testArray));
console.log(min(testArray));
console.log(max(testArray));
console.log(shift(testArray));
console.log(diff(testArray));