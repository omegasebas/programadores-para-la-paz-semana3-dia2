// CLASE 12 - Funciones simples en JavaScript
// Karen Santiago

function revisarPropuesta(nombre, presupuesto) {
  if (presupuesto > 1000000) {
    return `Propuesta ${nombre}: Requiere revisión del comité`;
  } else {
    return `Propuesta ${nombre}: Aprobada directamente`;
  }
}

function verificarCiudadano(edad, documento) {
  if (edad >= 18 && documento) {
    return "Ciudadano puede participar en decisiones";
  } else {
    return "Ciudadano no cumple requisitos";
  }
}

// Probar las funciones
console.log(revisarPropuesta("Parque", 500000));
console.log(revisarPropuesta("Biblioteca", 2000000));
console.log(verificarCiudadano(20, true));
console.log(verificarCiudadano(16, true));
