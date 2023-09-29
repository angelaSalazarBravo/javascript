const objetolit = {
    nombre: "Angela",
    apellido1: "Salazar",
    apellido2: "bravo",
    edad: 24,
    coloresFavoritos: ["azul", "rojo", "gris"],
    direccion: {
        ciudad: "Málaga",
        calle: "Calle Alozaina",
        numero: 456,
        codigoPostal: "29001"
      },
      contacto: {
        email: "angela@gmail.com",
        telefono: "652-654-321"
      }
    
  };

  function obtenerClaves(obj) {
    return Object.keys(obj);
  }

  function obtenerValores(obj) {
    return Object.values(obj);
  }
// devuelven arrays


// const claves = obtenerClaves(objetolit);
// const valores = obtenerValores(objetolit);

console.log(obtenerClaves(objetolit));
console.log(obtenerValores(objetolit));

