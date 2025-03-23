a = int(input())
b = int(input())

result = []
for i in range(a, b + 1):
    if i % 2 == 0:
        result.append(str(i))

print(" ".join(result))