def who_eats_who(zoo):
    zoo = zoo.split(',')
    chain = {
        "bear": ["cow", "chicken", "sheep", "big-fish","bug", "leaves"],
        "lion": ["antelope","cow"],
        "fox": ["chicken","sheep"],
        "antelope": ["grass",],
        "cow": [ "grass",],
        "sheep": [ "grass",],
        "bug": ["leaves"],
        "giraffe": ["leaves"],
        "panda": ["leaves"],
        "chicken": ["bug"],
        "big-fish": ["little-fish"],
    }
    eat_done  = True
    ans = []
    while eat_done:
        new_zoo = zoo.copy()
        for i in range(len(new_zoo)-1):
            a1, a2 = new_zoo[i],new_zoo[i+1]
            if a1 in chain and a2 in chain[a1]:
                ans.append(f"{a1} eats {a2}")
                new_zoo.pop(i+1)
                break
            if a2 in chain and a1 in chain[a2]:
                ans.append(f"{a2} eats {a1}")
                new_zoo.pop(i)
                break
        if len(new_zoo) == len(zoo): eat_done=False
        zoo = new_zoo
    ans.append(",".join(zoo))
    return ans



# zoo = ["fox","bug","chicken","grass","sheep"]
zoo = "fox,bug,chicken,grass,sheep"
print(who_eats_who(zoo))



# ['cow,bicycle,cow,cow,busker,banana,sheep,bicycle,bear,bear,cow,little-fish,antelope', 'bear eats cow', 'bear eats little-fish', 'cow,bicycle,cow,cow,busker,banana,sheep,bicycle,bear,bear,antelope'] should equal
# ['cow,bicycle,cow,cow,busker,banana,sheep,bicycle,bear,bear,cow,little-fish,antelope', 'bear eats cow', 'cow,bicycle,cow,cow,busker,banana,sheep,bicycle,bear,bear,little-fish,antelope']

#'cow,bicycle,cow,cow,busker,banana,sheep,bicycle,bear,bear,cow,little-fish,antelope'
