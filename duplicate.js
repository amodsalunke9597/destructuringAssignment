function removeDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    return [...uniqueNumbers];
  }

  
  let n = [1,2,2,3,3,4,5,6];
  console.log(removeDuplicates(n));