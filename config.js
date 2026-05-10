// ============================================
// EDITABLE PORTFOLIO CONFIGURATION
// Update the values below to customize your portfolio
// ============================================

const PORTFOLIO_CONFIG = {
    // Personal Info
    name: "Anandu S",
    title: "Software Developer",
    tagline: "Motivated and detail-oriented software developer with a strong foundation in computer science, passionate about building real-world applications and contributing to team-driven development.",
    email: "anandupunnayam@gmail.com",
    phone: "+91 9947968927",
    location: "Kochi, Kerala, India",
    resumeLink: "img/ANANDU_S_CV%20(1).pdf", // Link to your resume PDF
    profileImage: "img/Anandus.png", // Replace with your image URL

    // Social Links
    socials: {
        github: "https://github.com/anandus2002",
        linkedin: "https://www.linkedin.com/in/anandu--s",
        twitter: "#",
        leetcode: "#",
        codeforces: "#"
    },

    // About
    about: {
        description: `I'm a motivated and detail-oriented software developer with a strong foundation in computer science principles and hands-on experience in programming languages such as Python, JavaScript, and PHP. Skilled in problem-solving and eager to apply academic knowledge to real-world software development projects. Quick to learn new technologies and passionate about contributing to team-driven development processes. Currently seeking opportunities to grow professionally in a dynamic tech environment.`,
        stats: [
            { label: "Projects Completed", value: 2 },
            { label: "Internships", value: 2 },
            { label: "Years Experience", value: 1 },
            { label: "Technologies", value: 10 }
        ]
    },

    // Education
    education: [
        {
            degree: "High School Education",
            institution: "MAR ELIAS HIGHER SECONDARY SCHOOL, Kottapady, Kerala",
            duration: "2017 - 2018",
            grade: "Percentage: 94%",
            description: "Completed high school education with excellent academic performance."
        },
        {
            degree: "Higher Secondary Education",
            institution: "MAR ELIAS HIGHER SECONDARY SCHOOL, Kottapady, Kerala",
            duration: "2018 - 2020",
            grade: "Percentage: 85%",
            description: "Completed higher secondary education with focus on Science and Mathematics."
        },
        {
            degree: "Bachelor of Technology in Computer Science Engineering",
            institution: "Mar Baselios Institute of Technology and Science, Nellimattam, Ernakulam, Kerala",
            duration: "2020 - 2024",
            grade: "",
            description: "Completed B.Tech in Computer Science Engineering with focus on software development, data structures, and web technologies."
        }
    ],

    // Skills
    skills: [
        { name: "Python", level: 90, category: "Languages" },
        { name: "JavaScript", level: 85, category: "Languages" },
        { name: "HTML/CSS", level: 90, category: "Languages" },
        { name: "PHP", level: 70, category: "Languages" },
        { name: "MySQL", level: 80, category: "Database" },
        { name: "Pandas", level: 85, category: "Data Science" },
        { name: "NumPy", level: 80, category: "Data Science" },
        { name: "Matplotlib", level: 75, category: "Data Science" },
        { name: "Seaborn", level: 75, category: "Data Science" },
        { name: "React.js", level: 85, category: "Frontend" },
        { name: "Django", level: 80, category: "Backend" },
        { name: "Laravel", level: 70, category: "Backend" }
    ],

    // Projects
    projects: [
        {
            title: "Bicycle Rental Website",
            description: "A full-stack bicycle rental platform with user management, rental transactions, and real-time bicycle availability tracking. Features an interactive UI and optimized database for seamless booking experience.",
            tech: ["React.js", "Laravel", "MySQL", "HTML/CSS", "JavaScript"],
            github: "#",
            demo: "#",
            image: "🚲"
        },
        {
            title: "Fall Detection & Remote Monitoring for Elderly",
            description: "IoT-based healthcare solution that detects falls in real-time and alerts caregivers instantly. Includes a React.js dashboard for monitoring elderly individuals with WebSocket-based real-time notifications.",
            tech: ["React.js", "Laravel", "MySQL", "WebSockets", "IoT Sensors"],
            github: "#",
            demo: "#",
            image: "🏥"
        }
    ],

    // Experience
    experience: [
        {
            role: "Data Science Intern",
            company: "Future Optima IT Solutions Pvt Limited",
            duration: "July 2024 - Jan 2025",
            type: "Internship",
            description: [
                "Performed data cleaning, preprocessing, and feature engineering on large datasets using Python (Pandas, NumPy) and SQL",
                "Analyzed business problems using exploratory data analysis (EDA) and visualized insights using Matplotlib and Seaborn",
                "Deployed machine learning models in production environments and monitored performance over time"
            ]
        },
        {
            role: "Software Developer Trainee",
            company: "MdigitzSoft Solutions",
            duration: "Nov 2024 - July 2025",
            type: "Trainee",
            description: [
                "Contributed to design, coding, and testing of websites using Python, HTML/CSS, JavaScript, PHP, React",
                "Gained hands-on experience with frameworks like Laravel, Django and JavaScript library React.js",
                "Collaborated with team members in agile development environment"
            ]
        }
    ],

    // Certifications
    certifications: [
        {
            name: "Data Science & Machine Learning",
            issuer: "Future Optima IT Solutions",
            date: "2025",
            link: "#"
        },
        {
            name: "Full Stack Web Development",
            issuer: "MdigitzSoft Solutions",
            date: "2025",
            link: "#"
        }
    ],

    // Coding Profiles
    codingProfiles: [
        { platform: "GitHub", problems: "10+", rank: "Active Contributor", link: "https://github.com/anandus2002" },
        { platform: "HackerRank", problems: "50+", rank: "Problem Solver", link: "#" },
        { platform: "LeetCode", problems: "30+", rank: "Beginner", link: "#" }
    ],

    // Languages
    languages: [
        { name: "English", level: "Professional" },
        { name: "Tamil", level: "Conversational" },
        { name: "Malayalam", level: "Native" },
        { name: "German", level: "A2" }
    ]
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
