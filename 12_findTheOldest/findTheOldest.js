const findTheOldest = function(array) {
    const oldest = array.sort(function(a, b) {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        if (lastGuy < nextGuy) {
            return -1;
        } else {
            return 1;
        }
    });
    console.table(oldest);
    return oldest[oldest.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
