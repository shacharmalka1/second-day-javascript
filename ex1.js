//document.write("jnjjjj");
function Range(arr) {
  var min = arr[1],
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max - min;
}

function Median(arr) {
  arr.sort();
  if (arr.length % 2 == 0) {
    var average;
    average = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    return average;
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
}

const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]; //56,62,73,84,88,88,91,92,95,96
//document.write(Range(grades));

document.write(Median(grades));
