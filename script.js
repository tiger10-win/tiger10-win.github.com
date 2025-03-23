// Fonction pour activer/désactiver le menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰ Menu';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('.header nav').prepend(menuToggle);

    const menu = document.querySelector('.Menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

// Ajustement dynamique de l'image dans la section présentation
window.addEventListener('resize', () => {
    const image = document.querySelector('#presentation .presentation-image img');
    if (window.innerWidth < 768) {
        image.style.width = '50%'; // Réduit l'image à 50% pour les petits écrans
    } else {
        image.style.width = '30%'; // Rétablit la largeur à 30% pour les écrans plus grands
    }
});

// Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche l'envoi par défaut du formulaire

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs avant de soumettre le formulaire.');
        } else if (!validateEmail(email)) {
            alert('Veuillez entrer une adresse email valide.');
        } else {
            alert('Merci pour votre message !');
            contactForm.reset(); // Réinitialise le formulaire après soumission
        }
    });

    // Fonction pour valider l'email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Défilement fluide pour les liens du menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const targetId = this.getAttribute('href'); // Récupère l'ID de la section cible
        const targetElement = document.querySelector(targetId); // Sélectionne la section cible

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Active le défilement fluide
                block: 'start' // Aligne la section en haut de la fenêtre
            });
        }
    });
});
    
