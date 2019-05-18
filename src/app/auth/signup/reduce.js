const numbers = [1, 2, 3];

const getSum = (total, num) => {
  return total + num;
}

const reduced = numbers.reduce(
  (total, curval) => {
    console.log(curval);
    return total + curval;
  }
);

console.log(reduced);


// use reduce to flatten nested array

const nested = [
  [1, 2, 3, ],
  [4, 5, 6],
  [7, 8, 9]
];

const flatten = nested.reduce((prev, cur) => {
  return prev.concat(cur)
}, []); // the last [] is initial for holding result

console.log(flatten);
