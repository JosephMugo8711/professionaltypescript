// Function to format time, accepting both 'number' and 'string' types for hour and minute
// The parameters 'hour' and 'minute' can be either strings or numbers. We use a union type (number | string).
function whatTime(hour: number | string, minute: number | string): string {
    // Ensure both 'hour' and 'minute' are converted to strings (in case they're provided as numbers)
    // This avoids potential type mismatches during concatenation.
    return hour.toString() + ':' + minute.toString();
}

// Example usage with different combinations of numbers and strings:
console.log(whatTime(1, 30));   // '1:30' - hour is a number, minute is a number
console.log(whatTime('1', 30)); // '1:30' - hour is a string, minute is a number
console.log(whatTime(1, '30')); // '1:30' - hour is a number, minute is a string
console.log(whatTime('1', '30')); // '1:30' - both hour and minute are strings

// TS treats parameters of type 'number | string' as a union type.
// The function must account for both types and handle them accordingly, such as converting them to strings before processing.


// Function to add 10 to a number or a string representation of a number.
// The 'start' parameter can be a number or a string.
function addTen(start: number | string): number {
    // Check if 'start' is of type 'string' and convert it to a number if necessary.
    if (typeof start === 'string') {
        // Parse the string to an integer before adding 10.
        return parseInt(start) + 10;
    } else {
        // If 'start' is already a number, simply add 10.
        return start + 10;
    }
}

// Example usage of 'addTen':
console.log(addTen(20));   // 30 - 'start' is a number
console.log(addTen('20')); // 30 - 'start' is a string but will be parsed to a number

// Explanation:
// - 'addTen' handles both numeric and string inputs, ensuring that strings are converted to numbers using 'parseInt'.
// - This ensures the function works correctly regardless of whether 'start' is provided as a number or string.
