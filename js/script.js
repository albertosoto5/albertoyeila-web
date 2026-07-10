document.addEventListener("DOMContentLoaded", () => {

    const fechaBoda = new Date("2027-04-24T12:00:00").getTime();

    function actualizarContador(){

        const ahora = Date.now();
        const diferencia = fechaBoda - ahora;

        if(diferencia < 0) return;

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
    setInterval(actualizarContador,1000);

    const boton=document.getElementById("abrir");
    const intro=document.getElementById("intro");

    boton.addEventListener("click",()=>{

        intro.style.opacity="0";

        setTimeout(()=>{
            intro.style.display="none";
        },800);

    });

});