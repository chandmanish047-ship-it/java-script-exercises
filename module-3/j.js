// 1. Write the even function which returns a new array with even numbers
function even(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

// 2. Hardcode the original array
const originalArray = [2, 7, 4, 9, 12, 15];

// 3. Call the function and store the returned array
const filteredArray = even(originalArray);

// 4. Print both the original array and the new array to the console
console.log("Original array:", originalArray);
console.log("Even numbers array:", filteredArray);