v = int(input())
t = int(input())
mark = (v * t) % 109
if mark < 0:
    mark += 109
print(mark)