
const malla = {
  "1° Año - Semestre 1": [
    { id: "quimica", nombre: "Química General y Orgánica" },
    { id: "fisica", nombre: "Física Médica" },
    { id: "biocel", nombre: "Biología Celular" },
    { id: "matematicas", nombre: "Matemáticas" },
    { id: "orientacion", nombre: "Orientación Profesional" },
    { id: "estrategias", nombre: "Estrategias del Aprendizaje" }
  ],
  "1° Año - Semestre 2": [
    { id: "bioquimica", nombre: "Bioquímica General", prereq: ["quimica", "biocel"] },
    { id: "anato1", nombre: "Anatomía Veterinaria I", prereq: ["biocel"] },
    { id: "histologia", nombre: "Histología Veterinaria", prereq: ["biocel"] },
    { id: "bienestar", nombre: "Bienestar Animal", prereq: ["orientacion"] },
    { id: "zoologia", nombre: "Zoología Veterinaria" },
    { id: "ingles1", nombre: "Inglés Instrumental I" }
  ],
  "2° Año - Semestre 3": [
    { id: "fisiologia", nombre: "Fisiología Animal", prereq: ["bioquimica", "histologia", "bienestar"] },
    { id: "anato2", nombre: "Anatomía Veterinaria II", prereq: ["anato1"] },
    { id: "micro", nombre: "Microbiología General", prereq: ["bioquimica"] },
    { id: "inmuno", nombre: "Inmunología Veterinaria", prereq: ["histologia", "bienestar"] },
    { id: "ecologia", nombre: "Ecología", prereq: ["zoologia"] },
    { id: "ingles2", nombre: "Inglés Instrumental II", prereq: ["ingles1"] },
    { id: "genetica", nombre: "Genética Ganadera", prereq: ["matematicas", "biocel"] },
    { id: "antro", nombre: "Antropología" },
    { id: "pasantia1", nombre: "Pasantía Intrahospitalaria I", prereq: ["quimica", "fisica", "biocel", "matematicas", "orientacion", "estrategias", "bioquimica", "anato1", "histologia", "bienestar", "zoologia", "ingles1"] },
    { id: "pasantia2", nombre: "Pasantía Intrahospitalaria II", prereq: ["pasantia1"] }
  ]
};

let aprobados = new Set();

function crearMalla() {
  const contenedor = document.querySelector(".malla");
  for (let bloque in malla) {
    const seccion = document.createElement("div");
    seccion.className = "anio";

    const titulo = document.createElement("h2");
    titulo.textContent = bloque;
    seccion.appendChild(titulo);

    const contenedorRamos = document.createElement("div");
    contenedorRamos.className = "semestre";

    malla[bloque].forEach(ramo => {
      const boton = document.createElement("button");
      boton.textContent = ramo.nombre;
      boton.classList.add("ramo");
      boton.dataset.id = ramo.id;

      if (ramo.prereq) {
        boton.classList.add("bloqueado");
        boton.dataset.prereq = JSON.stringify(ramo.prereq);
      }

      boton.addEventListener("click", () => manejarClick(boton, ramo));
      contenedorRamos.appendChild(boton);
    });

    seccion.appendChild(contenedorRamos);
    contenedor.appendChild(seccion);
  }
}

function manejarClick(boton, ramo) {
  if (boton.classList.contains("bloqueado")) return;
  if (boton.classList.contains("aprobado")) return;

  boton.classList.add("aprobado");
  aprobados.add(ramo.id);

  document.querySelectorAll(".ramo.bloqueado").forEach(b => {
    const prereq = JSON.parse(b.dataset.prereq);
    if (prereq.every(r => aprobados.has(r))) {
      b.classList.remove("bloqueado");
    }
  });
}

crearMalla();
