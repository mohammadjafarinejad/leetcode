# https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandy = max(candies)
        return list(map(lambda candy: candy + extraCandies >= maxCandy, candies))
        