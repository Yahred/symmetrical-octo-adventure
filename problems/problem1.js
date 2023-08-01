/**
 * Function that returns the numbers that not appear in the array that are in
 * the range from 1 to array.length
 * 
 * TimeComplexity: 0(n^2)
 * SpaceComplexity: O(n)
 * 
 * Explanation:
 *  We initialize an empty list called dontAppear,
 *  we gonna use that list to save the numbers in the range of 1 to nums.length
 *  that dont show in nums, then we loop over nums and ask if i is present in nums
 *  if not present we add i to the list dontAppear, once the loop is over we return 
 *  dontAppear.
 * 
 * @param {number[]} nums 
 */
function solveProblem1(nums) {
    const dontAppear = [];

    for (let i = 1; i <= nums.length; i += 1) {
        if (!nums.includes(i)) dontAppear.push(i); 
    }

    return dontAppear;
}


module.exports = solveProblem1