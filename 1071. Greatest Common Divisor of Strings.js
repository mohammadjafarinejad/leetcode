// https://leetcode.com/problems/greatest-common-divisor-of-strings

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  return str1.slice(0, gcd(str1.length, str2.length));
};
