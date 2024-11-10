function removeDuplicates(arr) {
  let uniqueArr = [];

  for (let i = 0; i <= arr.length-1; i++) {
    let isDuplicate = false;
    for (let j = 0; j <= uniqueArr.length-1; j++) {
      if (arr[i] == uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
