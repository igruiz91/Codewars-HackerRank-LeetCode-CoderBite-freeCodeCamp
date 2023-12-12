import os

dir = os.path.dirname(os.path.abspath(__file__))
route_names = os.path.join(dir, "Input", "Names", "invited_names.txt")
route_starting_letter = os.path.join(dir, "Input", "Letters", "starting_letter.txt")



with open(route_names) as names:
  list_names = names.read().split("\n")

#TODO: Create a letter using starting_letter.txt
with open(route_starting_letter) as starting_letter:
  base_letter = starting_letter.read()


#for each name in invited_names.txt
#Replace the [name] placeholder with the actual name.
for name in list_names:
  #Save the letters in the folder "ReadyToSend".
  route_ready_to_send = os.path.join(dir, "Output", "ReadyToSend", f"{name}.txt")
  with open(route_ready_to_send,"w") as custom_letter:
    custom_letter.write(base_letter.replace("[name]", name))



#Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
    #Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
        #Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp
