function shake() {

  let resultado = [
    "En mi opinión, sí",
    "Es cierto",
    "Es decididamente así",
    "Probablemente",
    "Buen pronóstico",
    "Todo apunta a que sí",
    "Sin duda",
    "Sí",
    "Sí - definitivamente",
    "Debes confiar en ello",
    "Respuesta vaga, vuelve a intentarlo",
    "Pregunta en otro momento",
    "Será mejor que no te lo diga ahora",
    "No puedo predecirlo ahora",
    "Concéntrate y vuelve a preguntar",
    "Puede ser",
    "No cuentes con ello",
    "Mi respuesta es no",
    "Mis fuentes me dicen que no",
    "Las perspectivas no son buenas",
    "Muy dudoso"
  ];

  let random = resultado[Math.floor(Math.random() * resultado.length)];

  if

  document.getElementById("resultado").innerHTML = random;
}
