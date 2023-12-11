import os

dir = os.path.dirname(os.path.abspath(__file__))
route_names = os.path.join(dir, "Input", "Names", "invited_names.txt")
route_starting_letter = os.path.join(dir, "Input", "Letters", "starting_letter.txt")
route_ready_to_send = os.path.join(dir, "Output", "ReadyToSend", "starting_letter.txt")


with open(route_names) as names:
  list_names = names.read().split("\n")

print(list_names)

#TODO: Create a letter using starting_letter.txt


#for each name in invited_names.txt
#Replace the [name] placeholder with the actual name.
#Save the letters in the folder "ReadyToSend".

#Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
    #Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
        #Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp
