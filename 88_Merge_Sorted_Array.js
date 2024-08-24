/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */



var merge = function(nums1, m, nums2, n) {

    let a = m - 1;
    let b = n - 1;

    // Starting from the end of the nonzero values in array1
    for (let i = m+n-1; i >= 0; i--) {

        // When there are no more values in array2, break
        if (b < 0) {
            break;
        }
        
        // If the number in array1 is larger than the number in array2, the number from array1 is added at position i, a is decremented
        if (nums1[a] > nums2[b]) {
            nums1[i] = nums1[a];
            a--;
            
        // If the number in array2 is larger than the number in array1, the number from array2 is added at position i,  b is decremented   
        } else {
            nums1[i] = nums2[b];
            b--;
        }

    }

}