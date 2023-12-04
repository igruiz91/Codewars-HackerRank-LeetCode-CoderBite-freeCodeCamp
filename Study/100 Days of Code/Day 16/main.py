from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine


coffee_machine = CoffeeMaker()
machine_menu= Menu()
machine_money = MoneyMachine()



while coffee_machine.is_on:
  choice = input(f"What would you like? {machine_menu.get_items()}? ")
  drink = machine_menu.find_drink(choice)
  if choice == "off":
    coffee_machine.is_on=False
  elif choice == "report":
    coffee_machine.report()
    machine_money.report()
  elif drink:
    if coffee_machine.is_resource_sufficient(drink):
      if machine_money.make_payment(drink.cost):
        coffee_machine.make_coffee(drink)



