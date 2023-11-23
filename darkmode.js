export function darkmode() {
    const btnDark = document.querySelector('.btn-darkmode');
    const bodyPage = document.body;
    const texto = document.querySelectorAll('.texto');
    const navbar = document.querySelector('.navbar');
    const navLink = document.querySelectorAll('.nav-link');
    const btnContato = document.querySelector('.btn-contato');
    const molduraFotoPrincipal = document.getElementById('moldura-foto');
    const btnCurriculo = document.querySelector('.btn-curriculo')
    const githubLight = document.querySelector('.github-icone-light');
    const certificacoes = document.querySelectorAll('.certificacoes');
    const btnCertificacoes = document.querySelectorAll(".btn-certificacoes");


    btnDark.addEventListener("click", () => {
        bodyPage.classList.toggle('dark-mode-body');
        texto.forEach(element => element.classList.toggle('dark-texto-cor'));

        navbar.classList.toggle('navbar-dark');
        navLink.forEach(element => element.classList.toggle('nav-link-dark'));

        btnContato.classList.toggle('borda-dark');

        molduraFotoPrincipal.classList.toggle('borda-dark');
        btnCurriculo.classList.toggle('borda-dark');

        githubLight.classList.toggle('github-icone-dark');

        btnDark.classList.toggle('btn-lightMode');

        certificacoes.forEach(element => element.classList.toggle('certificacoes-dark'));

        btnCertificacoes.forEach(element => element.classList.toggle('btn-certificacoes-dark'));

    });
}