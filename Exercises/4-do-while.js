'use strict';

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let result = 0;
  let i = 0;
  do {
    result += args[i] || 0;
    i++;
  } while (i < args.length);
  return result;
};

module.exports = { sum };
