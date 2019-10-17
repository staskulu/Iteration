'use strict';
// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9
const max = matrix => {
  const arr1 = matrix;
  let max = matrix[0][0];
  for (let i = 0; i < arr1.length; i++) {
    const arr2 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] > max) max = arr2[j];
    }
  }
  return max;
};

module.exports = { max };
