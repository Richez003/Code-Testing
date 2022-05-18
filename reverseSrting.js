function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse("");
    let joinArray = reverseArray.join("");
    return joinArray;
}

module.exports = reverseString