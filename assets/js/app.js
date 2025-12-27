// Lista inicial de itens essenciais
let essenciais = [
    "Café",
    "Açúcar",
    "Copos descartáveis",
    "Guardanapos",
    "Leite",
    "Biscoitos"
];

let participantes = [];

// Renderiza itens essenciais
function renderEssenciais() {
    const lista = document.getElementById("listaEssenciais");
    lista.innerHTML = "";

    essenciais.forEach((item, index) => {
        lista.innerHTML += `
            <li>
                ${item}
                <button onclick="removerEssencial(${index})">X</button>
            </li>
        `;
    });
}

function addEssencial() {
    let item = document.getElementById("novoEssencial").value;
    if (item.trim() === "") return;

    essenciais.push(item);
    document.getElementById("novoEssencial").value = "";
    renderEssenciais();
}

function removerEssencial(i) {
    essenciais.splice(i, 1);
    renderEssenciais();
}

// Renderiza participantes
function renderParticipantes() {
    const lista = document.getElementById("listaParticipantes");
    lista.innerHTML = "";

    participantes.forEach((p, index) => {
        lista.innerHTML += `
            <li>
                ${p.nome} → <strong>${p.item}</strong>
                <button onclick="removerParticipante(${index})">X</button>
            </li>
        `;
    });
}

function addParticipante() {
    let nome = document.getElementById("participante").value;
    let item = document.getElementById("item").value;

    if (nome.trim() === "" || item.trim() === "") return;

    participantes.push({ nome, item });

    document.getElementById("participante").value = "";
    document.getElementById("item").value = "";

    renderParticipantes();
}

function removerParticipante(i) {
    participantes.splice(i, 1);
    renderParticipantes();
}

// Inicializa tudo
renderEssenciais();
renderParticipantes();
