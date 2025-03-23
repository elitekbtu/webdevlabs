a = int(input())
b = int(input())

s = str(a)
is_sym = len(s) == 4 and s[0] == s[3] and s[1] == s[2]

if b == a:
    print("YES")
elif is_sym and b == 1:
    print("YES")
elif not is_sym and b != 1:
    print("YES")
else:
    print("NO")