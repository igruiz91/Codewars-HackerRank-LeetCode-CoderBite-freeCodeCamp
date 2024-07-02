MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
  "water": 300,
  "milk": 200,
  "coffee": 100,
  "profits": 0,
}

def show_resources():
    print(f"Water: {resources['water']}ml")
    print(f"Milk: {resources['milk']}ml")
    print(f"Coffee: {resources['coffee']}g")
    print(f"Money: ${resources['profits']}")

def check_resources(choice):
  data = MENU[choice]["ingredients"]
  for resource in data:
    if resources[resource]<data[resource]:
      print(f"​Sorry there is not enough {resource}.")
      return False
    resources[resource]-=data[resource]
  return True


def process_coins(choice):
  money = 0
  price = MENU[choice]['cost']
  print("Please insert coins.")
  print(f"{choice} will cost ${price}")
  money+=0.25*float(input("how many quarters? "))
  print(f"You inserted a total of ${money}")
  money+=0.10*float(input("how many dimes? "))
  print(f"You inserted a total of ${money}")
  money+=0.05*float(input("how many nickles? "))
  print(f"You inserted a total of ${money}")
  money+=0.01*float(input("how many pennies? "))
  print(f"You inserted a total of ${money}")
  if money<price:
    print("Sorry that's not enough money. Money refunded.")
  else:
    resources["profits"]+=price
    print(f"Here is ${round(money-price,2)} in change.")
    print(f"Here is your {choice} ☕️. Enjoy!")

def make_order(choice):
    order = check_resources(choice)
    if order:
      process_coins(choice)
    else:
      print(order)

def machine():
  working= True
  while working:
    choice = input("What would you like? (espresso/latte/cappuccino):")
    if choice == "off":
      working= False
    elif choice == "report":
      show_resources()
    else:
      make_order(choice)


machine()

