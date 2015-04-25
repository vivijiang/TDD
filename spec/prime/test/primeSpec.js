describe("Prime", function() {

    var Prime = require('../src/Prime');
    it('should return [1]', function() {
        var sourceNumber = 1;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([1]);
        console.log('case1:' + result);
    })


    it('should return [2]', function() {
        var sourceNumber = 2;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([2]);
        console.log('case2:' + result);
    })
    it('should return [3]', function() {
        var sourceNumber = 3;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([3]);
        console.log('case3:' + result);
    })

    it('should return [2,2]', function() {
        var sourceNumber = 4;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([2, 2]);
        console.log('case4:' + result);
    })

    it('should return [5]', function() {
        var sourceNumber = 5;
        var result = Prime.getPrime(sourceNumber);
        expect(result).toEqual([5]);
        console.log('case5:' + result);
    })

});
