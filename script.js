const btn = document.querySelector('.modalBtn')
//fazendo evento de click
btn.addEventListener('click',abrirModal)

const btnb = document.querySelector('.btnFechar')
btnb.addEventListener('click',fecharModal)

function abrirModal(){
    const modal = document.querySelector('.modal')
    const modalAtual = modal.style.display

    if(modalAtual == 'block'){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block'
    }

}

function fecharModal(){
    const modal = document.querySelector('.modal')
    const modalAtual = modal.style.display

    if(modalAtual == 'none'){
        modal.style.display = 'block'
    }else{
        modal.style.display = 'none'
    }
}