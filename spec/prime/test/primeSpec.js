describe("Prime", function() {

    var Prime = require('../src/Prime');
    it('should return [1]', function() {
        var sourceNumber = 1;
        var result = Prime.getPrime(sourceNumber);
        console.log(result);
        expect(result).toEqual([1]);
    })


});
