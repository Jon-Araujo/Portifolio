export async function popUpProjetos() {
    const listaJson = await (await fetch("./projetos.json")).json();
    const listaProjetos = listaJson.projetos;
    const cardVerMais = document.querySelectorAll('.card-projeto');

    for (let i = 0; i < cardVerMais.length; i++) {
        cardVerMais[i].insertAdjacentHTML('afterend', `
            <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel${i}" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel${i}">${listaProjetos[i].titulo}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            `)
    }
}
