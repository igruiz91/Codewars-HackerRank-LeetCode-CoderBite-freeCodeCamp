import re
def is_audio(file_name):
    return bool(re.match(r"^[a-zA-Z]+(?=\.(mp3|flac|alac|aac)$)", file_name))

def is_img(file_name):
    return bool(re.match(r"^[a-zA-Z]+(?=\.(jpg|jpeg|png|bmp|gif)$)", file_name))




print(is_audio("Nothing Else Matters.mp3"))
print(is_audio("DaftPunk.FLAC"))
print(is_audio("DaftPunk.mp3"))
print(is_audio("MQJUJ_C.flac"))
