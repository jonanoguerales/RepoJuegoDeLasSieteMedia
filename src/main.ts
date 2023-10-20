import "./style.css";

let puntuacion = 0;

const mensajes = (msj : string) => {
    const errorM = document.querySelector(".error");
    if(errorM !== null && errorM !== undefined && errorM instanceof HTMLElement){
        errorM.textContent = msj;
    }
}

const mostrarCarta = (carta : number) : string | undefined => {
    switch (carta) {
        case 1:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default:
            mensajes("No se encontro el número");
            return undefined;
      }
};

const mostrarPuntuacion = () => {
    const mostrarPuntuacion = document.getElementById("contador");
    if(mostrarPuntuacion !== null && mostrarPuntuacion !== undefined && mostrarPuntuacion instanceof HTMLElement)
        mostrarPuntuacion.textContent = puntuacion.toString();
}
const calcularNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;
const calcularPuntuacionReal = (nAleatorio : number, pt : number) => nAleatorio > 7 ? pt +=0.5 : pt+=1; 
const calcularNumeroCarta = (nAleatorio : number) => nAleatorio > 7 ? nAleatorio +=2 : nAleatorio; 
const pintarCarta = (url : string) => {
    const cartaImg = document.querySelector(".imagen");
    if(cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement){
        cartaImg.src = url;
    }else{
        console.log("No se encontro la carta")
    }
}

const dameCarta = () => {

    const numeroAleatorio = calcularNumeroAleatorio();

    const puntuacionReal = calcularPuntuacionReal(numeroAleatorio, puntuacion);

    puntuacion = puntuacionReal; 

    // 8 aleatorio ---> carta 10
    const numeroCarta = calcularNumeroCarta(numeroAleatorio);

    const urlImagen = mostrarCarta(numeroCarta); //string con el src

    
    if(puntuacion < 8) {
        if (urlImagen !== undefined) {
            pintarCarta(urlImagen)
          } else {
            console.log("urlImagen es undefined");
          }
        pintarPuntuacion();
    } else {
      deshabilitar(true);
      pintarPuntuacion();
    }
  };

const plantarme = () => {
    puntuaciones();
    nuevaPartida("block");
};

function nuevaPartida(smj : string){
    const botonNueva = document.querySelector(".nueva");
    if (botonNueva !== null && botonNueva !== undefined && botonNueva instanceof HTMLButtonElement) {
        botonNueva.style.display = smj;
    } else {
        console.error("No se encontro el elemento nuevo");
    }
}

function pintarPuntuacion(){
    if(puntuacion > 7.5){
        mensajes("Game Over");
        deshabilitar(true);
        ocultar("none");
        nuevaPartida("block");

    };
    mostrarPuntuacion();
}

const puntuaciones = () => {
    deshabilitar(true);
    ocultar("block")
    if(puntuacion > 4){
        if(puntuacion === 7.5 ){
            mensajes("¡ Lo has clavado! ¡Enhorabuena!");
        }else if(puntuacion === 5 || puntuacion === 5.5){
            mensajes("Te ha entrado el canguelo eh?");
        }else if(puntuacion === 6  || puntuacion === 7){
            mensajes ("Casi casi...");
        }else{
            mensajes ("Game Over");
        }
    }else{
        mensajes("Has sido muy conservador");
    }
}
function deshabilitar (msj : boolean){
    const botonAñadir = document.querySelector(".añadir");
    if (botonAñadir !== null && botonAñadir !== undefined && botonAñadir instanceof HTMLButtonElement) {
        botonAñadir.disabled = msj;
    } else {
        console.error("No se encontro el elemento añadir");
    }
}

function ocultar (msj : string){
    const botonSaber = document.querySelector(".saber");
    if (botonSaber !== null && botonSaber !== undefined && botonSaber instanceof HTMLButtonElement) {
        botonSaber.style.display = msj;
    } else {
        console.error("No se encontro el elemento saber");
    }
}

function saber(){
    deshabilitar(false);
    ocultar("none");
    mensajes("");
}

function recargarPagina() {
    deshabilitar(false);
    ocultar("none");
    nuevaPartida("none")
    mensajes("");
    puntuacion = 0;
    mostrarPuntuacion();

}
 
function eventos(){
    const botonAñadir = document.querySelector(".añadir");
    if (botonAñadir !== null && botonAñadir !== undefined && botonAñadir instanceof HTMLButtonElement) {
            botonAñadir.addEventListener("click", dameCarta);
        } else {
            console.error("No se encontro el elemento añadir");
        }
        
        const botonPlantarse = document.querySelector(".plantarse");    
        if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
            botonPlantarse.addEventListener("click", plantarme);
        } else {
            console.error("No se encontro el elemento plantarse");
        }
        
        const botonNueva = document.querySelector(".nueva");
        if (botonNueva !== null && botonNueva !== undefined && botonNueva instanceof HTMLButtonElement) {
                botonNueva.addEventListener("click", recargarPagina);
            } else {
                console.error("No se encontro el elemento nuevo");
            }
            
        const botonSaber = document.querySelector(".saber");
        if (botonSaber !== null && botonSaber !== undefined && botonSaber instanceof HTMLButtonElement) {
                botonSaber.addEventListener("click", saber);
            } else {
                console.error("No se encontro el elemento saber");
        }

    
};

document.addEventListener("DOMContentLoaded", () =>{eventos(); mostrarPuntuacion();});
    