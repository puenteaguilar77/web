// Datos de proyectos
const projects = {
    intelisis: {
        title: "Intelisis Web",
        description: "Desarrollo frontend completo para el sistema ERP Intelisis Web utilizando AngularJS 1.8.3. Implementé microservicios para funcionalidades escalables, integración de librerías como Chart.js para reportes, Calendar.io para gestión de agendas, Summer Note para editores de texto enriquecido y DevExpress para componentes empresariales avanzados. El proyecto incluye diseño responsivo optimizado para todos los dispositivos.",
        images: [
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVza3RvcCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ]
    },
    "pos-fashion": {
        title: "POS Fashion",
        description: "Módulo de punto de venta especializado para la industria de la moda desarrollado con SDK Intelisis. Implementé una interfaz optimizada para procesos de venta rápida, gestión de inventario en tiempo real y reportes de ventas con Chart.js. El sistema incluye funcionalidades específicas para moda como gestión de tallas, colores y temporadas.",
        images: [
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9zJTIwc3lzdGVtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV0YWlsJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        ]
    },
    alivean: {
        title: "Sistema Médico Alivean",
        description: "Aplicación web para consultas y cotizaciones médicas desarrollada con Node.js y MySQL. Implementé un sistema de microservicios para procesamiento de datos médicos, portal administrativo para gestión de catálogos y reportes, y APIs REST para integración con sistemas externos. La aplicación logró incrementar su efectividad del 50% al 97%.",
        images: [
            "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYWwlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZGljYWwlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        ]
    }
};

// Elementos DOM
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-links a');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const projectGallery = document.getElementById('projectGallery');
const projectDescription = document.getElementById('projectDescription');
const modalClose = document.querySelector('.modal-close');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');
const mobileOverlay = document.querySelector('.mobile-overlay');
const skillBars = document.querySelectorAll('.skill-progress');

// Menú móvil - FUNCIONA CORRECTAMENTE
function toggleMobileMenu() {
    navLinksContainer.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMobileMenu() {
    navLinksContainer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners para menú móvil
mobileMenu.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// Cerrar menú al hacer clic en enlaces
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Cerrar menú con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Cerrar menú al redimensionar
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Scroll para cambiar navegación activa
window.addEventListener('scroll', () => {
    // Header con efecto al hacer scroll
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Actualizar navegación activa
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Abrir modal de proyectos
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projects[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            projectDescription.innerHTML = `<p>${project.description}</p>`;
            
            // Limpiar galería anterior
            projectGallery.innerHTML = '';
            
            // Agregar imágenes a la galería
            project.images.forEach(image => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `<img src="${image}" alt="${project.title}" class="gallery-img">`;
                projectGallery.appendChild(galleryItem);
            });
            
            // Mostrar modal
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Cerrar modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer clic fuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animación de barras de habilidades
function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (isElementInViewport(bar)) {
            bar.style.width = width + '%';
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    contactForm.reset();
});


// ========== FUNCIONALIDAD DE TEMA CLARO/OSCURO ==========

// Elementos del tema
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferencia del usuario
function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Aplicar tema
function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

// Actualizar icono del tema
function updateThemeIcon(theme) {
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            themeToggle.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            icon.className = 'fas fa-moon';
            themeToggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
    }
}

// Alternar tema
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// Inicializar tema
function initTheme() {
    const preferredTheme = getThemePreference();
    applyTheme(preferredTheme);
}

// Event listeners para el tema
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Escuchar cambios en las preferencias del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// Inicializar
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
    initTheme(); // Inicializar tema
});