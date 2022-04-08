const inputArr = [
  {
    a: 1,
    b: 2,
  },
  {
    c: 3,
    d: 4,
  },
];
console.log(inputArr.reduce((r, c) => Object.assign(r, c), {}));

//   Output:
//   {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
//   }
