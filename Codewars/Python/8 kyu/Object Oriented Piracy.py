class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew

    def is_worth_it(self):
        if(self.crew == 0 and self.draft == 0):
            return False
        return (self.draft-self.crew*1.5) > 20


titanic = Ship(35, 20)

print(titanic.is_worth_it())
