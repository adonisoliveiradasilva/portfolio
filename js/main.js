// Navegação Ativa e Scroll Suave
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if(targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Compensação do header
                behavior: 'smooth'
            });
        }
    });
});

// Sombra elegante no Header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.03)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Animação de entrada (Fade Up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// ==========================================================================
// Efeito: Chuva de Pétalas de Maehwa
// ==========================================================================
function createPetal() {
    const container = document.getElementById('petal-container');
    const petal = document.createElement('div');
    petal.classList.add('petal');

    // Tamanho aleatório da pétala (entre 8px e 15px)
    const size = Math.random() * 7 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    // Posição horizontal aleatória (0% a 100% da tela)
    petal.style.left = `${Math.random() * 100}vw`;

    // Duração aleatória da queda (entre 6s e 12s para ser suave)
    const fallDuration = Math.random() * 6 + 10;
    petal.style.animationDuration = `${fallDuration}s, ${Math.random() * 2 + 2}s`;

    container.appendChild(petal);

    // Remove a pétala do HTML assim que a animação de queda termina
    setTimeout(() => {
        petal.remove();
    }, fallDuration * 1000);
}

// Cria uma nova pétala a cada 400 milissegundos
// Se quiser mais pétalas, diminua o número. Se quiser menos, aumente (ex: 800)
setInterval(createPetal, 3000);

// ==========================================================================
// Controle de Imersão Sonora (Música de Fundo)
// ==========================================================================
const musicBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const musicText = document.querySelector('.music-text');
const musicIcon = document.querySelector('.music-icon i');
let isPlaying = false;

// Define o volume bem baixinho para ser agradável (20%)
bgMusic.volume = 0.2;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicText.textContent = "Ativar Imersão";
        musicIcon.className = "fas fa-music";
        musicBtn.classList.remove('playing');
    } else {
        bgMusic.play();
        musicText.textContent = "Pausar Imersão";
        musicIcon.className = "fas fa-pause";
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});