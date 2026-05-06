function evaluarPropuesta(nombre, presupuesto, impacto) {
  if (presupuesto < 500000 && impacto === "alto") {
    return `Propuesta ${nombre}: Prioritaria`;
  } else if (presupuesto > 2000000) {
    return `Propuesta ${nombre}: Requiere comité`;
  } else {
    return `Propuesta ${nombre}: En evaluación`;
  }
}

console.log(evaluarPropuesta("Huerta", 300000, "alto"));
console.log(evaluarPropuesta("Puente", 3000000, "medio"));
