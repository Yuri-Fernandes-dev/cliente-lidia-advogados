document.addEventListener('DOMContentLoaded', function() {
    // Menu hamburger para dispositivos móveis
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-menu a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburgerMenu) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (hamburgerMenu && navMenu && 
            !hamburgerMenu.contains(event.target) && 
            !navMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Scroll suave apenas para links dentro da mesma página
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada para elementos ao scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar elementos para animar
    const animateElements = document.querySelectorAll('.service-item, .inicio-text, .inicio-image, .sobre-text, .sobre-image, .servicos-intro, .servicos-footer');
    animateElements.forEach(element => {
        element.classList.add('animate');
        observer.observe(element);
    });
    
    // Definir índices para os itens de serviço para animação escalonada
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            // Simular envio (em produção, aqui seria uma chamada AJAX)
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }

    // Efeito Typewriter para os serviços
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const services = [
            'Pensão Alimentícia',
            'Divórcio, união estável e partilha',
            'Guarda, visitas e convivência com menores',
            'Execução/cobrança de pensões em atraso',
            'Investigação/reconhecimento de paternidade',
            'Planejamento sucessório e Inventário',
            'Procedimento de Interdição, Tutela e Curatela',
            'Adoção'
        ];
        
        let currentServiceIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let pauseEnd = false;
        
        function typeWriter() {
            const currentService = services[currentServiceIndex];
            
            if (!isDeleting && !pauseEnd) {
                // Digitando
                typewriterElement.textContent = currentService.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                
                if (currentCharIndex === currentService.length) {
                    pauseEnd = true;
                    setTimeout(typeWriter, 2000); // Pausa de 2 segundos no final
                    return;
                }
                
                setTimeout(typeWriter, 100); // Velocidade de digitação
            } else if (pauseEnd) {
                // Preparando para apagar
                isDeleting = true;
                pauseEnd = false;
                setTimeout(typeWriter, 50);
            } else {
                // Apagando
                typewriterElement.textContent = currentService.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                
                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentServiceIndex = (currentServiceIndex + 1) % services.length;
                    setTimeout(typeWriter, 500); // Pausa antes de começar o próximo
                    return;
                }
                
                setTimeout(typeWriter, 50); // Velocidade de apagar
            }
        }
        
        // Iniciar o efeito typewriter após 1 segundo
        setTimeout(typeWriter, 1000);
    }
}); 