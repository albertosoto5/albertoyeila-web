document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // CUENTA ATRÁS
    // ===========================

    const fechaBoda = new Date("2027-04-24T12:00:00").getTime();

    function actualizarContador() {

        const ahora = Date.now();
        const diferencia = fechaBoda - ahora;

        if (diferencia < 0) return;

        document.getElementById("dias").textContent =
            Math.floor(diferencia / 86400000);

        document.getElementById("horas").textContent =
            Math.floor((diferencia % 86400000) / 3600000);

        document.getElementById("minutos").textContent =
            Math.floor((diferencia % 3600000) / 60000);

        document.getElementById("segundos").textContent =
            Math.floor((diferencia % 60000) / 1000);

    }

    actualizarContador();
    setInterval(actualizarContador, 1000);

    // ===========================
    // INTRO
    // ===========================

    const boton = document.getElementById("abrir");
    const intro = document.getElementById("intro");

    if (boton && intro) {

        boton.addEventListener("click", (e) => {

            e.preventDefault();

            // Volver al inicio antes de mostrar la web
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
            });

            intro.style.opacity = "0";

            setTimeout(() => {
                intro.style.display = "none";
            }, 800);

        });

    }

});

// ===========================
// ANIMACIONES AL HACER SCROLL
// ===========================

const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

elementos.forEach(elemento => {

    observer.observe(elemento);

});