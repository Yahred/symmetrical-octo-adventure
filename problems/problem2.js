/**
 * Function that return the index of a pair of numbers that sum
 * the target number
 * 
 * TimeComplexity: 0(n^2)
 * SpaceComplexity: O(n)
 * 
 * Explanation:
 *  We use a nested for loop to iterate the list of numbers in search
 *  of a pair that his sum matches the target number;
 * 
 *  We start by looping over nums with i and then start another loop
 *  with j = i + 1, now we can check if the sum of nums[i] and nums[j] is equal
 *  to the target number, if the sum is equal to the target number we return a
 *  list like this [i, j]
 * 
 *  If a pair that sums to target is not found we return an empty list
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */
function solve(nums, target) {
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1 ){
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];    
}


module.exports = solve;