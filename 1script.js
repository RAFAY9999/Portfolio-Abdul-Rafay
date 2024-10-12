// Smooth Scroll for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Update active class
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Search functionality (example)
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar .search-btn');

searchButton.addEventListener('click', () => {
    const query = searchBar.value.toLowerCase();
    const projects = document.querySelectorAll('.project-card');

    projects.forEach(project => {
        const projectTitle = project.querySelector('h3').textContent.toLowerCase();
        if (projectTitle.includes(query)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
