function inserirNome(){
    let nomeUsuario = prompt("Qual é o seu nome?");
    let elemeto = document.querySelector("#nome-usuario");
    elementoSaudações.textContent = nomeUsuario;
}