n = int(input())
total = 0
for _ in range(n):
    num = input().strip()  
    total += num.count('0')
print(total)

