var Prime = {};
Prime.isPrime = function(inputNumber) {
    /* body... */
};
Prime.getPrime = function(inputNumber) {
    var result = [];
    if (inputNumber === 1 || inputNumber === 3) {
        result.push(inputNumber);
        return result;
    }

    var number = inputNumber;
    while (number > 1) {
        if (number % 2 === 0) {
            result.push(2);
            number = number / 2;
        } else if (number % 3 === 0) {
            result.push(3);
            number = number / 3;
        }
    }
    return result;
};

module.exports = Prime;
