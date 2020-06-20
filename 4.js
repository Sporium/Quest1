// 4) Задан упорядоченный по возрастанию массив. Реализовать алгоритм бинарного
// поиска для нахождения значения в массиве. Вернуть номер элемента или уведомить
// что такого элемента нет.
function binarySearch(list, value) {
  // initial values for start, middle and end
  let start = 0;
  let stop = list.length - 1;
  let middle = Math.floor((start + stop) / 2);

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2);
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return list[middle] !== value ? 'there is no such element in array' : middle;
}

let list = [2, 5, 8, 9, 13, 45, 67, 99];
console.log(binarySearch(list, 3)); // 7 -> returns the index of the item
