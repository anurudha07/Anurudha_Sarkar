function generateOddSeries(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Sample Inputs ----->
console.log( generateOddSeries(1).join(', ') ); // 1
console.log( generateOddSeries(2).join(', ') ); // 1, 3
console.log( generateOddSeries(3).join(', ') ); // 1, 3, 5
