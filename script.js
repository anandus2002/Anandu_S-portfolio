// PORTFOLIO DYNAMIC SCRIPT

document.addEventListener('DOMContentLoaded', () => {
    try {
        renderAllContent();
    } catch(e) {
        console.error('Render error:', e);
    }

    // Always remove loader and make sections visible
    document.body.classList.add('loaded');
    document.querySelectorAll('section').forEach(s => s.classList.add('animate'));

    initCustomCursor();
    initParticleBackground();
    initTypewriter();
    initScrollAnimations();
    initNavigation();
    initMobileMenu();
    initBackToTop();
    initContactForm();
    initTiltEffect();
    initScrambleEffect();
});

function renderAllContent() {
    const c = PORTFOLIO_CONFIG;

    // Hero
    document.querySelector('.name-highlight').textContent = c.name;
    document.querySelector('.hero-description').textContent = c.tagline;
    document.getElementById('hero-profile-img').src = c.profileImage;
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) resumeBtn.href = c.resumeLink;

    // Socials
    const githubLink = document.querySelector('[data-social="github"]');
    const linkedinLink = document.querySelector('[data-social="linkedin"]');
    const twitterLink = document.querySelector('[data-social="twitter"]');
    const leetcodeLink = document.querySelector('[data-social="leetcode"]');
    if (githubLink) githubLink.href = c.socials.github;
    if (linkedinLink) linkedinLink.href = c.socials.linkedin;
    if (twitterLink) twitterLink.href = c.socials.twitter;
    if (leetcodeLink) leetcodeLink.href = c.socials.leetcode;

    // About
    document.getElementById('about-description').textContent = c.about.description;
    renderAboutStats(c.about.stats);
    renderCodeWindow();

    // Education
    renderEducation(c.education);

    // Skills
    renderSkills(c.skills);

    // Projects
    renderProjects(c.projects);

    // Languages
    renderLanguages(c.languages);

    // Experience
    renderExperience(c.experience);

    // Certifications
    renderCodingProfiles(c.codingProfiles);

    // Contact
    document.getElementById('contact-email').textContent = c.email;
    document.getElementById('contact-phone').textContent = c.phone;
    document.getElementById('contact-location').textContent = c.location;

    // Footer
    document.getElementById('footer-name').textContent = c.name;
}

function renderAboutStats(stats) {
    const container = document.getElementById('about-stats');
    if (!container) return;
    container.innerHTML = stats.map(stat =>
        '<div class="stat-item">' +
            '<span class="stat-number" data-target="' + stat.value + '">0</span>' +
            '<span class="stat-label">' + stat.label + '</span>' +
        '</div>'
    ).join('');
}

function renderCodeWindow() {
    const container = document.getElementById('code-content');
    if (!container) return;
    const lines = [
        {n:1, c:'#c586c0', t:'const developer = {'},
        {n:2, c:'#ce9178', t:'  name: "Anandu S",'},
        {n:3, c:'#ce9178', t:'  role: "Software Developer",'},
        {n:4, c:'#ce9178', t:'  skills: ["Python", "React", "Django"],'},
        {n:5, c:'#ce9178', t:'  experience: "1+ years",'},
        {n:6, c:'#569cd6', t:'  ready: true'},
        {n:7, c:'#c586c0', t:'};'},
        {n:8, c:'', t:''},
        {n:9, c:'#dcdcaa', t:'developer.buildAwesomeThings();'},
    ];
    container.innerHTML = lines.map(l =>
        '<div class="code-line">' +
            '<span class="code-number">' + l.n + '</span>' +
            '<span style="color:' + (l.c || '#fff') + '">' + l.t + '</span>' +
        '</div>'
    ).join('');
}

function renderEducation(eduList) {
    const container = document.getElementById('education-timeline');
    if (!container) return;
    container.innerHTML = eduList.map((edu, i) =>
        '<div class="timeline-item" style="animation-delay:' + (i * 0.2) + 's">' +
            '<div class="timeline-content">' +
                '<div class="timeline-header">' +
                    '<h3 class="timeline-degree">' + edu.degree + '</h3>' +
                    '<span class="timeline-duration">' + edu.duration + '</span>' +
                '</div>' +
                '<p class="timeline-grade">' + edu.institution + ' | ' + edu.grade + '</p>' +
                '<p class="timeline-description">' + edu.description + '</p>' +
            '</div>' +
        '</div>'
    ).join('');
}

