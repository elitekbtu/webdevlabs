N = int(input())
i = 2
while i <= N:
    if N % i == 0:
        print(i)
        break
    i += 1