// Script básico para alertar o usuário em cada página
document.addEventListener('DOMContentLoaded', () => {
    if (document.title === "Página Inicial - Lionel Messi") {
        alert("Bem-vindo ao site sobre Lionel Messi!");
    } else if (document.title === "História de Messi") {
        alert("Descubra a história de Lionel Messi.");
    } else if (document.title === "Títulos de Messi") {
        alert("Conheça os títulos de Lionel Messi.");
    }
});
