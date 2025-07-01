document.addEventListener('DOMContentLoaded', function () {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animar elementos con la clase .animate al entrar en el viewport
    gsap.utils.toArray('.wp-block-cover__inner-container > * > *, main .is-layout-flow > *, .is-layout-grid > * > *, #colophon .wp-block-column').forEach(function (element) {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element, // Elemento que activa la animación
                start: 'top 80%', // Inicia cuando el top del elemento está al 80% del viewport
                end: 'bottom 20%', // Termina cuando el bottom del elemento está al 20% del viewport
                toggleActions: 'play none none none', // Reproducir solo una vez
            },
            opacity: 0,
            y: 50,
            duration: 0.3,
        });
    });
});

// Incluye ScrollToPlugin de GSAP en tu proyecto
gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1 && href.startsWith('#')) {
            const target = document.getElementById(href.substring(1));
            if (target) {
                e.preventDefault();
                gsap.to(window, {duration: 0.7, scrollTo: {y: target, offsetY: 0}});
            }
        }
    });
});