document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
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
}); 