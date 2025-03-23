a = int(input())
b = int(input())

result = []
for i in range(a, b + 1):
    sqrt = int(i**0.5)
    if sqrt * sqrt == i:
        result.append(str(i))

print(" ".join(result))