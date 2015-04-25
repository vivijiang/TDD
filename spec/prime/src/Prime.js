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
    var factor = 2;
    while (number > 1) {

        if (number % factor === 0) {
            result.push(factor);
            number = number / factor;
        } else {
            factor += 1;
        }
    }
    return result;
};

module.exports = Prime;
