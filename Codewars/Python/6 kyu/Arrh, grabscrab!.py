def grabscrab(said, possible_words):
    hash_word={}
    resp = []
    for c in said:
        if c in hash_word:
            hash_word[c]+=1
        else:
            hash_word[c]=1

    for word in possible_words:
        test_hash = hash_word.copy()
        for c in word:
            if c in test_hash:
                test_hash[c]-=1
            else:
                test_hash[c]=1
                break
        if all(value == 0 for value in test_hash.values()):
            resp.append(word)
    return resp


def grabscrab_up(said, possible):
    return [word for word in possible if sorted(word) == sorted(said)]



print(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]))
print(grabscrab_up( "ortsp", ["sport", "parrot", "ports", "matey"]))
