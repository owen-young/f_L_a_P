from timeit import default_timer as timer
import math
from decimal import *
getcontext().prec = 100
import logging
def pi_calc3():
    sum = 0
    start = timer()
    for k in range(101):
        print(k)
        sum += (Decimal(1)/(16**k) * (
            Decimal(4)/(8*k+1) -
            Decimal(2)/(8*k+4) -
            Decimal(1)/(8*k+5) -
            Decimal(1)/(8*k+6)
            
        ))
        
    logging.basicConfig(filename='pi2.txt', level=logging.INFO)
    pi_sum = str(sum)
    pi_sum = pi_sum[0:(len(pi_sum)-2)]
    logging.info(pi_sum)
    end = timer()
    print(start-end)
    


#print(calc(25))

#print(pi_calc2())
#print(pi_calc3())
#print(pi_calc3()==3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679)
#print("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679")
pi_calc3()
#print("3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148")


