def solution(arr_val, arr_unit) :
    peso = {
        "kg": 1, "g": 0.001, "mg": 0.0000001, "lb": 0.453592
    }
    distancia = {
        "m": 1, "cm": 0.001, "mm":0.000001, "μm": 0.000001, "ft": 0.3048 
    }
    M = peso[arr_unit[0]]*arr_val[0]
    m = peso[arr_unit[1]]*arr_val[1]
    R = distancia[arr_unit[2]]*arr_val[2]
    F = 6.674*10**-11*M*m/R**2
    return round(F, 5)

print(solution([80, 70, 0.2], ["kg", "kg", "cm"]))

# Formula
# F= GMm/R^2

# G = 6.67 x 10-11N.kg–2.m2