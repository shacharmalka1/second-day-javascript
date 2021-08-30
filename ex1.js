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

document.write(Range(grades));
