class Persona():
    def __init__(self, ci, nombre, edad, sexo):
        self.CI = ci
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo


class Equipo():
    def __init__(self, numero, nombre, lista):
        self.numero = numero
        self.nombre = nombre
        self.lista = lista

    def mostrarLista(self):
        return str(self.__dict__)

    def mostrarNombres(self):
        for i in self.lista:
            print(i.nombre)

    def mostrarMujeres(self):
        for i in self.lista:
            if(i.sexo == 'F'):
                print(i)

    def mostrarEdadMayorDe(self, n):
        for i in self.lista:
            if(i.edad > n):
                print(i)

    def eliminarPersona(self, n):
        for i in self.lista:
            if i.nombre == n:
                self.lista.remove(i)


laura = Persona(1, 'Laura', 11, 'F')
jany = Persona(2, 'Jany', 15, 'F')
pedro = Persona(2, 'Pedro', 15, 'M')

team = Equipo(1, 'TeamA', [laura, jany, pedro])

print(team.mostrarLista())
print(team.eliminarPersona('jany'))
