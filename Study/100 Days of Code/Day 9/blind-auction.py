import os
from art import logo

def clear():
  os.system("cls" if os.name == "nt" else "clear")

print(logo)
print("Welcome to the secret auction program.")

bidders = {}
bid = True

while bid:
  name = input("What is your name?: ")
  bidders[name]= int(input("What is your bid?: $"))
  if input("Are there any other bidders? Type 'yes' or 'no'.\n")=='no':
    bid=False
  clear()


winner_bid = 0
winner_name = ""
for name in bidders:
  if bidders[name]>= winner_bid:
    winner_bid = bidders[name]
    winner_name=name

print(f"The winner is {winner_name} with a bid of ${winner_bid}.")
#HINT: You can call clear() to clear the output in the console.
