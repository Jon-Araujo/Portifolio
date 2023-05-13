export async function popUpProjetos() {
    const listaJson = await (await fetch("./projetos.json")).json();
    const listaProjetos = listaJson.projetos;
    const cardVerMais = document.querySelectorAll('.card-projeto');

    for (let i = 0; i < cardVerMais.length; i++) {
        cardVerMais[i].insertAdjacentHTML('afterend', `
            <div class="modal fade" id="card${i}" tabindex="-1" aria-labelledby="cardLabel${i}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div class="modal-content" style="background-color: var(--cor-cinza)">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="cardLabel${i}">${listaProjetos[i].titulo}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex">
                            <video style="width: 60%;" src="${listaProjetos[i].video}" autoplay="autoplay" loop="loop"></video>
                            <div class="d-flex flex-column text-start" style="width: 40%; padding: 0 0.5rem 0 3rem;">
                                <p class="fs-5 fw-normal">${listaProjetos[i].descricao}</p>
                                <p class="fs-6">${listaProjetos[i].data}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <a href="${listaProjetos[i].projeto}" target="_blank"><button type="button" class="btn-link-popUp btn me-4">Projeto</button></a>
                            <a href="${listaProjetos[i].repositorio}" target="_blank"><button type="button" class="btn-link-popUp btn me-4">Repositório</button></a>
                            <a href="${listaProjetos[i].linkedin}" target="_blank"><button type="button" class="btn-link-popUp btn">Publicação</button></a>
                        </div>
                    </div>
                </div>
            </div>
            `)
    }
}
