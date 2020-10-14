/**
 * A string containing all the letters of the alphabet.
 */
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Check weather or not the given string is a pangram, and return
 * true or false based on the result.
 *
 * @param str - The given string
 * @returns True if str is a pangram
 */
const isAPangrams = (str) => {

    if(!str || str === '')
        return false;

    // An key-value array containing a char in
    // key and the number of occurrences in value.
    const letters = [];

    for(let i = 0; i < str.length; i++) {

        const char = str[i].toLowerCase();

        // If the char is not in the array, set the number
        // of occurrences to 1; else increment it by 1.
        if(!letters[char])
            letters[char] = 1;
        else
            letters[char] = letters[char] + 1;
    }

    return containsAlphabet(letters);
}

/**
 * Check if the given letters contains all the letters of the alphabet or not.
 *
 * @param letters - The letters to check
 * @returns True if the given letters contains all the alphabet
 */
const containsAlphabet = (letters) => {

    for(let char of ALPHABET) {

        // If the array of letters does not contains the
        // current alphabet char, return false.
        if(!letters[char])
            return false;
    }

    return true;
}

module.exports = isAPangrams;