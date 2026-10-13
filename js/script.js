// Seleciona o container da Logo Avigos
const avigosLogo = document.getElementById('logoAVIGOS');

if (avigosLogo) {
    // Quando o mouse entra: ativa o loop do texto e inicia a animação do galo
    avigosLogo.addEventListener('mouseenter', () => {
        avigosLogo.classList.add('hovered');
    });

    // Quando o mouse sai: reseta o galo para o estado estático e para a pulsação
    avigosLogo.addEventListener('mouseleave', () => {
        avigosLogo.classList.remove('hovered');
    });
}
