// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxCandy = 0;

  candies.map((candy) => {
    if (candy > maxCandy) maxCandy = candy;
    return candy + extraCandies;
  });

  return candies.map((candy) => candy >= maxCandy);
};
