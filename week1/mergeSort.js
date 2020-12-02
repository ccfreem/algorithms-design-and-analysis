// And this is gonna be a canonical Divide-and-Conquer application,
// where we simply take the input array, we split it in half, we
// solve the left half recursively, we solve the right half recursively,
// and then we combine the results.

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  const sorted = merge(mergeSort(left), mergeSort(right));
  return sorted;
}

// WHAT IS THE RUN TIME???
// at most 6n times log base 2 of n plus 6n
// 6nlog2n + 6n

const sorted = mergeSort([10, -1, 2, 5, 0, 6, 4, -5]);
console.log(sorted);
