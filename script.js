const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'AI', 'Data Analysis', 'Computer Vision'];
const projects = [
    { 
        name: 'AI Chatbot', 
        description: 'An intelligent chatbot using NLP and machine learning algorithms',
        image: 'https://source.unsplash.com/random/300x200?chatbot,ai'
    },
    { 
        name: 'Image Recognition App', 
        description: 'Mobile app for real-time image classification using deep learning',
        image: 'https://source.unsplash.com/random/300x200?image,recognition'
    },
    { 
        name: 'Data Visualization Dashboard', 
        description: 'Interactive dashboard for big data analysis with customizable charts',
        image: 'https://source.unsplash.com/random/300x200?data,visualization'
    },
    { 
        name: 'Predictive Maintenance System', 
        description: 'IoT-based system for predicting equipment failures using machine learning',
        image: 'https://source.unsplash.com/random/300x200?iot,maintenance'
    }
];

const populateSkills = () => {
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.textContent = skill;
        skillElement.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        skillsContainer.appendChild(skillElement);
    });
}

const populateProjects = () => {
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-img">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectElement.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        projectsContainer.appendChild(projectElement);
    });
}

const checkScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

const parallaxEffect = () => {
    const parallaxSections = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        parallaxSections.forEach(section => {
            const scrollPosition = window.pageYOffset;
            const sectionSpeed = 0.5;
            const yOffset = scrollPosition * sectionSpeed;
            section.style.backgroundPositionY = `${yOffset}px`;
        });
    });
}

const addSectionDividers = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index > 0) {
            const divider = document.createElement('div');
            divider.classList.add('section-divider');
            section.insertBefore(divider, section.firstChild);
        }
    });
}

const app = () => {
    navSlide();
    populateSkills();
    populateProjects();
    addSectionDividers(); // Add this line
    window.addEventListener('scroll', () => {
        checkScroll();
        parallaxEffect();
    });
    checkScroll(); // Check on initial load
    parallaxEffect(); // Add this to your existing app() function
}

app();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});