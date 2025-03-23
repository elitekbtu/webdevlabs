x = int(input())
a = []
for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        a.append(i)
        if i != x // i:
            a.append(x // i)
a.sort()
print(" ".join(map(str, a)))