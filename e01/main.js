/**
 * EO1 - HowManyCamelCase
 *
 * Create a function called howManyCamelCase that will take one string input str.
 * We are given a sequence of words that are sandwiched together with no space.
 * With the exception of the first word, in all of the subsequent words, the first
 * letter of each word is capitalized. The goal of the function is to output the number
 * of words that are in the camelcase string. Let’s use an example.
 *
 * @author Tom Lienard - QuiiBz
 */

const howManyCamelCase = require('./e01');

// Test the algorithm
console.log(howManyCamelCase('withTheExceptionOfTheFirstWord'));