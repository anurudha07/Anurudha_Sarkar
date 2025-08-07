function getMultipleCounts(arr) {
  const counts = {};
  for (let d = 1; d <= 9; d++) {
    counts[d] = 0;
  }

  for (const num of arr) {
    for (let d = 1; d <= 9; d++) {
      if (num % d === 0) {
        counts[d]++;
      }
    }
  }
  return counts;
}

// Sample Inputs ---->
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(getMultipleCounts(input));
//   {
//      1: 11,
//      2: 8,
//      3: 4,
//      4: 4,
//      ...

//    }
