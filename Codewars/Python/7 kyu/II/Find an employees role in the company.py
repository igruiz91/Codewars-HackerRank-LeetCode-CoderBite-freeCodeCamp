employees ={...}

def find_employees_role(name):
    for employee in employees:
        if f"{employee['first_name']} {employee['last_name']}" == name:
            return employee["role"]
    return "Does not work here!"
