/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let num3 = []
    for (let i = 0; i < n; i++) {
        num3.push(nums1[i]);
    }
    for (let i = 0; i < m; i++) {
        num3.push(nums2[i]);
    }
    num3.sort(function (a,b){
        return a-b;
    })
    console.log(num3)
    let median;
    let l = num3.length;
    // console.log(l);
    // console.log(num3[2])
    
    let k=Math.floor(l/2);
    // console.log(Math.floor(k))
    if (l & 1) {
        median = num3[(k-1)/2];
        // console.log(median);
    }
    else{
        median = (num3[k] + num3[k-1]) / 2;
        // console.log(median);
    }
    return median;
    
};

nums1 = [1,3]
nums2 =[2]
console.log(findMedianSortedArrays(nums1, nums2))
// console.log(Math.floor(2))