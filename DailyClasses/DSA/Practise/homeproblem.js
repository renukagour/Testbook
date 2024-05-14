function findOneFrequencyElement(A, ar_size) {
    for (let i = 0; i < ar_size; i++) {
        let count = 0;
        for (let j = 0; j < ar_size; j++) {
            if (A[i] == A[j]) {
                count++;
            }
        }
        if (count == 1) {
            return A[i];
        }
    }
    // if no element exist at most once
    return -1;
}
let ar = [5, 3, 5, 4, 2, 4, 3];
let n = 7;
console.log("Single Frquency Element In This Array "
    + findOneFrequencyElement(ar, n));