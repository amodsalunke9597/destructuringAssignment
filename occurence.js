function countWords(str) {
    const words = str.toLowerCase().split(' ');
    const wordCounts = {};
  
    for (const word of words) {
      if (word in wordCounts) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  
    return wordCounts;
  }

  const text = "This is a test sentence. It contains several several words, some of which are repeated.";

const wordCounts = countWords(text);

for (const [word, count] of Object.entries(wordCounts)) {
  console.log(`${word}: ${count}`);
}
