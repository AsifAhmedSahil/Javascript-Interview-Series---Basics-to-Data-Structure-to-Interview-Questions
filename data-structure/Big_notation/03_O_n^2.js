// ! O(n^2) examples == loop into the loop = nested loops

// * O(n^2 + n) == O(n^2)

const numbers = [1, 2, 3, 4, 5];

const getPairs = (arr) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(`pair: ${arr[i]}, ${arr[j]}`);
    }
  }
};

console.log(getPairs(numbers));
