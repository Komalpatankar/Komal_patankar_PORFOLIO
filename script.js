// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        if (name && email && subject && message) {
            alert(`Thank you ${name}! Your message has been received. I'll get back to you soon!`);
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Resume dropdown download handler
function downloadSelectedResume(selectElement) {
    const url = selectElement.value;
    if (url) {
        window.open(url, '_blank');
    }
}

// Active navigation highlight on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Close mobile menu when clicking on links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbar) {
            navbar.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', updateActiveNav);
