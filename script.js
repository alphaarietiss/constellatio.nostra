document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn-inicio');
    const carta = document.getElementById('container-carta');

    if (!btn) return;

    btn.addEventListener('click', function() {
        // Esconde o botão imediatamente
        btn.style.display = 'none';
        
        const totalFotos = 17;
        const totalPosicoes = 34; // Dobro para o coração ficar bem preenchido

        for (let i = 0; i < totalPosicoes; i++) {
            setTimeout(() => {
                const img = document.createElement('img');
                img.className = 'mini-foto';
                
                // Pega de foto1.jpg até foto17.jpg
                const num = (i % totalFotos) + 1;
                img.src = `fotos/foto${num}.jpg`;

                // Se a foto falhar (erro de nome ou caminho), ela não aparece
                img.onerror = function() { this.remove(); };

                // Posição inicial da "chuva"
                img.style.left = Math.random() * (window.innerWidth - 70) + 'px';
                img.style.top = '-120px';
                img.style.opacity = '0';
                document.body.appendChild(img);

                // Animação para formar o coração
                setTimeout(() => {
                    const angulo = (i / totalPosicoes) * Math.PI * 2;
                    // Equação do coração
                    const x = 16 * Math.pow(Math.sin(angulo), 3);
                    const y = -(13 * Math.cos(angulo) - 5 * Math.cos(2 * angulo) - 2 * Math.cos(3 * angulo) - Math.cos(4 * angulo));
                    
                    const centroX = window.innerWidth / 2;
                    const centroY = window.innerHeight / 2 - 50;
                    
                    // Ajuste de tamanho para celular ou PC
                    const escala = window.innerWidth < 600 ? 10 : 18; 

                    img.style.left = (centroX + x * escala - 30) + 'px';
                    img.style.top = (centroY + y * escala - 30) + 'px';
                    img.style.opacity = '1';
                    img.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
                }, 100);

            }, i * 150); // Intervalo entre cada foto caindo
        }

        // Mostra a carta e libera o scroll após a animação (8 segundos)
        setTimeout(() => {
            if (carta) {
                carta.classList.add('visivel');
                document.body.style.overflowY = 'auto';
                window.scrollTo({
                    top: carta.offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 8500);
    });
});
