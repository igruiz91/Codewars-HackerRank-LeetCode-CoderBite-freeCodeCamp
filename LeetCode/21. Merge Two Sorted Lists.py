class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next



class Solution:
    def mergeTwoLists(self, l1, l2):
        placeholder = ListNode()
        tail = placeholder

        l1_pointer = l1
        l2_pointer = l2

        while l1_pointer and l2_pointer:
            if l1_pointer.val < l2_pointer.val:
                tail.next = l1_pointer
                l1_pointer = l1_pointer.next

            else:
                tail.next = l2_pointer
                l2_pointer = l2_pointer.next
            tail = tail.next
        if l1_pointer:
          tail.next = l1_pointer
        if l2_pointer:
          tail.next = l2_pointer

        return placeholder.next



tests = Solution()

l1 =ListNode(1)
l1.next = ListNode(2)
l1.next.next = ListNode(4)

l2 =ListNode(1)
l2.next = ListNode(3)
l2.next.next = ListNode(4)


new_list = tests.mergeTwoLists(l1, l2)

arr_nodes = []
while new_list:
  arr_nodes.append(new_list.val)
  new_list = new_list.next

print(arr_nodes)

