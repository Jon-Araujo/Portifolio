import { darkmode } from "./darkmode.js";
import { popUpProjetos } from "./popUp.js";

darkmode();
popUpProjetos();

const box = document.querySelectorAll(".certificacoes");
const btnCertificados = document.querySelectorAll(".btn-certificacoes");

for (let i = 0; i < btnCertificados.length; i++) {
    let controlador = false;
    btnCertificados[i].addEventListener("click", () => {
        controlador = !controlador;
        if (controlador === true) {
            box[i].style.display = "grid";
        } else {
            box[i].style.display = "none";
        }
    });
}
