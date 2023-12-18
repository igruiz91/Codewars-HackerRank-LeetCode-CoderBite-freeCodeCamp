import os
from tkinter import *
from tkinter import messagebox
import random
import pyperclip
import json


img_path = os.path.join(os.path.dirname(__file__), "logo.png")
json_path = os.path.join(os.path.dirname(__file__), "data.json")

# ---------------------------- PASSWORD GENERATOR ------------------------------- #
def find_password():
  website = website_entry.get()
  try:
    with open(json_path) as j:
      data = json.load(j)
  except FileNotFoundError:
    messagebox.showerror(title="Error", message="No Data File Found.")
  else:
    if website in data:
      email = data[website]["email"]
      password = data[website]["password"]
      email_entry.delete(0, END)
      email_entry.insert(0, email)
      password_entry.insert(0, password)
      messagebox.showinfo(message=f"Email: {email}\nPassword: {password}", title="Site Information")
    else:
      messagebox.showinfo(message=f"{website} data not found", title="Info")

def generate_password():
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

  nr_letters = random.randint(8, 10)
  nr_symbols = random.randint(2, 4)
  nr_numbers = random.randint(2, 4)


  l = [random.choice(letters) for _ in range(nr_letters)]
  s = [random.choice(symbols) for _ in range(nr_symbols)]
  n = [random.choice(numbers) for _ in range(nr_numbers)]

  password_list = l+s+n
  random.shuffle(password_list)
  password = "".join(password_list)

  #copy pass to clipboard
  pyperclip.copy(password)

  password_entry.insert(0, password)

  print(f"Your password is: {password}")# ---------------------------- SAVE PASSWORD ------------------------------- #
def save():
  website = website_entry.get()
  email = email_entry.get()
  password = password_entry.get()

  if not website or not email or not password:
    messagebox.showerror(title="Oops! Something went wrong", message="Please dont leave any fields empty")
  else:
    valid_data = messagebox.askokcancel(message=f"These are the details entered:\nEmail: {email}\nPassword: ****{password[-4:]}\nIs it ok to save?", title="Save Data")

    if valid_data:

      data = {
        website: {
          "email": email,
          "password": password
        }
      }
      try:
        with open(json_path, "r") as f:
          data_json = json.load(f)
      except FileNotFoundError:
        print("File does not exist.. creating new one...")
        with open(json_path, "w") as f:
          json.dump(data, f, indent=4)
      except json.decoder.JSONDecodeError:
        with open(json_path, "w") as f:
          json.dump(data, f, indent=4)
      else:
        data_json.update(data)

        with open(json_path, 'w') as f:
          json.dump(data_json,f, indent=4)
      finally:
        website_entry.delete(0, "end")
        password_entry.delete(0, "end")

# ---------------------------- UI SETUP ------------------------------- #


window = Tk()
window.title("Password Manager")
window.config(padx=50, pady=50)

canvas = Canvas(height=200, width=200)
logo_img = PhotoImage(file=img_path)
canvas.create_image(100, 100, image=logo_img)
canvas.grid(row=0, column=1)

#Labels
website_label = Label(text="Website:")
website_label.grid(row=1, column=0)
email_label = Label(text="Email/Username:")
email_label.grid(row=2, column=0)
password_label = Label(text="Password:")
password_label.grid(row=3, column=0)

#Inputs
website_entry = Entry(width=21)
website_entry.grid(row=1, column=1)
website_entry.focus()
email_entry = Entry(width=40)
email_entry.grid(row=2, column=1, columnspan=2)
email_entry.insert(0, "email@example.com")
password_entry = Entry(width=21)
password_entry.grid(row=3, column=1)

# Buttons
search_button = Button(text="Search", command=find_password, width=15)
search_button.grid(row=1, column=2)
generate_password_button = Button(text="Generate Password", command=generate_password)
generate_password_button.grid(row=3, column=2)
add_button = Button(text="Add", width=36, command=save)
add_button.grid(row=4, column=1, columnspan=2)


window.mainloop()
