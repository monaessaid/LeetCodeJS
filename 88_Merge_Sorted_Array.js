/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */



var merge = function(nums1, m, nums2, n) {

    //Adds the items from nums2 into nums1 without sorting
    //No zeroes added from nums2 but nums1 zeroes are still there
    for (let i = 0; i < nums2.length; i++){
        if (nums2[i] > 0){
            nums1.push(nums2[i])
        }
    }

    const nums3 = nums1.filter((num) => num > 0);
    nums3.sort();

    nums1.length === 0;

    nums1.push(nums3);

}