def band_name_generator(name):  
    if name[0] == name[len(name)-1]:
        nameCut = slice(len(name)-1)
        return (name[nameCut]+name).capitalize()
    return "The"+ name.capitalize()

def band_name_generator_up(name):
    return name.capitalize()+name[1:] if name[0] == name[-1] else "The "+name.capitalize()

print(band_name_generator("asraela"))
print(band_name_generator_up("sraela"))