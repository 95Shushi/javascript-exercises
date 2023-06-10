const removeFromArray = function(array, ...values) {
    for (const value of values) {
        index = array.indexOf(value)
        if (index >= 0) {
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
