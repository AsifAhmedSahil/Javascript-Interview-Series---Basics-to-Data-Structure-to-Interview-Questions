// * this is not the better solution, make it better in upcoming code
// *update

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(twoSum([3, 6, 7, 2], 9));
