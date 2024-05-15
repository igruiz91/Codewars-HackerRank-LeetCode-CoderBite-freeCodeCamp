class Solution:
  def totalFruit(self, fruits: list[int]) -> int:
    basket = []
    max_fruit = 0
    start = 0
    for end in range(len(fruits)):
        print("Cesta actual: ", basket)
        fruit = fruits[end]
        if len(basket)<2 and fruit not in basket:
          print("Cesta con menos de dos: ", fruit)
          basket.append(fruit)
          max_fruit = max(max_fruit,end-start+1)
        elif fruit in basket:
          print("Cesta con la fruta: ", fruit)
          max_fruit = max(max_fruit,end-start+1)
        else:
            print("Cesta llena annadir nueva fruta: ", fruit)
            basket = []
            start = end-1
            while fruits[start] == fruits[end-1] :
                start-=1
    return max(max_fruit, end - start+1)
def solution(fruits):
  trees = {}
  max_trees = 0
  start = end = 0
  while end < len(fruits):
      trees.setdefault(fruits[end],1)

      if len(trees)<3:
          max_trees = max(max_trees, end-start+1)
      else:
          trees[fruits[start]]-=1
          if trees[fruits[start]]==0:
              trees.pop(fruits[start])
          start+=1
      end+=1
  return max_trees

tests = Solution()
# print(tests.totalFruit([1,0,1,4,1,4,1,2,3]))
print(tests.totalFruit([0,1,2,2]))
