function medianOfArray(array) {
    var length = array.length;
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)];
    } else {
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}
function medianOfTwoSortedArray(arr1, arr2, pos) {
    if (pos <= 0) {
        return -1;
    }
    if (pos == 1) {
        return (arr1[0] + arr2[0]) / 2;
    }
    if (pos == 2) {
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1],
            arr2[1])) / 2;
    }
    var median1 = medianOfArray(arr1),
        median2 = medianOfArray(arr2);
    if (median1 == median2) {
        return median1;
    }
    var evenOffset = pos % 2 == 0 ? 1 : 0,
        offsetMinus = Math.floor(pos / 2) - evenOffset,
   
    offsetPlus = Math.floor(pos / 2) + evenOffset;
    if (median1 < median2) {
        return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.
            slice(offsetMinus), offsetPlus);
    } else {
        return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.
            slice(offsetMinus), offsetPlus);
    }
}
console.log(medianOfTwoSortedArray([7, 8, 9], [1, 2, 3], 3)); // 5