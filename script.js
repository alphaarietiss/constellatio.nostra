const btn = document.getElementById('btn-inicio');
const carta = document.getElementById('container-carta');
const musica = document.getElementById('musica-tema');

btn.addEventListener('click', () => {
    // Tenta tocar a música, mas não trava se ela não existir
    if (musica) {
        musica.play().catch(e => console.log("Aguardando interação para áudio"));
    }

    // Esconde o botão
    btn.style.display = 'none';
    
    // Configurações das fotos
    const totalFotosExistentes = 17;
    const totalPosicoesCoracao = 34; 

    for (let i = 0; i < totalPosicoesCoracao; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.className = 'mini-foto';
            
            // Define o número da foto (1 a 17)
            const numero = (i % totalFotosExistentes) + 1;
            img.src = `fotos/foto${numero}.jpg`;

            // Estilo inicial (chuva)
            img.style.left = Math.random() * (window.innerWidth - 70) + 'px';
            img.style.top = '-150px';
            img.style.opacity = '0';
            document.body.appendChild(img);

            // Move para o formato de coração
            setTimeout(() => {
                const angulo = (i / totalPosicoesCoracao) * Math.PI * 2;
                const x = 16 * Math.pow(Math.sin(angulo), 3);
                const y = -(13 * Math.cos(angulo) - 5 * Math.cos(2 * angulo) - 2 * Math.cos(3 * angulo) - Math.cos(4 * angulo));
                
                const centroX = window.innerWidth / 2;
                const centroY = window.innerHeight / 2 - 50;
                const escala = window.innerWidth < 600 ? 10 : 18; 

                img.style.left = (centroX + x * escala - 30) + 'px';
                img.style.top = (centroY + y * escala - 30) + 'px';
                img.style.opacity = '1';
                img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
            }, 100);

        }, i * 200);
    }

    // Mostra a carta após 9 segundos
    setTimeout(() => {
        carta.classList.add('visivel');
        document.body.style.overflowY = 'auto';
        window.scrollTo({ top: carta.offsetTop, behavior: 'smooth' });
    }, 9000);
});
