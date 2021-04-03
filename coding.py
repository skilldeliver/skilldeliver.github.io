from json import load


with open('coding-data.json') as f:
    data = load(f)

end_data  = dict()
d1, d2, d3 = data['languages1'], data['languages2'], data['languages3'] 

for d in d1 + d2 + d3:
    if d['name'] not in end_data:
        end_data[d['name']] = list()
    end_data[d['name']].append(d['digital'])

for l in end_data:
    hours, minutes = 0, 0
    for r in end_data[l]:
        h, m = r.split(':')
        hours += int(h)
        minutes += int(m)
    hours += minutes // 60
    minutes = minutes % 60
    end_data[l] = f'{hours}:{minutes}'

print(sorted(end_data.items(), key=lambda x: int(x[1].split(':')[0]), reverse=True))
