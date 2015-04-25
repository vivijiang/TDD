describe("Prime", function() {

    var Prime = require('../src/Prime');
    it('should return [1]', function() {
        var sourceNumber = 1;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([1]);
    })


    it('should return [2]', function() {
        var sourceNumber = 2;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([2]);
    })

    it('should return [2,2]', function() {
        var sourceNumber = 4;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([2, 2]);
    })

    it('should return [5]', function() {
        var sourceNumber = 5;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([5]);
    })

});
