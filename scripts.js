function consultaEndereco() {
   let cep = document.querySelector('#cep').value; 

    if (cep.length != 8) {
        alert('CEP inválido!'); 
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`; 

    fetch(url)
    .then((response) => {response.json()
    .then((data) => {mostrarEndereco(data)})
    })
} 

function mostrarEndereco(dados) {
    let resultado = document.querySelector('#resultado'); 

    resultado.innerHTML =  `<p> Endereço: ${dados.logradouro} </p>
                            <p> Complemento: ${dados.complemento} </p> 
                            <p> Bairro: ${dados.bairro} </p> 
                            <p> Endereço: ${dados.localidade} - UF: ${dados.uf} </p>`
}
