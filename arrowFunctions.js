/**
 * 1. Write the function makeDoctor, that takes a name,
 *    and returns `Dr.{Name}`
 *   makeDoctor("Omar") -> Dr.Omar
 */
function makeDoctor(name) {
  return `Dr.${name}`;
}

// console.log(makeDoctor("Omar"));
// console.log(makeDoctor("Zainab"));
// console.log(makeDoctor("Sayed"));

/**
 * 2. Write the above function using arrow function
 */

const makeKash5aDoctor = (name) => {
  return `Dr.${name}`;
};

// console.log(makeKash5aDoctor("Omar"));
// console.log(makeKash5aDoctor("Zainab"));
// console.log(makeKash5aDoctor("Sayed"));

/**
 * 3. Write the above function without the brackets
 */

const makeSuperKash5aDoctor = (name) => `Dr.${name}`;

// console.log(makeSuperKash5aDoctor("Omar"));
// console.log(makeSuperKash5aDoctor("Zainab"));
// console.log(makeSuperKash5aDoctor("Sayed"));

/** Iteration methods
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/** 4. forEach
 * Write a function printArray that takes and array, and prints every single element of an array
 * starting with `# `
 */
/**
 *
 * Explain that they can do anything they want with printArray method
 */
const printArray = (array) => {
  const forEachOutput = array.forEach((element) => {
    // the function that is going ot be exectuted for each elemnt
    if (element < 10) {
      console.log(`(${element})`);
    }
  });

  console.log("For each output", forEachOutput);
};

// printArray([5, 4, 3, 8, 19, 21, 8, -4]);

/** 5. filter
 * Write a function that takes an array and a number, and it should return
 * all elements greater than n
 */

// First version . Then try to remove the `return`
const filterAboveN = (array, n) =>
  array.filter((element) => {
    return element <= n;
  });

/**
 * Refactor and make it cleaner in a single line of code
 */
// const filterAboveN = (array, n) => array.filter((element) => element <= n);

const array = [5, 4, 3, 8, 19, 21, 8, -4];
console.log(filterAboveN(array, 10));
console.log(array);

/** 6. Map
 * Write curveUp function that takes grades array, and number n,
 * and it curves the grades up by the number n
 */

const curveUp = (array, n) => {
  const newArray = array.map((element) => {
    return element + n;
  });

  console.log(newArray);
};

/**
 * Refactor and make it cleaner in a single line of code
 */
// const curveUp = (array, n) => array.map((element) => element + n);

curveUp(array, 4);
