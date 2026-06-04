/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const positions = [];
  const arr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      positions.push(i);
    }
  }

  for (let c = 0; c < Math.floor(positions.length / 2); c++) {
    const left = positions[c];
    const right = positions[positions.length - 1 - c];

    [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  return arr.join("");
};
