#Number Guessing Game Objectives:

# Include an ASCII art logo.
# Allow the player to submit a guess for a number between 1 and 100.
# Check user's guess against actual answer. Print "Too high." or "Too low." depending on the user's answer.
# If they got the answer correct, show the actual answer to the player.
# Track the number of turns remaining.
# If they run out of turns, provide feedback to the player.
# Include two different difficulty levels (e.g., 10 guesses in easy mode, only 5 guesses in hard mode).

from logo import logo
import random

print(logo)
print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100")

def game():
  difficulty = input("Choose a difficulty. Type 'easy' or 'hard': ").lower()
  lives = 10
  if difficulty == "hard":
    lives = 5
  print(f"You have {lives} attempts remaining to guess the number.")
  secret_number = random.randint(1,100)
  while lives > 0:
    num = int(input("Make a guess: "))
    if num > secret_number:
      print("Too high.")
    elif num<secret_number:
      print("Too low.")
    else:
      print("You win! Congrats")
      break
    print("Guess again.")
    lives -= 1
    print(f"You have {lives} remaining to guess the number.")
  if num != secret_number:
    print(f"Sorry you lose... the number i've thinking was {secret_number}. Try again.")

game()
