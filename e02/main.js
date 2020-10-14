/**
 * EO2 - Panagram
 *
 * Create a function called IsAPangrams that will take one string, str as input.
 * A pangram is a sentence that contains every letter of the alphabet. The goal
 * of this function is to determine if the sentence given is a pangram or not.
 * If it is not a pangram, the function will return false. If it is a pangram,
 * the function will return true. Here is an example:
 *
 * "The quick brown fox jumps over the lazy dog"
 * In the example above,the function will return true.
 *
 * "Hello Efrei"
 * In the example above,the function will return false.
 *
 * @author Tom Lienard - QuiiBz
 */

const isAPangrams = require('./e02');

// Test the algorithm
console.log(isAPangrams('The quick brown fox jumps over the lazy dog'));
console.log(isAPangrams('Hello Efrei'));