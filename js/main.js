// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação de fade-in para elementos quando entram na viewport
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Adiciona a classe animate aos elementos que queremos animar
document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate');
    observer.observe(section);
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nearTop = currentScroll < 80;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        if (nearTop) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
    }
    lastScroll = currentScroll;
});

// Renderiza os projetos
const projetosGrid = document.querySelector('.projects-grid');

projetos.forEach(projeto => {
    const projetoCard = document.createElement('div');
    projetoCard.className = 'project-card';
    
    projetoCard.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.titulo}" class="project-image">
        <div class="project-content">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <div class="project-tech">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${projeto.link}" class="btn primary" target="_blank">Ver Projeto</a>
        </div>
    `;
    
    projetosGrid.appendChild(projetoCard);
}); 