a = int(input())
b = int(input())
c = int(input())
d = int(input())

result = []
for i in range(a, b + 1):
    if i % d == c:
        result.append(str(i))

print(" ".join(result))