// Function to check if a number is a happy number
// Function to check if a number is a happy number
function happy_number(num) {
    var m, n;
    var c = [];

    // Continue loop until the number becomes 1 or enters a cycle
    while (num !== 1 && c[num] !== true) {
        c[num] = true; // Mark the current number as visited
        m = 0;

        // Calculate the sum of the squares of digits
        while (num > 0) {
            n = num % 10; // Extract the last digit
            m += n * n; // Add the square of the digit to the sum
            num = (num - n) / 10; // Remove the last digit
        }

        num = m; // Update num to continue the process
    }

    return (num === 1); // Return true if num is 1 (a happy number), false otherwise
}


// Variables to track the count and current number
var cnt = 5; // Counter to keep track of how many happy numbers we've found
var num = 1; // Start searching from number 1
var f5 = ''; // Store the first 5 happy numbers as a string

// Find the first 5 happy numbers
while (cnt-- > 0) { // Loop until we find 5 happy numbers
    while (!happy_number(num)) // Keep searching for happy numbers
        num++; // Move to the next number if the current one isn't happy

    f5 = f5 + (num + ", "); // Append the happy number to the result string
    num++; // Move to the next number to continue searching
}
console.log('First 5 happy numbers are: ' + f5); // Print the first 5 happy numbers


