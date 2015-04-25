describe("Player", function() {
    // var Player = require('../../lib/jasmine_examples/Player');
    // var Song = require('../../lib/jasmine_examples/Song');
    // var player;
    // var song;

    var Prime = require('../src/Prime');
    var prime = new Prime();
    it('should return [1]', function() {
        var sourceNumber = 1;
        var prime = new Prime();
        var result = prime.getPrime(sourceNumber);
        expect(result).toEqual([1]);
    })


});
