/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  let arrLength = arr1.length;
  if (arrLength !== arr2.length) return false;
  const arr1Obj = {};

  // convert received arr1 to obj
  for (let i=0; i < arrLength; i++) {
    let key = arr1[i];
    arr1Obj[key] = true;
  }

  // find equal elements and exclude them from the following find
  for (let i = 0; i < arrLength; i++) {
    let key = arr2[i];

    if (arr1Obj[key]) {
      arr1Obj[key] = false;
    } else {
      return false;
    }
  }
  return true;
}

export default haveSameItems;
