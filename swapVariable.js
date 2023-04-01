function swapValues(x, y) {
    // Destructure the input variables into an array
    [x, y] = [y, x];
    // Return an array with the swapped values
    return [x, y];
  }
  
  // Example usage
  let x = 5;
  let y = 10;
  [x, y] = swapValues(x, y);
  console.log(x, y); // Output: 10 5
  