/*
    CIT 281 Project 2
    Name: Keita Bacon
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
    getRandomLetter()
}
console.log(result);
// get a random number from 1-26 and get it from alphabet and console.log it
function getRandomLetter() {
    console.log( alphabet[getRandomInteger(1,alphabet.length-1)])
    return  alphabet[getRandomInteger(1,alphabet.length-1)]
}
// console.logs a random collection of 10-20 lower case letters
function getRandomString(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter()
    }
    return result
}
console.log(getRandomString(10,21))
// sorts the string alphabetically
function getSortedString(string){
return Array.from(string).sort().join('')
}
console.log(getSortedString("kshdbkasjdhfbasaaaaa"))
