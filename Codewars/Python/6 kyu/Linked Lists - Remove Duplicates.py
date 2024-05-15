class Node(object):
    def __init__(self, data=None):
        self.data = data
        self.next = None

    def remove_duplicates(self, head):
        current = self.head
        while current:
            while current.next and current.data == current.next.data:
                current.next = current.next.next
            current = current.next

linked_list = Node()
