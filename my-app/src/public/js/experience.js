const experiences = [
    {
        company: 'Your Company',
        role: 'Lead Software Developer',
        period: '2022 – Present',
        bullets: [
            'Led a team of engineers to deliver scalable solutions',
            'Architected and built core platform features',
            'Improved system performance significantly',
        ],
    },
    {
        company: 'Previous Company',
        role: 'Software Developer',
        period: '2019 – 2022',
        bullets: [
            'Developed full-stack features across multiple products',
            'Collaborated with cross-functional teams',
        ],
    },
];

const projects = [
    {
        name: 'This Portfolio',
        tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        description: 'Personal portfolio website built with vanilla HTML/CSS/JS and Node.js.',
        link: '#',
    },
];

// Render Experience
const expList = document.getElementById('experience-list');
if (expList) {
    experiences.forEach(exp => {
        expList.innerHTML += `
        <div class="card">
            <div class="exp-header">
                <div>
                    <div class="exp-role">${exp.role}</div>
                    <div class="exp-company">${exp.company}</div>
                </div>
                <span class="exp-period">${exp.period}</span>
            </div>
            <ul class="exp-bullets">
                ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
        </div>`;
    });
}

// Render Projects
const projGrid = document.getElementById('projects-grid');
if (projGrid) {
    projects.forEach(proj => {
        projGrid.innerHTML += `
        <div class="card">
            <div class="proj-name">${proj.name}</div>
            <div class="proj-desc">${proj.description}</div>
            <div class="proj-tags">
                ${proj.tech.map(t => `<span class="proj-tag">${t}</span>`).join('')}
            </div>
            ${proj.link ? `<a href="${proj.link}" class="proj-link" target="_blank">View Project →</a>` : ''}
        </div>`;
    });
}