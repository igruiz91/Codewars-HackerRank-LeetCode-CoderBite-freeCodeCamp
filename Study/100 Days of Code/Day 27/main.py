from tkinter import *


def button_clicked():
    print("I got clicked")
    new_text = input.get()
    label_convert.config(text=float(new_text)*1.6)


window = Tk()
window.title("Mile to Km Converter")
window.minsize(width=200, height=200)
window.config(padx=50, pady=50)

#Entry
input = Entry(width=10)
print(input.get())
input.grid(column=1, row=0)

#Label entry
entry_label = Label(text="Miles")
entry_label.grid(column=2, row=0)

#Label es equal to
label_km = Label(text="is equal to")
label_km.grid(column=0, row=1)

label_convert = Label(text="")
label_convert.grid(column=1, row=1)

label_km_txt = Label(text="Km")
label_km_txt.grid(column=2, row=1)

#Button
button = Button(text="Calculate", command=button_clicked)
button.grid(column=1, row=2)













window.mainloop()
