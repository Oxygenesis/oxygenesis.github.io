document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubRepos();
});

function fetchGitHubRepos() {
    const username = 'oxygenesis'; // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(repos => {
            const projectsSection = document.getElementById('projects-container');
            repos.forEach(repo => {
                projectsSection.innerHTML += `
                    <div class="repo">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description available.'}</p>
                        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching GitHub repos:', error));
}
// Existing GitHub API integration code...

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
