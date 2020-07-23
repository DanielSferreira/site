function AppendModalContent() {
    let text = `<div id="modal-cotent" class="modal_content animate__animated animate__fadeInDown">
            <div class="header_content_modal">
                <span onclick='teste()' id="fecha-modal" class="header_content_modal_close_button fas fa-times" style='font-size:24px'> </span>
                <span class="header_content_modal_title">
                    Mensagem de Teste
                </span>
            </div>

            <section class="modal_descrition">
                <div class="modal_descrition_left">
                    <div>imagem com o curso</div>
                    <h5>Curso Tal:</h5>
                </div>
                <div class="modal_descrition_right">descricao e modulos</div>
            </section>
    </div>`;

    let a = document.createElement("div");
    a.style.setProperty('--animate-duration', '0.6s');
    a.classList.add("show-modal");
    a.innerHTML = text;

    return a;
}

window.onload = function () {
    let caixa = document.querySelector('#sub-caixa1');
    let modal = document.getElementById('modal-container')

    caixa.onclick = () => {
        modal.classList.add("show-modal");
        modal.appendChild(AppendModalContent());
        modal.classList.remove("hide-modal");
    }

}

function teste() {
    let caixa = document.querySelector('#modal-cotent');
    let modal = document.getElementById('modal-container')
    
    caixa.classList.remove("animate__fadeInDown");
    caixa.style.setProperty('--animate-duration', '0.3s');
    caixa.classList.add("animate__fadeOutUp");
    
    setTimeout(function () {
        modal.classList.add("hide-modal");
        modal.innerHTML = '';
        modal.classList.remove("show-modal");
    }, 200)
}