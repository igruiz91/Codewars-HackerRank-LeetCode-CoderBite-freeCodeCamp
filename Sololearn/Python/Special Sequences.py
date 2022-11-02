import re
text = "  #Coding is #awesome !!"
#your code goes here
pattern = r"#\w+"
hashtags = re.findall(pattern, text)
print("\n".join(hashtags))
