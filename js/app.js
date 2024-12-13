let quantidadeAlugada = 0;

function alterarStatus(id){

    let gameClicado = document.getElementById(`game-${id}`);

    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameClicado.querySelector('.dashboard__item__name');
    
        
            if(imagem.classList.contains('dashboard__item__img--rented')){
               
                resposta = prompt('Você quer confirmar a devolução do(a) '+ nomeDoJogo.innerText);

                if(resposta.toLowerCase() == 'sim'){
                
                imagem.classList.remove('dashboard__item__img--rented');
                botao.classList.remove('dashboard__item__button--return');
                botao.innerText = 'Alugar';

                }else if(resposta.toLowerCase() == 'nao' || resposta.toLowerCase() == 'não'){
                    return ;
                }else {
                    alert('Resposta Inválida!');
                }

            }else {
                imagem.classList.add('dashboard__item__img--rented');
                botao.classList.add('dashboard__item__button--return');
                botao.innerText = 'Devolver';
                quantidadeAlugada++;   
                console.log(quantidadeAlugada);        
            }
            
            
}