function renderSkills(skills) {
    const cats = {};
    skills.forEach(s => { if (!cats[s.category]) cats[s.category] = []; cats[s.category].push(s); });
    const container = document.getElementById('skills-categories');
    if (!container) return;
    container.innerHTML = Object.entries(cats).map(([cat, list]) =>
        '<div class="skill-category">' +
            '<h3 class="skill-category-title">' + cat + '</h3>' +
            list.map(s =>
                '<div class="skill-item">' +
                    '<div class="skill-name">' +
                        '<span>' + s.name + '</span>' +
                        '<span class="skill-percentage">' + s.level + '%</span>' +
                    '</div>' +
                    '<div class="skill-bar">' +
                        '<div class="skill-progress" data-level="' + s.level + '" style="width:0%"></div>' +
                    '</div>' +
                '</div>'
            ).join('') +
        '</div>'
    ).join('');
}

function renderProjects(projects) {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = projects.map(p =>
        '<div class="project-card" data-tilt>' +
            '<div class="project-image">' + p.image + '</div>' +
            '<div class="project-content">' +
                '<h3 class="project-title">' + p.title + '</h3>' +
                '<p class="project-description">' + p.description + '</p>' +
                '<div class="project-tech">' +
                    p.tech.map(t => '<span class="tech-tag">' + t + '</span>').join('') +
                '</div>' +
            '</div>' +
        '</div>'
    ).join('');
}

function renderLanguages(languages) {
    const container = document.getElementById('languages-grid');
    if (!container) return;
    container.innerHTML = languages.map(l =>
        '<div class="language-card">' +
            '<div class="language-name">' + l.name + '</div>' +
            '<div class="language-level">' + l.level + '</div>' +
        '</div>'
    ).join('');
}

function renderExperience(experiences) {
    const container = document.getElementById('experience-list');
    if (!container) return;
    container.innerHTML = experiences.map(exp =>
        '<div class="experience-item">' +
            '<div class="experience-badge"><span>' + exp.type + '</span></div>' +
            '<div class="experience-content">' +
                '<h3 class="experience-role">' + exp.role + '</h3>' +
                '<p class="experience-company">' + exp.company + '</p>' +
                '<span class="experience-duration">' + exp.duration + '</span>' +
                '<div class="experience-description">' +
                    exp.description.map(pt => '<p class="experience-point">' + pt + '</p>').join('') +
                '</div>' +
            '</div>' +
        '</div>'
    ).join('');
}



function renderCodingProfiles(profiles) {
    const container = document.getElementById('coding-profiles');
    if (!container) return;
    container.innerHTML =
        '<h3 class="profiles-title">Coding Profiles</h3>' +
        profiles.map(p =>
            '<div class="profile-item">' +
                '<span class="profile-platform">' + p.platform + '</span>' +
                '<div class="profile-stats">' +
                    '<div class="profile-rank">' + p.problems + '</div>' +
                    '<small>' + p.rank + '</small>' +
                '</div>' +
            '</div>'
        ).join('');
}

// TYPEWRITER
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const phrases = ['Software Developer', 'Full Stack Developer', 'Problem Solver', 'Data Science Enthusiast'];
    let pi = 0, ci = 0, del = false, speed = 100;

    function type() {
        const ph = phrases[pi];
        if (del) { el.textContent = ph.substring(0, ci - 1); ci--; speed = 50; }
        else { el.textContent = ph.substring(0, ci + 1); ci++; speed = 100; }
        if (!del && ci === ph.length) { del = true; speed = 2000; }
        else if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; speed = 500; }
        setTimeout(type, speed);
    }
    type();
}

// SCROLL ANIMATIONS
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.id === 'about') animateCounters();
                if (entry.target.id === 'skills') animateSkillBars();
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(s => observer.observe(s));
    document.querySelectorAll('.experience-item').forEach(item => observer.observe(item));
}

function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const level = bar.getAttribute('data-level');
        if (level) bar.style.width = level + '%';
    });
}

function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target')) || 0;
        if (!target) { counter.textContent = '0+'; return; }
        const step = target / 60;
        let current = 0;
        function update() {
            current += step;
            if (current < target) { counter.textContent = Math.floor(current) + '+'; requestAnimationFrame(update); }
            else { counter.textContent = target + '+'; }
        }
        update();
    });
}

