const btnDark = document.querySelector('.btn-darkmode');
const bodyPage = document.body;

btnDark.addEventListener("click", () => {
    bodyPage.classList.toggle("dark-mode-body")
})
