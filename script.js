document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('#hero-video');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        heroVideo.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    });
    

    // Existing code for navigation menu toggle and smooth scrolling
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Highlight the current day in the opening hours
    const today = new Date().getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const hoursList = document.querySelector('#hours ul');
    
    if (hoursList) {
        const listItems = hoursList.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent.includes(days[today])) {
                listItems[i].style.fontWeight = 'bold';
                listItems[i].style.backgroundColor = '#8b0000';
                listItems[i].style.color = '#ffffff';
            }
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add fade-in animation for sections
    const sections = document.querySelectorAll('section');
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, fadeInOptions);

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });
});
