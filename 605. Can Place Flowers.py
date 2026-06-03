class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        canAdd = 0

        for i in range(len(flowerbed)):
            left = flowerbed[i - 1] if i > 0 else 0
            right = flowerbed[i + 1] if i < len(flowerbed) - 1 else 0

            if left == 0 and flowerbed[i] == 0 and right == 0:
                flowerbed[i] = 1
                canAdd += 1

        return n <= canAdd
        