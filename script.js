// Navbar scroll effect — toggle .scrolled class
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in effect to elements
const fadeElements = document.querySelectorAll('.feature-card, .menu-item, .timeline-item, .story-content, .visit-content, .article-section');
fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add stagger effect to menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Add stagger effect to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Phone number spam protection — assembled client-side so bots can't scrape it
(function() {
    var el = document.querySelector('.phone-number span[data-p1]');
    if (el) {
        var num = el.dataset.p1 + el.dataset.p2 + el.dataset.p3;
        el.textContent = num.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    }
    var callBtn = document.querySelector('.call-btn');
    if (callBtn && el) {
        var num = el.dataset.p1 + el.dataset.p2 + el.dataset.p3;
        callBtn.href = 'tel:' + num;
    }
})();

// Image placeholder hover effect
const imagePlaceholders = document.querySelectorAll('.image-placeholder');
imagePlaceholders.forEach(placeholder => {
    placeholder.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    placeholder.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.position = 'fixed';
scrollProgress.style.top = '0';
scrollProgress.style.left = '0';
scrollProgress.style.height = '3px';
scrollProgress.style.background = 'linear-gradient(to right, #E85D55, #FF8B85)';
scrollProgress.style.zIndex = '9999';
scrollProgress.style.transition = 'width 0.1s ease';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});
