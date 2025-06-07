// Typewriter Effect
const text = "Hi, I'm [Your Name]";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector('.hero h1').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on Scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Dark/Light Mode Toggle
document.querySelector('.toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Project Sorting
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
