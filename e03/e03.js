/**
 * A string containing all the letters of the SOS message.
 */
const SOS_LETTERS = 'SO';

/**
 * Find the number of altered letters in the given str.
 *
 * @param str - The given string
 * @returns The number of altered letters
 */
const marsos = (str) => {

    if(!str || str === '')
        return 0;

    let alteredLetters = 0;

    for(let i = 0; i < str.length; i++) {

        const char = str[i];

        // If the char is not in the SOS_LETTERS, we encountered
        // a altered letter.
        if(!containsSOSLetters(char))
            alteredLetters++;
    }

    return alteredLetters;
}

/**
 * Check if the given char is a letter of the SOS_LETTERS.
 * @see SOS_LETTERS
 *
 * @param char - The char to check
 * @returns True if the given char is in the SOS_LETTERS
 */
const containsSOSLetters = (char) => {

    for(let sosChar of SOS_LETTERS) {

        if(char === sosChar)
            return true;
    }

    return false;
}

module.exports = marsos;