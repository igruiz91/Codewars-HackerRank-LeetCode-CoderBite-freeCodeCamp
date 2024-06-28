class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reverseList(self, head: list[ListNode]) -> list[ListNode]:
        node, curr = None, head
        while curr:
            temp = curr.next
            curr.next = node
            node = curr
            curr = temp
        return node


