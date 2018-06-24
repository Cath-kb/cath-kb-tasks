/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  const result = [[]];

  if (n < 1) return null;
  let size = n;
  let startValue = 1;
  let shift = 0;
  let x = 0;
  let y = 0;
  generateEmptyArray(result, size);

  fillMatrixLayer();

  function fillMatrixLayer() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        x = i + shift;
        y = j + shift;
        if (i === 0 && (j < size - 1 || size <= 1)) {
          // first row of the current layer
          result[x][y] = startValue + j;
        }
        if (i < size - 1 && j === size - 1) {
          // right column of the current square
          result[x][y] = startValue + (size - 1) + i;
        }
        if (i === size - 1 && j > 0) {
          // last row of the current square
          result[x][y] = startValue + ((size - 1) * 3) - j;
        }
        if (i > 0 && j === 0) {
          // left row of the current square
          result[size - i + shift][y] = startValue + ((size - 1) * 3) + i - 1;
        }
      }
    }

    startValue += (size - 1) * 4;
    shift++;
    size -= 2;
    if (shift > n / 2 + 1 && size < 0) return;
    fillMatrixLayer();
  }

  function generateEmptyArray(arr, n) {
    for (let i = 0; i < n; i++) {
      arr[i] = [];
      for (let j = 0; j < n; j++) {
        arr[i][j] = null;
      }
    }
  }

  return result;
}

export default fillSpiralMatrix;
