class LinkedList:
    class Node:
        def __init__(self, val, next=None):
            self.val = val
            self.next = next
    
    def __init__(self):
        self.head = None
        self.count = 0
        
    def prepend(self, value):
        self.head = LinkedList.Node(value, self.head)
        self.count += 1
        
    def __len__(self):
        return self.count
        
    def __iter__(self):
        n = self.head
        while n:
            yield n.val
            n = n.next
    
    def __repr__(self):
        return '[' + ', '.join(str(x) for x in self) + ']'

    def count_nodes(self, n):
        if not n:
            return 1
        elif not n.next:
            return 0
        else:
            return 1 + count_nodes(n.next)

    def append(self, value):
        if len(self) == 0:
            self.prepend(value)
        else:
            n = self.head
            while n.next:
                n = n.next
            n.next = LinkedList.Node(value)
            self.count += 1

linked_list = LinkedList()
for x in range(3):
    linked_list.append(x)

print(linked_list)
print(linked_list.count_nodes(linked_list.head))
    
