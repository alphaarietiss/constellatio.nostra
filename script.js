const btn = document.getElementById('btn-inicio');
const carta = document.getElementById('container-carta');

// Função para gerar os nomes das 17 fotos automaticamente
const gerarCaminhosFotos = () => {
    const caminhos = [];
    for (let i = 1; i <= 17; i++) {
        caminhos.push(`fotos/foto${i}.jpg`);
    }
    return caminhos;
};

const listaFotos = gerarCaminhosFotos();

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    
    // Vamos usar 34 fotos para o coração ficar bem preenchido (repete cada foto 2x)
    const totalPosicoes = 34; 
    
    for (let i = 0; i < totalPosicoes; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            // Pega a foto atual usando o resto da divisão para não estourar o índice 17
            img.src = listaFotos[i % listaFotos.length];
            img.className = 'mini-foto';
            
            // Início: Chuva caindo do topo em lugares aleatórios
            img.style.left = Math.random() * window.innerWidth + 'px';
            img.style.top = '-150px';
            img.style.opacity = '0';
            document.body.appendChild(img);

            // Transição para o formato de coração
            setTimeout(() => {
                const angulo = (i / totalPosicoes) * Math.PI * 2;
                
                // Equação paramétrica do coração (ajustada para telas menores também)
                const x = 16 * Math.pow(Math.sin(angulo), 3);
                const y = -(13 * Math.cos(angulo) - 5 * Math.cos(2 * angulo) - 2 * Math.cos(3 * angulo) - Math.cos(4 * angulo));
                
                const centroX = window.innerWidth / 2;
                const centroY = window.innerHeight / 2 - 50;
                
                // Ajusta o tamanho do coração baseado na largura da tela
                const escala = window.innerWidth < 600 ? 10 : 18; 

                img.style.opacity = '1';
                img.style.left = (centroX + x * escala - 30) + 'px'; // -30 para centralizar a foto de 60px
                img.style.top = (centroY + y * escala - 30) + 'px';
                img.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
            }, 100);

        }, i * 200); // Intervalo de surgimento cinematográfico
    }

    // Liberação da carta
    setTimeout(() => {
        carta.classList.add('visivel');
        document.body.style.overflowY = 'auto'; // Habilita o scroll
        
        // Rola suavemente até a carta
        window.scrollTo({
            top: carta.offsetTop,
            behavior: 'smooth'
        });
    }, 9000); // Tempo para o coração se formar antes de descer
});
