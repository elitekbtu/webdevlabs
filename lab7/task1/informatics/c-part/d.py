x = int(input())

for i in range(2, int(x**0.5) + 1):
    if x % i == 0:
        print(i)
        break
else:
    print(x)