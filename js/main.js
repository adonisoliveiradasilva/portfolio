// Smooth scrolling para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = "rgba(15, 23, 42, 0.98)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.backgroundColor = "rgba(15, 23, 42, 0.9)";
        header.style.boxShadow = "none";
    }
});

// Animação de Scroll (Fade Up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Anima apenas uma vez
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});