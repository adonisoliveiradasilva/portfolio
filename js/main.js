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