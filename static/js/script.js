document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 510){
        const items = document.querySelectorAll('.menu-wheel-item');
        const total = items.length;
        let animating = false; // Flag pour bloquer les actions durant l'animation
        let mouseInside = false; // Suivi de la présence de la souris dans le conteneur

        // Calcule la position relative (entre -2 et 2 pour 5 items) en tenant compte de la circularité
        function getRelativePosition(i, activeIndex) {
            let diff = i - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;
            return diff;
        }
        // Associe la position relative à une classe CSS
        function getPositionClass(diff) {
            switch(diff) {
                case -2:
                case 3:
                    return 'pos0';
                case -1:
                case 4:
                    return 'pos1';
                case 0:
                    return 'pos2';
                case 1:
                    return 'pos3';
                case 2:
                    return 'pos4';
                default:
                    return 'pos4';
            }
        }
        // Met à jour les classes de position de chaque item selon l'élément actif
        function updatePositions(activeIndex) {
            items.forEach((item, i) => {
                const diff = getRelativePosition(i, activeIndex);
                const posClass = getPositionClass(diff);
                item.classList.remove('pos0', 'pos1', 'pos2', 'pos3', 'pos4');
                item.classList.add(posClass);
            });
        }
        
        // Détermine l'index initial de l'élément actif
        let activeIndex = 0;
        items.forEach((item, i) => {
            if (item.classList.contains('active')) {
                activeIndex = i;
            }
        });
        const defaultActiveIndex = activeIndex; // Sauvegarde l'index par défaut

        // Désactiver temporairement les transitions pour éviter l'animation initiale
        items.forEach(item => {
            item.style.transition = 'none';
        });

        // Appliquer les positions dès le chargement sans animation
        updatePositions(activeIndex);

        // Forcer le reflow pour que le navigateur prenne en compte la suppression de transition
        void document.body.offsetWidth;

        // Réactiver les transitions après l'initialisation
        items.forEach(item => {
            item.style.transition = '';
        });
        
        // Récupère le conteneur du menu
        const container = document.querySelector('.menu');
        
        // Suivi des entrées de souris dans le conteneur
        container.addEventListener('mouseenter', function() {
            mouseInside = true;
        });
        
        // Lorsque la souris quitte le conteneur
        container.addEventListener('mouseleave', function() {
            mouseInside = false;
            if (!animating) {
                // Réinitialisation immédiate si aucune animation n'est en cours
                items[activeIndex].classList.remove('active');
                activeIndex = defaultActiveIndex;
                items[activeIndex].classList.add('active');
                updatePositions(activeIndex);
            }
        });
        
        // Gestion du survol sur chaque item
        items.forEach((item, i) => {
            item.addEventListener('mouseenter', function() {
                if (animating) return;
                if (i !== activeIndex) {
                    animating = true;
                    items[activeIndex].classList.remove('active');
                    activeIndex = i;
                    item.classList.add('active');
                    updatePositions(activeIndex);
                    // À la fin de l'animation (1s), on vérifie si la souris est toujours dans le menu
                    setTimeout(() => {
                        animating = false;
                        if (!mouseInside && activeIndex !== defaultActiveIndex) {
                            // Réinitialisation si la souris n'est plus dans le menu
                            items[activeIndex].classList.remove('active');
                            activeIndex = defaultActiveIndex;
                            items[activeIndex].classList.add('active');
                            updatePositions(activeIndex);
                        }
                    }, 1000);
                }
            });
        });
    }
    else {
        const burger = document.querySelector('.burger-menu');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        burger.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
    });
    }
});



if (document.getElementsByClassName('vitrine-carousel-item')){
    document.addEventListener('DOMContentLoaded', function(){
        const items = document.querySelectorAll('.vitrine-carousel-item');
        const indicators = document.querySelectorAll('.vitrine-carousel-indicator .indicator');
        let currentIndex = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
                indicators[i].classList.toggle('active', i === index);
            });
        }

        // Navigation par flèche gauche
        document.querySelector('.vitrine-carousel-arrow.left').addEventListener('click', function(){
            currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
            showItem(currentIndex);
        });

        // Navigation par flèche droite
        document.querySelector('.vitrine-carousel-arrow.right').addEventListener('click', function(){
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });

        // Navigation en cliquant sur les indicateurs
        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', function(){
                currentIndex = i;
                showItem(currentIndex);
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Pour chaque carrousel de la page
    document.querySelectorAll('.realisations-item-images').forEach(function(carousel) {
        const items = carousel.querySelectorAll('.realisations-item-images-carousel');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentIndex = 0;
        
        function showItem(index) {
            items[currentIndex].classList.remove('active');
            indicators[currentIndex].classList.remove('active');
            currentIndex = index;
            items[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');
        }
        
        let leftArrow = carousel.querySelector('.realisations-item-images-carousel-arrow.left');
        if (leftArrow) {
            leftArrow.addEventListener('click', function() {
                const newIndex = (currentIndex - 1 + items.length) % items.length;
                showItem(newIndex);
            });
        }

        let rightArrow = carousel.querySelector('.realisations-item-images-carousel-arrow.right');
        if (rightArrow) {
            rightArrow.addEventListener('click', function() {
                const newIndex = (currentIndex + 1) % items.length;
                showItem(newIndex);
            });
        }
        
        // Clic sur l'indicateur pour aller directement à l'image correspondante
        indicators.forEach(function(indicator, index) {
            indicator.addEventListener('click', function() {
                showItem(index);
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Pour chaque carrousel de la page
    document.querySelectorAll('.portfolio-item-images').forEach(function(carousel) {
        const items = carousel.querySelectorAll('.portfolio-item-images-carousel');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentIndex = 0;
        
        function showItem(index) {
            items[currentIndex].classList.remove('active');
            indicators[currentIndex].classList.remove('active');
            currentIndex = index;
            items[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');
        }
        
        let leftArrow = carousel.querySelector('.portfolio-item-images-carousel-arrow.left');
        if (leftArrow) {
            leftArrow.addEventListener('click', function() {
                const newIndex = (currentIndex - 1 + items.length) % items.length;
                showItem(newIndex);
            });
        }

        let rightArrow = carousel.querySelector('.portfolio-item-images-carousel-arrow.right');
        if (rightArrow) {
            rightArrow.addEventListener('click', function() {
                const newIndex = (currentIndex + 1) % items.length;
                showItem(newIndex);
            });
}

        
        // Clic sur l'indicateur pour aller directement à l'image correspondante
        indicators.forEach(function(indicator, index) {
            indicator.addEventListener('click', function() {
                showItem(index);
            });
        });
    });
});
