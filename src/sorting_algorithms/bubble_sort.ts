/**
 * Сортировка пузырьком - O(n^2)
 *
 * Пузырьковая сортировка — один из самых медленных алгоритмов сортировки, но при этом один из самых простых в реализации.
 *
 * Сортировка пузырьком получила свое название, потому что когда данные сортируются с помощью алгоритма, значения плавают, как пузырь, от одного конца массива к другому.
 * Если вы сортируете набор чисел в порядке возрастания, большие значения плавают справа от массива, а меньшие значения плавают слева.
 * Такое поведение является результатом того, что алгоритм проходит по массиву много раз, сравнивая соседние значения и меняя их местами, если значение слева больше, чем значение справа.
 */
export function bubbleSort(originArray: readonly number[]): number[] {
  // Создаем копию входного массива, чтобы избежать изменения исходного
  const array = [...originArray];

  // Внешний цикл: проходит через каждый элемент массива
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false; // Флаг для проверки перестановок

    // Внутренний цикл: сравнивает соседние элементы
    for (let j = 0; j < array.length - i - 1; j++) {
      // Меняем местами, если текущий элемент больше следующего
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true; // Отмечаем, что произошла перестановка
      }
    }

    // Если перестановок не было, массив уже отсортирован
    if (!swapped) {
      break;
    }
  }

  return array;
}
