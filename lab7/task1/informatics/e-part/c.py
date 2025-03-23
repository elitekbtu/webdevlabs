def xor(x, y):
    return x != y

x, y = map(int, input().split())
print(int(xor(bool(x), bool(y))))