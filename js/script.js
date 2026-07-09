// ===========================
// CUENTA ATRÁS
// ===========================

const fechaBoda = new Date("April 24, 2027 17:30:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia < 0) return;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();
setInterval(actualizarContador, 1000);

// ===========================
// SOBRE DE BIENVENIDA
// ===========================

const botonAbrir = document.getElementById("abrir");
const intro = document.getElementById("intro");
const sobre = document.querySelector(".sobre");

if (botonAbrir) {

    botonAbrir.addEventListener("click", () => {

        sobre.classList.add("abierto");

        setTimeout(() => {
            intro.style.opacity = "0";
        }, 1000);

        setTimeout(() => {
            intro.style.display = "none";
        }, 1800);

    });

}