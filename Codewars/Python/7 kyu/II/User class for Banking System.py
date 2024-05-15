class User(object):
    def __init__(self, name, balance, checking_account):
        self.name = name
        self.balance = balance
        self.checking_account = checking_account

    def withdraw(self, amount):
        self.balance -=amount
        return f"{self.name} has {self.balance}."

    def check(self, user, amount):
      if user.balance>amount:
        user.balance -= amount
        self.balance+= amount
        return f"{self.name} has {self.balance} and {user.name} has {user.balance}."
      else:
        raise ValueError()


    def add_cash(self,amount):
        self.balance+=amount
        return f"{self.name} has {self.balance}."



Jeff = User('Jeff', 70, True)
Joe = User('Joe', 70, True)


print(Jeff.withdraw(2))
print(Joe.check(Jeff, 50))
print(Jeff.check(Joe, 80))
print(Jeff.add_cash(20))
