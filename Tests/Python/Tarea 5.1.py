# _*_ codigo: utf-8_*_
# 1. Crear una clase "Persona" que posea los siguientes atributos: CI, nombre, edad y sexo .
class Persona:
    def __init__(self, ci, nombre, edad, sexo):
        self.ci = ci
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo

#Nuevo metodo para mostrar la lista de personas 
    def __repr__(self): 
      return f'\nnombre:{self.nombre}; edad:{self.edad}; sexo:{self.sexo}' #----------aqui le das el formato que quieras

# 2. Cree una clase "Equipo" que contenga como atributos: numero, nombre y una lista de la clase "Persona".


class Equipo:

    def __init__(self, numero, nombre, personas):
        self.numero = numero
        self.nombre = nombre
        self.personas = personas

    # 3. Cree los siguientes métodos dentro de la clase “Equipo”
    # 3.1 llenar la lista de personas con la longitud y los elementos de la lista entrados por el usuario

    def mostrar_lista(self):
        return str(self.__dict__)


    def llenar_lista(self):
        cantidad_de_integrantes = int(input("Introduce la cantidad de integrantes que tiene el equipo : "))
        for i in range(cantidad_de_integrantes):
            ci = input("Introduce el carnet del integrante " + str(i + 1) + " del equipo : ")
            nombre = input("Introduce el nombre del integrante " + str(i + 1) + " del equipo : ")
            edad = int(input("Introduce la edad del integrante " + str(i + 1) + " del equipo : "))
            sexo = input("Itroduce genero, para femenino [ F ] y para masculino [ M ] del integrante " + str(i + 1) +
                         " del equipo : ").lower()
            integrante = Persona(ci, nombre, edad, sexo)
            self.personas.append(integrante)

   

        # 3.2 Mostrar los nombres de las personas del equipo.

    def mostrar_nombres(self):
        for i in self.personas:
            print("Dentro del equipo se encuetran : ", i.nombre)

    # 3.3 Mostrar los integrantes que sea mujeres
    def mostar_integrantes_mujeres(self):
        for i in self.personas:
            if i.sexo == "f":
                print("Del equipo son mujeres: ", i.nombre)

    # 3.4 Mostrar los integrantes que tengan más de una edad entrada por el usuario.
    def edad_mayor_que(self):
        edad_comparar = int(input("Introcuce la edad para determinar los integrantes mayores a dicha edad : "))
        for i in self.personas:
            if i.edad > edad_comparar:
                print("Los integrantes que tiene edad mayor a ", edad_comparar, "son : ", i.nombre)

    # 3.5 Dado un nombre de la lista de personas borrar a la persona de la lista.
    def borrar_nombre(self):
        print(repr(self.personas)) #------------ para ver la lista de personas antes de eliminar 
        nombre_eliminar = input("Que nombre desea eliminar? :")
        for i in self.personas:
            if i.nombre == nombre_eliminar:
                self.personas.remove(i)
                return print(repr(self.personas)) #---------para mostrar la lista de personas
        return print('No se encontro la persona') #---------en el caso que no se encuentre la persona


def principal():
    numero = int(input("Introduce el numero del equipo : "))
    nombre = input("Introduce el nombre del equipo : ")
    equipo = Equipo(numero, nombre, [])
    equipo.llenar_lista()
    print("Equipo : ", equipo.mostrar_lista())
    equipo.mostrar_nombres()
    equipo.mostar_integrantes_mujeres()
    equipo.edad_mayor_que()
    equipo.borrar_nombre()
    equipo.mostrar_nombres()




principal()


# laura = Persona(1, 'Laura', 11, 'F')
# jany = Persona(2, 'Jany', 15, 'F')
# pedro = Persona(2, 'Pedro', 15, 'M')
# personas = [laura, jany, pedro]
# team = Equipo(1, 'TeamA', personas)
# 
# 
# team.borrar_nombre('Jany')
