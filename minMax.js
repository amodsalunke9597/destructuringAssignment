function findMinMax(arr) {
    // Use the spread operator to pass the array elements as arguments to Math.max() and Math.min()
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    // Return an object with the max and min properties
    return { max, min };
  }
  
  // Example usage
  const arr = [5, 2, 7, 1, 9];
  const result = findMinMax(arr);
  console.log(result); // Output: { max: 9, min: 1 }
  