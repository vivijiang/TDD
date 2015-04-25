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
    var factor;
    while (number > 1) {
        factor = 2;
        if (number % factor === 0) {
            result.push(factor);
            number = number / factor;
        } 
    }
    return result;
};

module.exports = Prime;
