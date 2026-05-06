function evaluarInformacion(dato, fuente) {
  if (fuente === "oficial" && dato) {
    return "Información verificada: confiable";
  } else {
    return "Información requiere revisión";
  }
}

console.log(evaluarInformacion("Presupuesto 2024", "oficial"));
console.log(evaluarInformacion("Rumor", "redes"));
