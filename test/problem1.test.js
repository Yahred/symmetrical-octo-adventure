const problem1 = require('../problems/problem1')

describe('Problem 1 Test', () => {
    it('Should be [5,6]', () => {
        const input = [4,3,2,7,8,2,3,1];
        const output = problem1(input);
        expect(output.sort()).toEqual([5,6])
    })

    it('Should be [2]', () => {
        const input = [1,1];
        const output = problem1(input);
        expect(output.sort()).toEqual([2])
    })
    
})