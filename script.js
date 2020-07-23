
window.onload = function()
{  
    let caixa = document.querySelector('#sub-caixa1');
    let close_modal = document.querySelector('#fecha-modal');
    let modal = document.querySelector('#modal-container');
    
    caixa.onclick = ()=> 
    {
        modal.classList.add("show-modal");
        modal.classList.remove("hide-modal");
    }

    close_modal.onclick = ()=>
    {
        modal.classList.add("hide-modal");
        modal.classList.remove("show-modal");
    }
    modal.onclick = ()=>
    {
        modal.classList.add("hide-modal");
        modal.classList.remove("show-modal");
    }
}