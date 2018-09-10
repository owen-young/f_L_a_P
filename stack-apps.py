
# coding: utf-8

# # Stack Applications

# ## Overview
# 
# For this assignment you will build on the stack data structure created in class to develop two distinct stack-driven applications.
# 
# Below is the completed stack implementation from class. While you needn't modify it for this assignment — indeed, all tests run on our end will *not* make use of any changes you introduce to the `Stack` class — we urge you to read through the code and make sure you understand how it works.

# In[94]:

class Stack:
    class Node:
        def __init__(self, val, next=None):
            self.val = val
            self.next  = next
    
    def __init__(self):
        self.top = None

    def push(self, val):
        self.top = Stack.Node(val, self.top)
        
    def pop(self):
        assert self.top, 'Stack is empty'
        val = self.top.val
        self.top = self.top.next
        return val
    
    def peek(self):
        return self.top.val if self.top else None
    
    def empty(self):
        return self.top == None
    
    def __bool__(self):
        return not self.empty()
    
    def __repr__(self):
        if not self.top:
            return ''
        return '--> ' + ', '.join(str(x) for x in self)
    
    def __iter__(self):
        n = self.top
        while n:
            yield n.val
            n = n.next


# ### 1. Paired delimiter matching
# 
# In class we wrote a function that uses a stack to help determine whether all paired delimiters (e.g., parentheses) in a given string are correctly matched — you can review the code at http://moss.cs.iit.edu/cs331/notebooks/stacks-and-queues.html (look for `check_parens`).
# 
# For this first exercise you will extend our implementation to check all the following paired delimiters: `{}, (), [], <>`. We've defined two strings — `delim_openers` and `delim_closers` — that might come in handy in your implementation (hint: look into using the `index` sequence method).  

# In[95]:

delim_openers = '{([<'
delim_closers = '})]>'

def check_delimiters(expr):
    s = Stack()
    for c in expr:
        if c in delim_openers:
            s.push(c)
        elif c in delim_closers:
            try:
                if delim_openers.index(s.peek()) == delim_closers.index(c):
                    try:
                        s.pop()
                    except:
                        return False
            except:
                return False
    return s.empty()
                


# In[96]:

from unittest import TestCase
tc = TestCase()
tc.assertTrue(check_delimiters('()'))
tc.assertTrue(check_delimiters('[]'))
tc.assertTrue(check_delimiters('{}'))
tc.assertTrue(check_delimiters('<>'))


# In[97]:

from unittest import TestCase
tc = TestCase()
tc.assertTrue(check_delimiters('([])'))
tc.assertTrue(check_delimiters('[{}]'))
tc.assertTrue(check_delimiters('{<()>}'))
tc.assertTrue(check_delimiters('<({[]})>'))


# In[98]:

from unittest import TestCase
tc = TestCase()
tc.assertTrue(check_delimiters('([] () <> [])'))
tc.assertTrue(check_delimiters('[{()} [] (<> <>) {}]'))
tc.assertTrue(check_delimiters('{} <> () []'))
tc.assertTrue(check_delimiters('<> ([] <()>) <[] [] <> <>>'))


# In[99]:

from unittest import TestCase
tc = TestCase()
tc.assertFalse(check_delimiters('('))
tc.assertFalse(check_delimiters('['))
tc.assertFalse(check_delimiters('{'))
tc.assertFalse(check_delimiters('<'))
tc.assertFalse(check_delimiters(')'))
tc.assertFalse(check_delimiters(']'))
tc.assertFalse(check_delimiters('}'))
tc.assertFalse(check_delimiters('>'))


# In[100]:

from unittest import TestCase
tc = TestCase()
tc.assertFalse(check_delimiters('( ]'))
tc.assertFalse(check_delimiters('[ )'))
tc.assertFalse(check_delimiters('{ >'))
tc.assertFalse(check_delimiters('< )'))


# In[101]:

