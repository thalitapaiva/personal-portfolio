// Animação de rolagem suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
            behavior: 'smooth'
        });
    });
});

// Animação de entrada para elementos quando entram na viewport
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .tech-icon, .contact-btn');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Adicionar classe ao cabeçalho quando rolar a página
const header = document.querySelector('header');
const toggleHeaderClass = () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Inicializar animações e eventos
window.addEventListener('load', () => {
    // Adicionar classes CSS para animações
    document.querySelectorAll('.project-card, .tech-icon, .contact-btn').forEach(element => {
        element.classList.add('animate-ready');
    });
    
    // Executar animações iniciais
    setTimeout(animateOnScroll, 300);
    
    // Adicionar event listeners
    window.addEventListener('scroll', () => {
        animateOnScroll();
        toggleHeaderClass();
    });
});

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    .animate-ready {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    header.scrolled {
        padding: 10px 50px;
        background-color: rgba(0, 0, 0, 0.9);
    }
    
    @media (max-width: 768px) {
        header.scrolled {
            padding: 10px 20px;
            background-color: rgba(0, 0, 0, 0.9);
        }
    }
`;
document.head.appendChild(style);

// Função para mostrar detalhes do projeto
function showProjectDetails(projectId, projectTitle, projectDescription) {
    alert(`${projectTitle}\n\n${projectDescription}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });
    }
});



// Adicionar funcionalidade de modo escuro com sabre de luz de Star Wars
const createDarkModeToggle = () => {
    const header = document.querySelector('header');
    
    if (header) {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.classList.add('dark-mode-toggle');
        darkModeToggle.innerHTML = '<i class="fas fa-jedi"></i>';
        darkModeToggle.title = 'Toggle dark mode';
        
        // Criar o elemento do sabre de luz
        const lightsaber = document.createElement('div');
        lightsaber.classList.add('lightsaber');
        lightsaber.innerHTML = `
            <div class="lightsaber-hilt"></div>
            <div class="lightsaber-blade"></div>
        `;
        
        darkModeToggle.appendChild(lightsaber);
        
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                lightsaber.querySelector('.lightsaber-blade').classList.remove('blue');
                lightsaber.querySelector('.lightsaber-blade').classList.add('red');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                lightsaber.querySelector('.lightsaber-blade').classList.remove('red');
                lightsaber.querySelector('.lightsaber-blade').classList.add('blue');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
        
        // Verificar preferência salva
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            lightsaber.querySelector('.lightsaber-blade').classList.add('red');
        } else {
            lightsaber.querySelector('.lightsaber-blade').classList.add('blue');
        }
        
        header.appendChild(darkModeToggle);
        
        // Adicionar estilos para o modo escuro e sabre de luz
        const darkModeStyles = document.createElement('style');
        darkModeStyles.textContent = `
            .dark-mode-toggle {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                transition: color 0.3s ease;
                position: relative;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 20px;
            }
            
            .dark-mode-toggle:hover {
                color: #0E2780;
            }
            
            .lightsaber {
                position: absolute;
                bottom: -40px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                transition: all 0.3s ease;
            }
            
            .lightsaber-hilt {
                width: 8px;
                height: 15px;
                background-color: #999;
                border-radius: 2px;
                box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
                z-index: 2;
            }
            
            .lightsaber-blade {
                width: 4px;
                height: 0;
                border-radius: 2px;
                position: relative;
                top: -2px;
                transition: all 0.3s ease;
                animation: glow 1.5s infinite alternate;
            }
            
            .lightsaber-blade.blue {
                background-color: #0E2780;
                box-shadow: 0 0 10px #0E2780, 0 0 20px #0E2780;
                height: 30px;
            }
            
            .lightsaber-blade.red {
                background-color: #ff0000;
                box-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000;
                height: 30px;
            }
            
            .dark-mode-toggle:hover .lightsaber-blade.blue {
                height: 40px;
                box-shadow: 0 0 15px #0E2780, 0 0 30px #0E2780;
            }
            
            .dark-mode-toggle:hover .lightsaber-blade.red {
                height: 40px;
                box-shadow: 0 0 15px #ff0000, 0 0 30px #ff0000;
            }
            
            @keyframes glow {
                from {
                    opacity: 0.8;
                }
                to {
                    opacity: 1;
                }
            }
            
            body.dark-mode {
                background: linear-gradient(to bottom, #000000, #1a1a2e);
                color: #e0e0e0;
            }
            
            body.dark-mode header {
                background-color: rgba(0, 0, 0, 0.9);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
            }
            
            body.dark-mode header.scrolled {
                background-color: rgba(0, 0, 0, 0.95);
            }
            
            body.dark-mode .logo {
                background-color: #ff0000;
                box-shadow: 0 4px 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.8);
            }
            
            body.dark-mode nav ul li a {
                color: #e0e0e0;
            }
            
            body.dark-mode nav ul li a:hover {
                color: #ff0000;
                text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
            }
            
            body.dark-mode .highlight {
                color: #ff0000;
                text-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
            }
            
            body.dark-mode .hero {
                background-color: rgba(0, 0, 0, 0.7);
            }
            
            body.dark-mode .btn.primary {
                background-color: #ff0000;
                border-color: #ff0000;
                box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
            }
            
            body.dark-mode .btn.primary:hover {
                background-color: #ff3333;
                border-color: #ff3333;
                box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
            }
            
            body.dark-mode .project-card {
                background-color: rgba(30, 30, 30, 0.8);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 0, 0, 0.2);
            }
            
            body.dark-mode .project-img {
                background-color: #444;
                border: 1px solid #333;
            }
            
            body.dark-mode .project-card p {
                color: #ccc;
            }
            
            body.dark-mode h2::after {
                background-color: #ff0000;
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
            }
            
            body.dark-mode .technologies {
                background-color: rgba(20, 20, 20, 0.8);
            }
            
            body.dark-mode .contact-btn {
                background-color: rgba(255, 0, 0, 0.2);
                color: #e0e0e0;
                box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
            }
            
            body.dark-mode .contact-btn:hover {
                box-shadow: 0 0 25px rgba(255, 0, 0, 0.7);
                background-color: rgba(255, 0, 0, 0.5);
            }
            
            body.dark-mode .contact-btn i {
                color: #ff0000;
                text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
            }
            
            body.dark-mode footer {
                background-color: rgba(0, 0, 0, 0.9);
            }
            
            body.dark-mode .tech-icon i {
                color: #ff0000;
                text-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
            }
            
            body.dark-mode .tech-icon:hover i {
                color: #ff3333;
                text-shadow: 0 0 20px rgba(255, 51, 51, 0.9);
            }
            
            body.dark-mode .social-icons a {
                color: #ff0000;
                background: rgba(255, 0, 0, 0.1);
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
            }
            
            body.dark-mode .social-icons a:hover {
                background: rgba(255, 0, 0, 0.4);
                box-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
            }
        `;
        document.head.appendChild(darkModeStyles);
    }
};

