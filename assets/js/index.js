import { Leon, Lobo, Oso, Serpiente, Aguila } from './tiposDeAnimales.js';
import animales from './Animales.js'


let imagenDelAnimal;
let sonidoDelAnimal;
let listaDeAnimales = [];
let animal;

document.getElementById("btnRegistrar").addEventListener("click", async () => {
    const elementoHTMLDelNombre = document.getElementById("animal");
    const elementoHTMLDeLaEdad = document.getElementById("edad");
    const elementoHTMLDeComentarios = document.getElementById("comentarios");

    const nombreDelAnimal = elementoHTMLDelNombre.value
    const edadDelAnimal = elementoHTMLDeLaEdad.value
    const comentariosDelAnimal = elementoHTMLDeComentarios.value

    const datosDelArchivoJson = await animales.getDatos();

    const objetoDelAnimal = datosDelArchivoJson.find((objeto) => {
        return objeto.name == nombreDelAnimal

    })


    imagenDelAnimal = `../imgs/${objetoDelAnimal.imagen}`
    sonidoDelAnimal = objetoDelAnimal.sonido;


    if (nombreDelAnimal && edadDelAnimal && comentariosDelAnimal) {
        switch (nombreDelAnimal) {
            case "Leon":
                console.log("Creare un leon")
                animal = new Leon(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                break;

            case "Oso":
                console.log("Creare un oso")
                animal = new Oso(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                break;

            case "Aguila":
                console.log("Creare un aguila")
                animal = new Aguila(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                break;

            case "Lobo":
                console.log("Creare un lobo")
                animal = new Lobo(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                break;

            case "Serpiente":
                console.log("Creare un serpiente")
                animal = new Serpiente(nombreDelAnimal, edadDelAnimal, imagenDelAnimal, comentariosDelAnimal, sonidoDelAnimal)
                break;

            default:
                console.log("Debes elegir un nombre para el animal")
                break;
        }

        listaDeAnimales.push(animal)

        console.log(listaDeAnimales)

        elementoHTMLDelNombre.selectedIndex = 0;
        elementoHTMLDeLaEdad.selectedIndex = 0;
        elementoHTMLDeComentarios.value = "";

    }



})