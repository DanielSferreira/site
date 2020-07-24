function AppendModalContent() {
    let text = `
    <div onclick="teste()" class="modal_container" id="modal-background"></div>
    <div id="modal-cotent" class="modal_content animate__animated animate__fadeInDown">
    
            <div class="header_content_modal">
                <span onclick='teste()' id="fecha-modal" class="header_content_modal_close_button fas fa-times" style='font-size:24px'> </span>
                <span class="header_content_modal_title">
                    Mensagem de Teste
                </span>
            </div>

            <section class="modal_descrition">
                <div class="modal_descrition_left">
                    <div><img src="https://s3.amazonaws.com/static-sbcoaching/blog/wp-content/uploads/2019/02/11131153/coach-1-730x411.jpg" alt="abc"/></div>
                             
                <h2>Administrativo</h2>           
                    <table>
                        
                        <tr>
                            <td>Tempo em Hrs:</td>
                            <td>11hrs</td>
                        </tr>
                        <tr>
                            <td>Total de Aulas</td>
                            <td>7 aulas</td>
                        </tr>
                    </table>

                </div>
                <div class="modal_descrition_right">
                <h3>Sobre o curso</h3>
               <p> O curso Administrativo visa capacitar o profissional para executar tarefas administrativas visando o alcance dos objetivos da empresa ou instituição em que está trabalhando, através de diversos conceitos administrativos e contábeis.</p>

                <h3>Conteúdo Programático</h3>
                Aula 1 – Redação de Documentos          <br />
                Aula 2 – Comportamento Profissional     <br />
                Aula 3 – Incidência de Impostos – I     <br />
                Aula 4 – Incidência de Impostos – II    <br />   
                Aula 5 – Matemática Financeira – I      <br />
                Aula 6 – Matemática Financeira – II     <br />
                Aula 7 – Notas Fiscais                  <br />

                <button class="button-star"> <span class="fas fa-star" style=''> </span> Saiba mais </button>
                </div>
            </section>
        </div>`;

    let a = document.createElement("div");
    a.style.setProperty('--animate-duration', '0.6s');
    document.querySelector('#modal-container').innerHTML = text
    return a;
}

window.onload = function () {
    let caixa = document.querySelector('#sub-caixa1');
    let modal = document.querySelector('#modal-container')

    caixa.onclick = () => {
        modal.classList.add("show-modal");
        modal.appendChild(AppendModalContent());
        modal.classList.remove("hide-modal");
    }

}

function teste() {
    let caixa = document.querySelector('#modal-cotent');
    let modal = document.querySelector('#modal-container')

    caixa.classList.remove("animate__fadeInDown");
    caixa.style.setProperty('--animate-duration', '0.3s');
    caixa.classList.add("animate__fadeOutUp");

    setTimeout(function () {
        modal.classList.add("hide-modal");
        modal.innerHTML = '';
        modal.classList.remove("show-modal");
    }, 200)
}