const skills = [
    'TypeScript', 'React', 'Next.js', 'Node.js',
    'Python', 'AWS', 'Docker', 'PostgreSQL',
    'REST APIs', 'CI/CD', 'Team Leadership', 'Agile',
];

const grid = document.getElementById('skills-grid');
if (grid) {
    skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag';
        tag.textContent = skill;
        grid.appendChild(tag);
    });
}