// Função para mostrar detalhes dos projetos
const showProjectDetails = (projectId, title, description) => {
    // Verificar se já existe um modal e removê-lo
    const existingModal = document.querySelector('.project-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Criar o modal
    const modal = document.createElement('div');
    modal.classList.add('project-modal');
    
    // Conteúdo do modal
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${title}</h2>
            <div class="modal-body">
                <p>${description}</p>
            </div>
            ${projectId === 'portfolio' ? 
                '' : 
                `<div class="modal-footer">
                    <a href="https://github.com/thalitapaiva/${projectId === 'pokedex' ? 'pokedex' : 'numerosecreto-alura'}" target="_blank" class="btn primary">Ver no GitHub</a>
                </div>`
            }
        </div>
    `;
    
    // Adicionar o modal ao body
    document.body.appendChild(modal);
    
    // Mostrar o modal com animação
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Fechar o modal ao clicar no X
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    // Fechar o modal ao clicar fora dele
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
    
    // Prevenir a propagação do evento de clique
    return false;
};

// Adicionar estilos para o modal
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .project-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(5px);
    }
    
    .project-modal.show {
        opacity: 1;
    }
    
    .modal-content {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        width: 90%;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 0 30px rgba(14, 39, 128, 0.5);
        transform: translateY(20px);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(14, 39, 128, 0.3);
    }
    
    .project-modal.show .modal-content {
        transform: translateY(0);
    }
    
    .close-modal {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 2rem;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: rgba(255, 0, 0, 0.2);
        z-index: 1002;
    }
    
    .close-modal:hover {
        color: #ffffff;
        background-color: rgba(255, 0, 0, 0.5);
        transform: scale(1.1);
    }
    
    .modal-content h2 {
        padding: 20px 20px 10px;
        color: #0E2780;
        text-shadow: 0 0 10px rgba(14, 39, 128, 0.5);
        margin-bottom: 10px;
    }
    
    .modal-body {
        padding: 0 20px 20px;
        color: #ffffff;
    }
    
    .modal-footer {
        padding: 0 20px 20px;
        display: flex;
        justify-content: flex-end;
    }
    
    body.dark-mode .modal-content {
        background-color: rgba(51, 51, 51, 0.9);
        box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
        border: 1px solid rgba(255, 0, 0, 0.3);
    }
    
    body.dark-mode .modal-content h2 {
        color: #ff0000;
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
    }
    
    body.dark-mode .close-modal:hover {
        color: #ff0000;
    }
    
    @media (max-width: 768px) {
        .modal-content {
            width: 95%;
            max-height: 85vh;
        }
    }
`;
document.head.appendChild(modalStyles);

// Inicializar o toggle de modo escuro
document.addEventListener('DOMContentLoaded', createDarkModeToggle);