from unittest import TestCase
tc = TestCase()
tc.assertFalse(check_delimiters('[ ( ] )'))
tc.assertFalse(check_delimiters('((((((( ))))))'))
tc.assertFalse(check_delimiters('< < > > >'))
tc.assertFalse(check_delimiters('( [] < {} )'))


# ### 2. Infix &rarr; Postfix conversion
# 
# Another function we looked at was one that used a stack to evaluate a postfix arithmetic expression — you can review the code at http://moss.cs.iit.edu/cs331/notebooks/stacks-and-queues.html (look for `eval_postfix`). Because most of us are more accustomed to infix-form arithmetic expressions (e.g., `2 * (3 + 4)`), however, the function seems to be of limited use. The good news: we can use a stack to convert an infix expression to postfix form!
# 
# To do so, we will use the following algorithm:
# 
# 1. Start with an empty list and an empty stack. At the end of the algorithm, the list will contain the correctly ordered tokens of the postfix expression.
# 
# 2. Next, for each token in the expression (split on whitespace):
# 
#     - if the token is a digit (the string `isdigit` method can be used to determine this), simply append it to the list; else, the token must be either an operator or an opening or closing parenthesis, in which case apply one of the following options:
# 
#     - if the stack is empty or contains a left parenthesis on top, push the token onto the stack.
# 
#     - if the token is a left parenthesis, push it on the stack.
# 
#     - if the token is a right parenthesis, pop the stack and append all operators to the list until you a left parenthesis is popped. Discard the pair of parentheses.
# 
#     - if the token has higher precedence than the top of the stack, push it on the stack. For our purposes, the only operators are +, -, *, /, where the latter two have higher precedecence than the first two.
# 
#     - if the token has equal precedence with the top of the stack, pop and append the top of the stack to the list and then push the incoming operator.
# 
#     - if the incoming symbol has lower precedence than the symbol on the top of the stack, pop the stack and append it to the list. Then repeat the above tests against the new top of stack.
# 
# 3. After arriving at the end of the expression, pop and append all operators on the stack to the list.
# 
# A writeup containing a detailed explanation of the steps above (though it prints the tokens immediately rather than adding them to a list) can be found at http://csis.pace.edu/~wolf/CS122/infix-postfix.htm

# In[108]:




# In[109]:

from unittest import TestCase
tc = TestCase()
tc.assertEqual(infix_to_postfix('1'), '1')
tc.assertEqual(infix_to_postfix('1 + 2'), '1 2 +')
tc.assertEqual(infix_to_postfix('( 1 + 2 )'), '1 2 +')
tc.assertEqual(infix_to_postfix('1 + 2 - 3'), '1 2 + 3 -')
tc.assertEqual(infix_to_postfix('1 + ( 2 - 3 )'), '1 2 3 - +')


# In[110]:

from unittest import TestCase
tc = TestCase()
tc.assertEqual(infix_to_postfix('1 + 2 * 3'), '1 2 3 * +')
tc.assertEqual(infix_to_postfix('1 / 2 + 3 * 4'), '1 2 / 3 4 * +')
tc.assertEqual(infix_to_postfix('1 * 2 * 3 + 4'), '1 2 * 3 * 4 +')
tc.assertEqual(infix_to_postfix('1 + 2 * 3 * 4'), '1 2 3 * 4 * +')


# In[107]:

from unittest import TestCase
tc = TestCase()
tc.assertEqual(infix_to_postfix('1 * ( 2 + 3 ) * 4'), '1 2 3 + * 4 *')
tc.assertEqual(infix_to_postfix('1 * ( 2 + 3 * 4 ) + 5'), '1 2 3 4 * + * 5 +')
tc.assertEqual(infix_to_postfix('1 * ( ( 2 + 3 ) * 4 ) * ( 5 - 6 )'), '1 2 3 + 4 * * 5 6 - *')


# In[ ]:



