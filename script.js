const btn = document.getElementById('btn-inicio');
const carta = document.getElementById('container-carta');
const musica = document.getElementById('musica-tema');

// Lista manual para garantir que o navegador tente os dois formatos (.jpg e .JPG)
const gerarCaminhosFotos = () => {
    const caminhos = [];
    for (let i = 1; i <= 17; i++) {
        caminhos.push(`fotos/foto${i}.jpg`);
        caminhos.push(`fotos/foto${i}.JPG`);
    }
    return caminhos;
};

const listaFotosBruta = gerarCaminhosFotos();

btn.addEventListener('click', () => {
    if(musica) musica.play();
    btn.style.display = 'none';
    
    const totalPosicoes = 34; 
    
    for (let i = 0; i < totalPosicoes; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.className = 'mini-foto';
            
            // Lógica para alternar entre as fotos da lista
            // Como a lista tem o dobro (jpg e JPG), usamos o índice para pegar a correta
            img.src = listaFotosBruta[i % listaFotosBruta.length];

            // Tratamento de erro: Se a .jpg falhar, ele tenta a .JPG automaticamente
            img.onerror = function() {
                if (this.src.includes('.jpg')) {
                    this.src = this.src.replace('.jpg', '.JPG');
                } else if (this.src.includes('.JPG')) {
                    this.src = this.src.replace('.JPG', '.jpg');
                }
            };
            
            img.style.left = Math.random() * window.innerWidth + 'px';
            img.style.top = '-150px';
            document.body.appendChild(img);

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

    setTimeout(() => {
        carta.classList.add('visivel');
        document.body.style.overflowY = 'auto';
        window.scrollTo({ top: carta.offsetTop, behavior: 'smooth' });
    }, 9000);
});
