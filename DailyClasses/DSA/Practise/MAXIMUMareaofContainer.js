var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
    H[i] <= H[j] ? i++ : j--
    }
    return ans
    };
    console.log("Maximum Area In The Container Filled With Water Is",maxArea([1,8,6,2,5,4,8,3,7]));
     // Maximum Area In The Container Filled With Water Is 49
    