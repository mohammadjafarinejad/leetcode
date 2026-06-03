/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let canAdd = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const left = flowerbed[i - 1] ?? 0;
    const right = flowerbed[i + 1] ?? 0;

    if (flowerbed[i] === 0 && left === 0 && right === 0) {
      flowerbed[i] = 1;
      canAdd++;
    }
  }

  return n <= canAdd;
};