// NAVIGATION
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
        navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
        const navbar = document.getElementById('navbar');
        if (navbar) navbar.style.background = window.scrollY > 50 ? 'rgba(10,10,10,0.9)' : 'rgba(255,255,255,0.05)';
    });
}

// MOBILE MENU
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('.nav-link').forEach(l => {
        l.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// BACK TO TOP
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 500));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// CONTACT FORM
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const popup = document.createElement('div');
        popup.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0.8);background:rgba(10,10,10,0.95);padding:3rem;border-radius:20px;border:1px solid rgba(0,242,254,0.3);backdrop-filter:blur(20px);z-index:10000;text-align:center;opacity:0;transition:all 0.3s;';
        popup.innerHTML = '<div style="font-size:3rem;margin-bottom:1rem;">&#9993;</div><h3 style="font-size:1.5rem;margin-bottom:0.5rem;color:white;">Message Sent!</h3><p style="color:#b8bcc8;">Thank you for reaching out. I\'ll get back to you soon!</p>';
        document.body.appendChild(popup);
        requestAnimationFrame(() => { popup.style.opacity = '1'; popup.style.transform = 'translate(-50%,-50%) scale(1)'; });
        setTimeout(() => { popup.style.opacity = '0'; setTimeout(() => popup.remove(), 300); }, 2500);
        form.reset();
    });
}

// 3D TILT
function initTiltEffect() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left, y = e.clientY - r.top;
            const cx = r.width / 2, cy = r.height / 2;
            card.style.transform = 'perspective(1000px) rotateX(' + ((y - cy) / 20) + 'deg) rotateY(' + ((cx - x) / 20) + 'deg) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// TEXT SCRAMBLE
class TextScramble {
    constructor(el) { this.el = el; this.chars = '!<>-_\\/[]{}=+*^?#________'; this.update = this.update.bind(this); }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '', to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '', complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) { complete++; output += to; }
            else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; }
                output += '<span style="color:#00f2fe">' + char + '</span>';
            } else { output += from; }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) this.resolve();
        else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; }
    }
    randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
}

function initScrambleEffect() {
    const titles = document.querySelectorAll('.section-title');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const s = new TextScramble(entry.target);
                s.setText(entry.target.textContent);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    titles.forEach(t => observer.observe(t));
}

// PARTICLE BACKGROUND
function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const count = 80, dist = 150, maxConn = 3;

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1,
            color: 'rgba(' + (100 + Math.random() * 155) + ',' + (200 + Math.random() * 55) + ',255,' + (Math.random() * 0.5 + 0.2) + ')'
        });
    }

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            const dx = mouseX - p.x, dy = mouseY - p.y;
            if (Math.sqrt(dx * dx + dy * dy) < 200) { p.x += dx * 0.0005; p.y += dy * 0.0005; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        for (let i = 0; i < particles.length; i++) {
            let connections = 0;
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < dist && connections < maxConn) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = 'rgba(0,242,254,' + (0.15 * (1 - d / dist)) + ')';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    connections++;
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// CUSTOM CURSOR
function initCustomCursor() {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (!dot || !outline) return;
    if (window.matchMedia('(pointer: coarse)').matches) {
        dot.style.display = outline.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }
    window.addEventListener('mousemove', e => {
        dot.style.left = (e.clientX - 6) + 'px'; dot.style.top = (e.clientY - 6) + 'px';
        outline.style.left = (e.clientX - 20) + 'px'; outline.style.top = (e.clientY - 20) + 'px';
    });
    document.querySelectorAll('a, button, .project-card, .skill-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.transform = 'scale(2)';
            outline.style.transform = 'scale(1.5)';
            outline.style.borderColor = 'rgba(0,242,254,0.8)';
        });
        el.addEventListener('mouseleave', () => {
            dot.style.transform = 'scale(1)';
            outline.style.transform = 'scale(1)';
            outline.style.borderColor = 'rgba(0,242,254,0.5)';
        });
    });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || !href.startsWith('#')) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// PARALLAX
window.addEventListener('scroll', () => {
    const s = window.scrollY;
    const hc = document.querySelector('.hero-content');
    const hi = document.querySelector('.hero-image');
    if (hc) hc.style.transform = 'translateY(' + (s * 0.3) + 'px)';
    if (hi) hi.style.transform = 'translateY(' + (s * 0.1) + 'px)';
});

