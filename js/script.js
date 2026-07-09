document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // CUENTA ATRÁS
    // ===========================

    const fechaBoda = new Date("2027-04-24T12:00:00").getTime();

    function actualizarContador() {

        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;

        if (diferencia < 0) return;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        const d = document.getElementById("dias");
        const h = document.getElementById("horas");
        const m = document.getElementById("minutos");
        const s = document.getElementById("segundos");

        if (d) d.textContent = dias;
        if (h) h.textContent = horas;
        if (m) m.textContent = minutos;
        if (s) s.textContent = segundos;
    }

    actualizarContador();
    setInterval(actualizarContador, 1000);

    // ===========================
    // SOBRE
    // ===========================

    const boton = document.getElementById("abrir");

if (boton) {
    boton.onclick = function () {
        alert("El botón funciona");
    };
}
    const intro = document.getElementById("intro");
    const sobre = document.getElementById("sobre");

    if (boton && intro && sobre) {

        boton.addEventListener("click", () => {

            sobre.classList.add("abierto");

            setTimeout(() => {
                intro.style.opacity = "0";
            }, 1000);

            setTimeout(() => {
                intro.style.display = "none";
            }, 1800);

        });

    }

});