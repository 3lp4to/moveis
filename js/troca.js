const imagens = [
    "./imagens/DJONATHAN_VINICIUS_BRIESCH_DOS_SANTOS.jpeg",
    "./imagens/JOO_MIGUEL_ZUCUNI_UGULINI.jpeg",
    "./imagens/JOO_VITOR_MARTINS_SAN_MARTIN.JPG",
    "./imagens/logo.jpg", 
    "./imagens/MAURICIO_CARVALHO_COGO.png",
    "./imagens/MURILO_BRAUNER_ZIANI.JPG",
    "./imagens/PEDRO_PETTERINI_PEDROSO.jpg",
    "./imagens/RAFAEL_MLLER_TISCHLER.png",
    "./imagens/VITOR_ZUCHETO_SIMI.jpeg",
    "./imagens/WhatsApp Image 2024-09-03 at 20.19.55 (1).jpeg",
    "./imagens/WhatsApp Image 2024-09-03 at 20.19.55 (2).jpeg", 
    "./imagens/WhatsApp Image 2024-09-03 at 20.19.55.jpeg",
    "./imagens/WhatsApp Image 2024-09-03 at 20.19.56.jpeg",

];
let indiceAtual = 0;

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    document.getElementById("img-troca").src = imagens[indiceAtual];
}


setInterval(trocarImagem, 2000);