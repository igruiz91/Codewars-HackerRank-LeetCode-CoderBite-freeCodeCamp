def task(w, n, c):
    worker = {"Mondays": "James", "Tuesday": "John", "Wednesday": "Robert", "Thursday": "Michael", "Friday": "William",}
    return f"It is {w} today, {worker[w]}, you have to work, you must spray {n} trees and you need {n*c} dollars to buy liquid"


print(task('Wednesday', 10, 2))
