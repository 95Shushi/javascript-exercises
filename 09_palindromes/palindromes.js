const palindromes = function (string) {
    let array = string.toLowerCase().replaceAll(/[., !]/g, "").split("");
    let reverseArray = string.toLowerCase().replaceAll(/[., !]/g, "").split("").reverse();
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== reverseArray[i]) {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
