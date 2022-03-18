function getArr() {
  let input = prompt("Enter array elements separated by comma");
  let inputArr = input.split(",");
  let arr = [];
  for (let i = 0; i < inputArr.length; i++) {
    arr.push(parseInt(inputArr[i]));
  }
  return arr;
}

function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function getMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function main() {
  let arr = getArr();
  let max = getMax(arr);
  let min = getMin(arr);
  console.log(`Maximum is ${max} and minimum is ${min}`);
}

main();
