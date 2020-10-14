/**
 * 03 - Marsos
 *
 * Create a function called marsos that will take in one string str as input.
 * A spaceship is sent to Mars but crashes. It sends a series of “SOS” messages
 * to Earth for help. Due to cosmic radiation, some of the “SOS” messages were
 * altered during transmission. The goal of the function is to determine how many
 * letters were altered during transmission. Example:
 *
 * "SOFSOSSISSOW"
 * The function will return 3.
 *
 * @author Tom Lienard - QuiiBz
 */

const marsos = require('./e03');

// Test the algorithm
console.log(marsos('SOFSOSSISSOW'));