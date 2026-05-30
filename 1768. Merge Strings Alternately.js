// https://leetcode.com/problems/merge-strings-alternately/description

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  if (word1.length === 0) return word2;
  if (word2.length === 0) return word1;

  const res = [];
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) res.push(word1[i]);
    if (i < word2.length) res.push(word2[i]);
  }

  return res.join("");
};
