// Añade clase a body cuando se hace scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 180) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

// Añade botones de scroll a la izquierda y derecha en el scroll horizontal
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".is-style-group-horizontal-scroll-btns").forEach((content) => {
        if (content.children.length > 1) {
            const rightBtn = document.createElement("button");
            rightBtn.classList.add("scrolling-button", "scrolling-button--right");
            rightBtn.innerHTML = "→";
            rightBtn.disabled = false;

            const leftBtn = document.createElement("button");
            leftBtn.classList.add("scrolling-button", "scrolling-button--left");
            leftBtn.innerHTML = "←";
            leftBtn.disabled = true;

            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("scrolling-button-container");
            buttonContainer.appendChild(leftBtn);
            buttonContainer.appendChild(rightBtn);
            //content.parentNode.insertBefore(buttonContainer, content.nextSibling);
            // Agregar el contenedor de botones antes del contenido
            content.parentNode.insertBefore(buttonContainer, content);

            // Desplazamiento fijo para móvil y desktop
            function getScrollStep() {
                return window.innerWidth < 768 ? 400 : 288;
            }

            rightBtn.addEventListener("click", () => {
                const scrollContent = content;
                const scrollStep = getScrollStep();
                scrollContent.scrollLeft += scrollStep;
                leftBtn.disabled = false;

                if (scrollContent.scrollWidth - scrollContent.scrollLeft - scrollContent.clientWidth <= 0) {
                    rightBtn.disabled = true;
                }
            });

            leftBtn.addEventListener("click", () => {
                const scrollContent = content;
                const scrollStep = getScrollStep();
                scrollContent.scrollLeft -= scrollStep;
                rightBtn.disabled = false;

                if (scrollContent.scrollLeft <= 0) {
                    leftBtn.disabled = true;
                }
            });
        }
    });
});

// Añade drag para los elementos con scroll horizontal
document.addEventListener('DOMContentLoaded', (event) => {
    const sliders = document.querySelectorAll('.is-style-group-horizontal-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    // Añade el evento a cada slider
    sliders.forEach(slider => {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });
    });
  
  });

//Rank Math FAQ Dropdown
document.addEventListener('DOMContentLoaded', (event) => {
    const faqs = document.querySelectorAll('.rank-math-list-item');
    faqs.forEach(faq => {
        const question = faq.querySelector('.rank-math-question');
        question.addEventListener('click', () => {
            faq.classList.toggle('active');
        });
    });
});

// Menu mobile: muestra el título como <li> dentro del submenu
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.wp-block-navigation-submenu__toggle').forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Busca el submenu correspondiente
            const submenu = toggle.parentElement.querySelector('.wp-block-navigation__submenu-container');
            if (submenu) {
                submenu.classList.toggle('is-open-menu');

                // Si ya existe un título, no lo dupliques
                if (!submenu.querySelector('.back-submenu__toggle')) {
                    // Obtiene el texto del botón
                    const label = toggle.querySelector('.wp-block-navigation-item__label');
                    const text = label ? label.textContent : toggle.textContent;

                    // Crea el elemento <li> de título
                    const titleLi = document.createElement('li');
                    titleLi.className = 'back-submenu__toggle';
                    titleLi.textContent = text;

                    // Al hacer click en el título, cierra el submenu
                    titleLi.addEventListener('click', function() {
                        submenu.classList.remove('is-open-menu');
                        setTimeout(() => {
                            titleLi.remove();
                        }, 300); // 300ms igual que tu transición CSS
                    });

                    // Inserta el <li> al principio del submenu
                    submenu.insertBefore(titleLi, submenu.firstChild);
                }
            }
        });
    });
});

// Overlay para el menú responsive
// Crea un overlay que cubre el sitio cuando el menú está abierto
document.addEventListener('DOMContentLoaded', function () {
  const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');
  const siteBlocks = document.querySelector('#masthead .wp-block-navigation');
  let overlay = null;

  function showOverlay() {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'menu-overlay';
      siteBlocks.parentNode.insertBefore(overlay, siteBlocks);
    }
  }

  function hideOverlay() {
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
  }

  // Observa cambios de clase en el menú
  const observer = new MutationObserver(() => {
    if (menuContainer.classList.contains('is-menu-open')) {
      showOverlay();
    } else {
      hideOverlay();
    }
  });

  observer.observe(menuContainer, { attributes: true, attributeFilter: ['class'] });
});

// Livebeep Contact Form
// Asegúrate de que el script de Livebeep esté cargado antes de ejecutar este código
// Verifica si el script de Livebeep está cargado
if (typeof _lbContact === 'undefined' || typeof _lbContact.initCTM !== 'function') {
  console.warn('Livebeep no está cargado o disponible.');
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href="#livebeep"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault(); // Evita el comportamiento por defecto del ancla
      if (typeof _lbContact !== 'undefined' && typeof _lbContact.initCTM === 'function') {
        _lbContact.initCTM({
          'inv_maximize': 0,
          'inv_contact': 'chat'
        });
      } else {
        console.warn('Livebeep no está cargado o disponible.');
      }
    });
  });
});