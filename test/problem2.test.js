const problem2 = require('../problems/problem2')

describe('Problem 2 Test', () => {
    it('Should be [0,1]', () => {
        const input = [2,7,11,15]
        const target = 9;
        const output = problem2(input, target);
        expect(output.sort()).toEqual([0,1])
    })

    it('Should be [1,2]', () => {
        const input = [3,2,4]
        const target = 6;
        const output = problem2(input, target);
        expect(output.sort()).toEqual([1, 2])
    })

    it('Should be [0,1]', () => {
        const input = [3,3]
        const target = 6;
        const output = problem2(input, target);
        expect(output.sort()).toEqual([0, 1])
    })
})