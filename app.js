function findPossibleMoves(mat, p, q) {
  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];
  let count = 0;
  for (let i = 0; i < 8; i++) {
    let x = p + X[i];
    let y = q + Y[i];
    if (x >= 0 && y >= 0 && x < 8 && y < 8) {
      console.log("The Knight can move to: " + mat[x][y]);
      count++; //
    }
  }
  return count;
}

let mat = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64],
];
console.log("Chess Positions are shown below:");
for (let i = 0; i < 8; i++) {
  let text = "";
  for (let j = 0; j < 8; j++) {
    text += mat[i][j] + " ";
  }
  console.log(text);
}

let p = 4,
  q = 4;
console.log("First Index: " + p);
console.log("Second Index: " + q);
let count = findPossibleMoves(mat, p, q);
console.log("Count: " + count);
