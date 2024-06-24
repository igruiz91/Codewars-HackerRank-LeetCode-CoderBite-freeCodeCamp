class Robot:
    def __init__(self):
        self.words =  set({"i","already","know","word","thank","you","for","teaching","me","do","not","understand","the","input"})

    def learn_word(self, word):
        if word.lower() in self.words:
            return f"I already know the word {word}"
        if word.isalpha():
            self.words.add(word.lower())
            return f'Thank you for teaching me {word}'
        else:
            return 'I do not understand the input'



bot = Robot()

bot.learn_word("hello")
print(bot.learn_word("I"))
bot.learn_word("casa")
bot.learn_word("wo!")
print(bot.learn_word("hello"))
