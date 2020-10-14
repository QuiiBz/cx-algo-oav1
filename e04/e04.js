/**
 * Count the number of elements in the given array.
 *
 * @param array - The array to use
 * @returns The number of elements in this array
 */
const count = (array) => {

    let count = 0;

    for(let i in array)
        count++;

    return count;
}

/**
 * Calculate the average of the given array.
 *
 * @param array - The array to use
 * @returns The average of the given array
 */
const average = (array) => {

    let arrayElements = count(array);
    let total = 0;

    for(let element of array)
        total += element;

    return (total / arrayElements);
}

/**
 * Calculate the minimum value of the given array.
 *
 * @param array - The array to use
 * @returns The minimum value of the given array
 */
const min = (array) => {

    let min = array[0];

    for(let element of array) {

        if(element < min)
            min = element;
    }

    return min;
}

/**
 * Calculate the maximum value of the given array.
 *
 * @param array - The array to use
 * @returns The maximum value of the given array
 */
const max = (array) => {

    let max = array[0];

    for(let element of array) {

        if(element > max)
            max = element;
    }

    return max;
}

/**
 * Shift the first element of the given array
 * and return back a copy.
 *
 * @param array - The array to use
 * @returns A copy of the shifted array
 */
const shift = (array) => {

    let shifted = [];

    for(let i = 0; i < count(array); i++) {

        const element = array[i];

        if(i !== 0)
            shifted[i - 1] = element;
    }

    return shifted;
}

/**
 * Calculate the highest diff in the given array and return it.
 *
 * @param array - The array to use
 * @returns The highest diff of this array
 */
const diff = (array) => {

    const minElement = min(array);
    const maxElement = max(array);

    return maxElement - minElement;
}

module.exports = { count, average, min, max, shift, diff };