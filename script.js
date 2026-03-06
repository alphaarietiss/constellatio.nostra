const btn = document.getElementById('btn-inicio');
const carta = document.getElementById('container-carta');
const musica = document.getElementById('musica-tema');

const totalFotosExistentes = 17;

btn.addEventListener('click', () => {
    if(musica) {
        musica.play().catch(e => console.log("Erro ao tocar música:", e));
    }
    btn.style.display = 'none';
    
    const totalPosicoes = 34; // Quantidade de imagens na tela (dobro das fotos)
    
    for (let i = 0; i < totalPosicoes; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.className = 'mini-foto';
            
            // Define qual número de foto pegar (de 1 a 17)
            const numeroFoto = (i % totalFotosExistentes) + 1;
            
            // Adicionamos ?t=Date.now() para evitar problemas de cache do navegador
            const timestamp = Date.now();
            img.src = `fotos/foto${numeroFoto}.jpg?t=${timestamp}`;

            // Se a extensão .jpg falhar, tenta .JPG (maiúsculo)
            img.onerror = function() {
                if (this.src.includes('.jpg')) {
                    this.src = this.src.replace('.jpg', '.JPG');
                }
            };
            
            // Posição inicial (chuva)
            img.style.left = Math.random() * (window.innerWidth - 60) + 'px';
            img.style.top = '-150px';
            img.style.opacity = '0';
            document.body.appendChild(img);

            // Animação para o Coração
            setTimeout(() => {
                const angulo = (i / totalPosicoes) * Math.PI * 2;
                const x = 16 * Math.pow(Math.sin(angulo), 3);
                const y = -(13 * Math.cos(angulo) - 5 * Math.cos(2 * angulo) - 2 * Math.cos(3 * angulo) - Math.cos(4 * angulo));
                
                const centroX = window.innerWidth / 2;
                const centroY = window.innerHeight / 2 - 50;
                const escala = window.innerWidth < 600 ? 10 : 18; 

                img.style.left = (centroX + x * escala - 30) + 'px';
                img.style.top = (centroY + y * escala - 30) + 'px';
                img.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
                img.style.opacity = '1';
            }, 100);

        }, i * 200);
    }

    // Liberação da carta
    setTimeout(() => {
        carta.classList.add('visivel');
        document.body.style.overflowY = 'auto';
        window.scrollTo({
            top: carta.offsetTop,
            behavior: 'smooth'
        });
    }, 9000);
});
