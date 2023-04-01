function extractElements(arr) {
    // Destructure the first, second, and last elements of the array
    const [first, second, , , last] = arr;
    // Return an array with the extracted elements
    return [first, second, last];
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const extractedElements = extractElements(arr);
  console.log(extractedElements); // Output: [1, 2, 5]
  