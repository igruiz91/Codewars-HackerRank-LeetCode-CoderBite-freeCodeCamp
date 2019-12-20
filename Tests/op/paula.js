var array = [
{Nombre: "ALBANIA", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "BARRANCAS", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "EL PRADO", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "OLAYA HERRERA", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "CARRERA 43", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "PALMA REAL", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "BANCA PERSONAL BARRANQUILLA", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "SOLEDAD", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "CENTRO COMERCIAL BUENAVISTA", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"},
{Nombre: "Basa", Ejecutado: "0.0", Meta: "0", Cumplimiento: "0.00%", Fábrica: "0 und"}
];

array = array.sort((a,b) => (isNaN(a) && isNaN(b)) ? ((a.Nombre > b.Nombre) ? 1 : ((b.Nombre > a.Nombre) ? -1 : 0)) : (a - b));


console.log(array);