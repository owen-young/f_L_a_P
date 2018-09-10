from timeit import default_timer as timer
from decimal import *
def pi_calc3():
    start = timer()
    sum = 0
    k=500000
    sum += (Decimal(1)/(16**k) * (
            Decimal(4)/(8*k+1) -
            Decimal(2)/(8*k+4) -
            Decimal(1)/(8*k+5) -
            Decimal(1)/(8*k+6)
        ))
    end = timer()
    print(end-start)
pi_calc3()
