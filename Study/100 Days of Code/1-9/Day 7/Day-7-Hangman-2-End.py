
import random

word_list = ["aardvark", "baboon", "camel"]

chosen_word = random.choice(word_list)
lives = 6
#Testing code
print(f'Pssst, the solution is {chosen_word}.')

#TODO-1: - Create an empty List called display.
#For each letter in the chosen_word, add a "_" to 'display'.
#So if the chosen_word was "apple", display should be ["_", "_", "_", "_", "_"] with 5 "_" representing each letter to guess.
display = []
word_length = len(chosen_word)
for _ in range(word_length):
    display += "_"


#TODO-2: - Loop through each position in the chosen_word;
#If the letter at that position matches 'guess' then reveal that letter in the display at that position.
#e.g. If the user guessed "p" and the chosen word was "apple", then display should be ["_", "p", "p", "_", "_"].

while lives>0 and display.count('_')!=0:
  print(display)
  guess = input("Guess a letter: ").lower()
  any = False
  for position in range(word_length):
      letter = chosen_word[position]
      #print(f"Current position: {position}\n Current letter: {letter}\n Guessed letter: {guess}")
      if letter == guess:
          display[position] = letter
          any = True
  if any == False:
      lives -= 1
      print(f"Wrong!\nYou have {lives} more lives")
  any=False


#TODO-3: - Print 'display' and you should see the guessed letter in the correct position and every other letter replace with "_".
#Hint - Don't worry about getting the user to guess the next letter. We'll tackle that in step 3.
print(display)
print("You Won!!") if lives != 0 else print("You Lost! :(")
