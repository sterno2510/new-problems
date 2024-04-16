/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let storageContainer = {};
  let maxEvenValue = 0;
  for (const num of arr) {
    if (num in storageContainer) {
      storageContainer[num] += 1;
    } else {
        storageContainer[num] = 1;
    }
  }
for (const num of arr) {
    if(storageContainer[num] % 2 === 0) {
        return num;
    }
}
    return null;
};



const test = (description, input, expected) => {
  const result = evenOccurrence(input);
  if (result === expected) {
    return `${description} Tests passed`;
  } else {
    return  `${description} tests failed, expected ${expected}, but received ${result}`;
  }
}

test("Empty array", [], null);
test("No even occurrence", [1, 3, 5, 7], null);
test("Single even occurrence", [1, 2, 3, 4, 5, 6, 7, 8], null);
test("Multiple even occurrences", [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4], 1);
test("Multiple occurrences", [1, 1, 2, 3, 4, 4, 5, 5], 1);
test("Multiple occurrences", [1, 1, 2, 3, 4, 4, 5, 5, 4], 1);
test("Multiple occurrences", [1, 2, 3, 4, 4, 5, 5, 4], 5);
