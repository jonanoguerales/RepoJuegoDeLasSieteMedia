import "./style.css";

let puntuacion = 0;

const mostrarPuntuacion = document.getElementById("contador") as HTMLElement | null;
const cartaImg = document.querySelector(".imagen") as HTMLImageElement | null;
const errorM = document.querySelector(".error") as HTMLImageElement | null;
const botonAñadir = document.querySelector(".añadir") as HTMLButtonElement | null;
const botonPlantarse = document.querySelector(".plantarse") as HTMLButtonElement | null;
const botonNueva = document.querySelector(".nueva") as HTMLButtonElement | null;
const botonSaber = document.querySelector(".saber") as HTMLButtonElement | null;

const mostrarCarta = (carta : number) : void => {
    switch (carta) {
        case 1:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
                puntuacion += 1;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 2:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
                puntuacion += 1;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 3:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
                puntuacion += 1;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 4:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
                puntuacion += 1;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 5:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
                puntuacion += 1;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 6:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
                puntuacion += 1;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 7:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
                puntuacion += 1;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 10:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
                puntuacion += 0.5;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 11:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
                puntuacion += 0.5;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        case 12:
            if(cartaImg && mostrarPuntuacion){
                cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
                puntuacion += 0.5;
                mostrarPuntuacion.textContent = puntuacion.toString();
            }
            break;
        default:
            if(errorM && mostrarPuntuacion){
                errorM.textContent = "El número no corresponde"
            }
          break;
      }
};


const dameCarta = () => {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    numeroAleatorio > 7 ? numeroAleatorio +=2 : numeroAleatorio;
    if( puntuacion < 7.5){
        mostrarCarta(numeroAleatorio);
        muestraPuntuacion();
    }else{
        botonAñadir? botonAñadir.disabled = true : "";
    }
}

function muestraPuntuacion(){
    if(puntuacion > 7.5){
        errorM? errorM.textContent = "Game Over" : "";
        botonAñadir? botonAñadir.disabled = true : "";
        botonNueva ? botonNueva.style.display = "block" : "";
    };
    mostrarPuntuacion ? mostrarPuntuacion.textContent = puntuacion.toString() : "";
}

const puntuaciones = () => {
    botonAñadir? botonAñadir.disabled = true : "";
    botonNueva ? botonNueva.style.display = "block" : "";
    botonSaber ? botonSaber.style.display = "block" : "";
    if(puntuacion > 4){
        switch (puntuacion) {
            case 7.5:
                errorM ? errorM.textContent = "¡ Lo has clavado! ¡Enhorabuena!" : "";
            break;
            case 5:
                errorM ? errorM.textContent = "Te ha entrado el canguelo eh?" : "";
            break;
            case 6:
                errorM ? errorM.textContent = "Casi casi..." : "";
            break;
            case 7:
                errorM ? errorM.textContent = "Casi casi..." : "";
            break;
            default:
                errorM ? errorM.textContent = "Te has Plantado" : "";
            break;
        }
    }else{
        errorM ? errorM.textContent = "Has sido muy conservador" : "";
    }
}

function saber(){
    botonAñadir? botonAñadir.disabled = false : "";
    botonSaber ? botonSaber.style.display = "none" : "";
    errorM ? errorM.textContent = "" : "";
}

function recargarPagina() {
    location.reload();
}
    
botonAñadir?.addEventListener("click", dameCarta);
botonPlantarse?.addEventListener("click", puntuaciones);
botonNueva?.addEventListener("click", recargarPagina);
botonSaber?.addEventListener("click", saber);
    
    