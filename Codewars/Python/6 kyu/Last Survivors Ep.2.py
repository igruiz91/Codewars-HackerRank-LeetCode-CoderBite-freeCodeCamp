import re


def last_survivors(string):
    # Create a regular expression pattern that matches two consecutive equal characters
    pattern = r'(.)(?=.*\1)'
    # Use the re.sub function to replace the pattern with the next alphabetic character
    output_string = re.sub(pattern, lambda x: chr(
        (ord(x.group(1)) - ord('a') + 1) % 26 + ord('a')), string)

    # Repeat the substitution until there are no more equal characters
    while True:
        # Check if the output string still contains equal characters
        if re.search(pattern, output_string):
            # If it does, perform another substitution
            output_string = re.sub(pattern, lambda x: chr(
                (ord(x.group(1)) - ord('a') + 1) % 26 + ord('a')), output_string)
        else:
            # If it doesn't, break the loop
            break

    return output_string


print(last_survivors("zzzab"))
