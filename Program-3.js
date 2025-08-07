function Series(a) {
  const count = (a % 2 === 0) ? a - 1 : a;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Sample Inputs ---->
console.log( Series(1).join(', ') ); // 1
console.log( Series(2).join(', ') ); // 1
console.log( Series(3).join(', ') ); // 1, 3, 5
console.log( Series(4).join(', ') ); // 1, 3, 5

