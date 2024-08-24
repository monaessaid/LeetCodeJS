/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


let nums = [3,2,2,3];
let val = 3;

var removeElement = function(nums, val) {

    for(let i = 0; i <= nums.length, i++;){
        if (nums[i] === val) {
            nums[i] = 101;
        }
    }

    return nums;
    
};

console.log(removeElement(nums, val)); 