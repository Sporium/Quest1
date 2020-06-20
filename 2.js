// 2) Реализовать функцию сортировки пузырьком

function bubbleSort(arr) {
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    var wasSwap = false;
    for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        var swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
}

bubbleSort([1, 5, 3, 9]);
