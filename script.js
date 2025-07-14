
const malla = {
  "1° Año - Semestre 1": [
    {
      "id": "quimica",
      "nombre": "Química General y Orgánica"
    },
    {
      "id": "fisica",
      "nombre": "Física Médica"
    },
    {
      "id": "biocel",
      "nombre": "Biología Celular"
    },
    {
      "id": "matematicas",
      "nombre": "Matemáticas"
    },
    {
      "id": "orientacion",
      "nombre": "Orientación Profesional"
    },
    {
      "id": "estrategias",
      "nombre": "Estrategias del Aprendizaje"
    }
  ],
  "Semestre 2": [
    {
      "id": "bioquimica",
      "nombre": "Bioquímica General",
      "prereq": [
        "quimica",
        "biocel"
      ]
    },
    {
      "id": "anat1",
      "nombre": "Anatomía Veterinaria I",
      "prereq": [
        "biocel"
      ]
    },
    {
      "id": "histologia",
      "nombre": "Histología Veterinaria",
      "prereq": [
        "biocel"
      ]
    },
    {
      "id": "bienestar",
      "nombre": "Bienestar Animal",
      "prereq": [
        "orientacion"
      ]
    },
    {
      "id": "zoologia",
      "nombre": "Zoología Veterinaria"
    },
    {
      "id": "ingles1",
      "nombre": "Inglés Instrumental I"
    }
  ],
  "2° Año - Semestre 3": [
    {
      "id": "fisiologia",
      "nombre": "Fisiología Animal",
      "prereq": [
        "bioquimica",
        "histologia",
        "bienestar"
      ]
    },
    {
      "id": "anat2",
      "nombre": "Anatomía Veterinaria II",
      "prereq": [
        "anat1"
      ]
    },
    {
      "id": "micro",
      "nombre": "Microbiología General",
      "prereq": [
        "bioquimica"
      ]
    },
    {
      "id": "inmuno",
      "nombre": "Inmunología Veterinaria",
      "prereq": [
        "histologia",
        "bienestar"
      ]
    },
    {
      "id": "ecologia",
      "nombre": "Ecología",
      "prereq": [
        "zoologia"
      ]
    },
    {
      "id": "ingles2",
      "nombre": "Inglés Instrumental II",
      "prereq": [
        "ingles1"
      ]
    },
    {
      "id": "genetica",
      "nombre": "Genética Ganadera",
      "prereq": [
        "matematicas",
        "biocel"
      ]
    },
    {
      "id": "antropologia",
      "nombre": "Antropología"
    },
    {
      "id": "pasantia1",
      "nombre": "Pasantía Intrahospitalaria I",
      "prereq": [
        "bioquimica",
        "anat1",
        "histologia",
        "bienestar",
        "zoologia",
        "ingles1"
      ]
    },
    {
      "id": "pasantia2",
      "nombre": "Pasantía Intrahospitalaria II",
      "prereq": [
        "pasantia1"
      ]
    }
  ],
  "Semestre 4": [
    {
      "id": "fisiopato",
      "nombre": "Fisiopatología Animal",
      "prereq": [
        "fisiologia",
        "anat2",
        "inmuno"
      ]
    },
    {
      "id": "patogral",
      "nombre": "Patología General",
      "prereq": [
        "fisiologia",
        "anat2"
      ]
    },
    {
      "id": "repro",
      "nombre": "Reproducción Animal",
      "prereq": [
        "fisiologia",
        "anat2"
      ]
    },
    {
      "id": "parasito",
      "nombre": "Enfermedades Parasitarias",
      "prereq": [
        "zoologia"
      ]
    },
    {
      "id": "infecciosas",
      "nombre": "Enfermedades Infecciosas",
      "prereq": [
        "fisiologia",
        "micro",
        "inmuno"
      ]
    },
    {
      "id": "forrajes",
      "nombre": "Producción de Forrajes",
      "prereq": [
        "ecologia"
      ]
    },
    {
      "id": "etica",
      "nombre": "Ética",
      "prereq": [
        "antropologia"
      ]
    },
    {
      "id": "pasantia3",
      "nombre": "Pasantía Intrahospitalaria III",
      "prereq": [
        "pasantia2"
      ]
    },
    {
      "id": "pasantia4",
      "nombre": "Pasantía Intrahospitalaria IV",
      "prereq": [
        "pasantia3"
      ]
    }
  ],
  "3° Año - Semestre 5": [
    {
      "id": "andro",
      "nombre": "Andrología",
      "prereq": [
        "fisiopato",
        "repro"
      ]
    },
    {
      "id": "patosist",
      "nombre": "Patología Especial del Sistemas",
      "prereq": [
        "patogral"
      ]
    },
    {
      "id": "farma1",
      "nombre": "Farmacología Veterinaria I",
      "prereq": [
        "fisiopato",
        "infecciosas"
      ]
    },
    {
      "id": "nutricion",
      "nombre": "Nutrición y Alimentación Animal",
      "prereq": [
        "forrajes"
      ]
    },
    {
      "id": "economia",
      "nombre": "Economía",
      "prereq": [
        "matematicas",
        "forrajes"
      ]
    },
    {
      "id": "sistcarne",
      "nombre": "Sistemas de Producción de Carne",
      "prereq": [
        "bienestar",
        "forrajes",
        "genetica",
        "repro"
      ]
    },
    {
      "id": "filopolitica",
      "nombre": "Filosofía Política",
      "prereq": [
        "etica"
      ]
    },
    {
      "id": "pasantia5",
      "nombre": "Pasantía Intrahospitalaria V",
      "prereq": [
        "pasantia4"
      ]
    },
    {
      "id": "pasantia6",
      "nombre": "Pasantía Intrahospitalaria VI",
      "prereq": [
        "pasantia5"
      ]
    }
  ],
  "Semestre 6": [
    {
      "id": "gine",
      "nombre": "Ginecología y Obstetricia",
      "prereq": [
        "andro"
      ]
    },
    {
      "id": "cirugia1",
      "nombre": "Cirugía General y Patología Quirúrgica",
      "prereq": [
        "patosist",
        "farma1"
      ]
    },
    {
      "id": "farma2",
      "nombre": "Farmacología Veterinaria II",
      "prereq": [
        "farma1",
        "parasito"
      ]
    },
    {
      "id": "tec_carne",
      "nombre": "Tecnología de la Carne",
      "prereq": [
        "sistcarne"
      ]
    },
    {
      "id": "conta",
      "nombre": "Contabilidad y Administración",
      "prereq": [
        "economia"
      ]
    },
    {
      "id": "sistleche",
      "nombre": "Sistemas de Producción de Leche",
      "prereq": [
        "genetica",
        "nutricion",
        "repro"
      ]
    },
    {
      "id": "pasantia7",
      "nombre": "Pasantía Intrahospitalaria VII",
      "prereq": [
        "pasantia6"
      ]
    },
    {
      "id": "pasantia8",
      "nombre": "Pasantía Intrahospitalaria VIII",
      "prereq": [
        "pasantia7"
      ]
    },
    {
      "id": "externa1",
      "nombre": "Práctica Curricular Externa Intersemestral I",
      "prereq": [
        "pasantia8"
      ]
    }
  ],
  "4° Año - Semestre 7": [
    {
      "id": "estadistica",
      "nombre": "Análisis Estadístico",
      "prereq": [
        "conta"
      ]
    },
    {
      "id": "cirugia2",
      "nombre": "Cirugía Especial",
      "prereq": [
        "cirugia1",
        "farma2"
      ]
    },
    {
      "id": "exploracion",
      "nombre": "Exploración Clínica de los Animales",
      "prereq": [
        "patosist",
        "gine"
      ]
    },
    {
      "id": "tec_leche",
      "nombre": "Tecnologías de la Leche",
      "prereq": [
        "tec_carne",
        "sistleche"
      ]
    },
    {
      "id": "silvestre",
      "nombre": "Conservación de la Vida Silvestre",
      "prereq": [
        "ecologia"
      ]
    },
    {
      "id": "peces",
      "nombre": "Sistemas de Producción de Peces",
      "prereq": [
        "nutricion",
        "repro"
      ]
    },
    {
      "id": "pasantia9",
      "nombre": "Pasantía Intrahospitalaria IX",
      "prereq": [
        "pasantia8"
      ]
    },
    {
      "id": "pasantia10",
      "nombre": "Pasantía Intrahospitalaria X",
      "prereq": [
        "pasantia9"
      ]
    },
    {
      "id": "externa2",
      "nombre": "Práctica Curricular Externa Intersemestral II",
      "prereq": [
        "tec_leche"
      ]
    }
  ],
  "Semestre 8": [
    {
      "id": "metodologia",
      "nombre": "Metodología de la Investigación Científica",
      "prereq": [
        "estadistica"
      ]
    },
    {
      "id": "medicina",
      "nombre": "Medicina Interna",
      "prereq": [
        "cirugia2",
        "exploracion"
      ]
    },
    {
      "id": "diagnostico",
      "nombre": "Métodos Complementarios de Diagnóstico",
      "prereq": [
        "fisica",
        "exploracion"
      ]
    },
    {
      "id": "toxico",
      "nombre": "Toxicología Veterinaria",
      "prereq": [
        "farma2"
      ]
    },
    {
      "id": "epidemio",
      "nombre": "Epidemiología y Salud Pública",
      "prereq": [
        "infecciosas",
        "estadistica"
      ]
    },
    {
      "id": "proyectos",
      "nombre": "Formulación y Evaluación de Proyectos",
      "prereq": [
        "conta"
      ]
    },
    {
      "id": "pasantia11",
      "nombre": "Pasantía Intrahospitalaria XI",
      "prereq": [
        "pasantia10"
      ]
    },
    {
      "id": "pasantia12",
      "nombre": "Pasantía Intrahospitalaria XII",
      "prereq": [
        "pasantia11"
      ]
    },
    {
      "id": "externa3",
      "nombre": "Práctica Curricular Externa Intersemestral III",
      "prereq": [
        "medicina"
      ]
    }
  ],
  "5° Año - Semestre 9": [
    {
      "id": "memoria",
      "nombre": "Memoria de título",
      "prereq": [
        "pasantia12"
      ]
    },
    {
      "id": "equinos",
      "nombre": "Clínica de Equinos y rumiantes",
      "prereq": [
        "toxico",
        "diagnostico",
        "medicina"
      ]
    },
    {
      "id": "companias",
      "nombre": "Clínica de animales de compañía",
      "prereq": [
        "toxico",
        "diagnostico",
        "medicina"
      ]
    },
    {
      "id": "silvestres",
      "nombre": "Clínica de animales silvestres y exóticos",
      "prereq": [
        "toxico",
        "diagnostico",
        "medicina",
        "silvestre"
      ]
    },
    {
      "id": "inocuidad",
      "nombre": "Inocuidad de los alimentos",
      "prereq": [
        "toxico",
        "epidemio",
        "tec_leche"
      ]
    },
    {
      "id": "legislacion",
      "nombre": "Legislación y Deontología",
      "prereq": [
        "epidemio"
      ]
    },
    {
      "id": "pasantia13",
      "nombre": "Pasantía Intrahospitalaria XIII",
      "prereq": [
        "pasantia12"
      ]
    },
    {
      "id": "pasantia14",
      "nombre": "Pasantía Intrahospitalaria XIV",
      "prereq": [
        "pasantia13"
      ]
    },
    {
      "id": "turno1",
      "nombre": "Turno Hospitalario I",
      "prereq": [
        "pasantia12"
      ]
    }
  ],
  "Semestre 10": [
    {
      "id": "internado",
      "nombre": "Internado",
      "prereq": [
        "silvestres",
        "equinos",
        "companias"
      ]
    },
    {
      "id": "electivo1",
      "nombre": "Electivo I"
    },
    {
      "id": "electivo2",
      "nombre": "Electivo II"
    },
    {
      "id": "electivo3",
      "nombre": "Electivo III"
    },
    {
      "id": "turno2",
      "nombre": "Turno Hospitalario II",
      "prereq": [
        "pasantia12"
      ]
    }
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
      seccion.appendChild(boton);
    });

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
