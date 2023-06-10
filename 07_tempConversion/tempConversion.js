const convertToCelsius = function (temp) {
    tempInCelcius = (temp - 32) * (5 / 9)
    return (Math.round(tempInCelcius * 10) / 10)
};

const convertToFahrenheit = function (temp) {
    tempInFahrenheit = temp * (9 / 5) + 32
    return (Math.round(tempInFahrenheit * 10) / 10)
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
