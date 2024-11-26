// Seletor do carrossel
const carousel = document.querySelector('.carousel');

// Adicionar um evento de transição no carrossel
carousel.addEventListener('transitionend', () => {
    // Selecionar todos os vídeos dentro do carrossel
    const videos = carousel.querySelectorAll('video, iframe');

    // Parar a reprodução de todos os vídeos
    videos.forEach(video => {
        if (video.tagName === 'VIDEO') {
            video.pause();
            video.currentTime = 0; // Opcional: reinicia o vídeo
        } else if (video.tagName === 'IFRAME') {
            const src = video.src;
            video.src = ''; // Reseta o iframe temporariamente
            video.src = src; // Reaplica o src para parar o vídeo
        }
    });
});
