/**
 * The start and end index of the uppercase letters in the ASCII table.
 *
 * @see http://www.asciitable.com/
 */
const ASCII_UPPER_START = 65;
const ASCII_UPPER_END = 90;

/**
 * Calculate the number of camel cases in the given string, and return it.
 *
 * @param str - The given string
 * @returns The number of camel case words in the given str
 */
const howManyCamelCase = (str) => {

    let camelCases = 1;

    for(let char of str) {

        if(isCharUppercase(char))
            camelCases++;
    }

    return camelCases;
}

/**
 * Check if the given char is uppercase or not.
 *
 * @param char - The char to check
 * @returns True if the given char is uppercase
 */
const isCharUppercase = (char) => {

    const charCode = char.charCodeAt(0);

    return (charCode >= ASCII_UPPER_START && charCode <= ASCII_UPPER_END);
}

module.exports = howManyCamelCase;