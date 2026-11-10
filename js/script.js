const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 },
];

const exito = false;
const registro = new Promise((resolve, reject) => {
    if (exito) {
        resolve("Nombre:",estudiantes.nombre, "Edad:", estudiantes.edad, "años.");
        } else {
            reject("Paquete perdido");
            }
});
registro
 .then((res) => console.log("OK:", res))
 .catch((error) => console.log("ERROR: no existe un estudiante con ese ID", error))
 .finally(() => console.log("Fin del proceso"));


console.log("Nombre:", estudiantes.nombre,"Edad:", estudiantes.edad, "años");
