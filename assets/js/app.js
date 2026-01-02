// Carrega uma tela dentro do <main id="conteudo">
function carregarTela(nomeArquivo) {
    fetch(`assets/views/${nomeArquivo}`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("conteudo").innerHTML = html;
        });
}

// Carrega a tela inicial automaticamente
document.addEventListener("DOMContentLoaded", () => {
    carregarTela("tela1.html");
});
