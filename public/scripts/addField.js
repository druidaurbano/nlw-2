//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField);


//Executar uma acao
function cloneField() {
    //Duplica
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);


    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');

    // para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = "";
    });

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
    
