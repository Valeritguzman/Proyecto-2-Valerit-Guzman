let librosColeccion =[{
nombre:"lazos de fuego",
cantidaddepaginas: 53,
autor:"Saxney_",
genero:["fantasia", "romance", "misterio"],
disponible:"Wattpad",
},
{
    nombre:" un giro inesperado",
    cantidaddepaginas: 71,
    autor:"miche_mc",
    genero:["familia", "romance", "secretos"],
    disponible:"Wattpad",
}
]


let nuevoLibro={
    nombre: "Adictivo",
    cantidaddepaginas: 35,
    autor:" Mili-Per",
    genero:["Accion", "adiccion", "drama",],
    disponible: "Wattpad",
}

function informacionLibro(librosColeccion){
return "El libro se llama "+ (librosColeccion.nombre) + " tiene " + (librosColeccion.cantidaddepaginas) + " paginas, " + " la autora es " + (librosColeccion.autor) + " los generos del libro son " + (librosColeccion.genero) + " y esta disponible en " + (librosColeccion.disponible)
}

function imprimirLibro (informacionLibro) {
}

function agregar(nuevolibro){
    return librosColeccion.push(nuevolibro);
}
agregar(nuevoLibro);

for (let index = 0; index < librosColeccion.length; index++) {
    console.log(informacionLibro(librosColeccion[index]));
    
}
// console.log(informacionLibro(nuevoLibro))