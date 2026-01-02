function carregarTela(arquivo) {
    fetch(`assets/views/${arquivo}`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("conteudo").innerHTML = html;
        })
        .catch(error => {
            console.error("Erro ao carregar tela:", error);
        });
}

window.onload = () => {
    carregarTela("tela1.html");
};
