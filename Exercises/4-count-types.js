'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = arr => {
  const counter = {};

  for (const element of arr) {
      const type = typeof element;
      counter[type] ? counter[type]++ : counter[type] = 1;
  }
  return counter;
};

module.exports = { countTypesInArray };
