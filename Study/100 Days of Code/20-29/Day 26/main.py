student_dict = {
    "student": ["Angela", "James", "Lily"],
    "score": [56, 76, 98]
}

#Looping through dictionaries:
for (key, value) in student_dict.items():
    #Access key and value
    pass

import pandas
import os

route = os.path.join(os.path.dirname(__file__), "nato_phonetic_alphabet.csv")
letters_data_frame = pandas.read_csv(route)
#Loop through rows of a data frame

    #Access index and row
# Keyword Method with iterrows()
# {new_key:new_value for (index, row) in df.iterrows()}

#TODO 1. Create a dictionary in this format:
dict_nato = { row.letter: row.code for (_, row) in letters_data_frame.iterrows()}

#TODO 2. Create a list of the phonetic code words from a word that the user inputs.

def generate_word():
  word = input("Enter a word: ").upper()
  try:
    word_nato = [dict_nato[letter] for letter in word]
  except KeyError:
    print("Sorry, only letters")
    generate_word()
  else:
    print(word_nato)
    
generate_word()


