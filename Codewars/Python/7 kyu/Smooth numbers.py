def is_smooth(n):
    resp,count = [],2
    while n>1:
        if n%count !=0: count+=1
        else: 
            n/=count
            resp.append(count)
    switcher={
        2: "power of 2", 
        3: "3-smooth",
        5: "Hamming number",
        7: "humble numbers",
    }
    return switcher.get(resp[len(resp)-1],"non-smooth")

print(is_smooth(16))