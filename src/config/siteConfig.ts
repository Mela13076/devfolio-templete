export const siteConfig = {
    siteName: "Devfolio",
    name: "Your Name Here",
    metadataTitle: "Developer Portfolio Template",
    siteDescription:
        "A modern, customizable developer portfolio template built with Next.js, Tailwind CSS, and MDX.",
    socials: {
        github: "https://github.com/username",
        linkedin: "https://linkedin.com/in/username",
        twitter: "https://twitter.com/username",
    },    
    showDevLogo: false, // Set to true to show a developer logo (</>) with site name, false for just site name


    // ========================= NAVIGATION =========================
    navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Blogs", href: "/blogs" },
        { label: "Contact", href: "/contact" },
    ],

    // ========================= HERO SECTION CONFIG =========================
    hero: {
        headline: "Hi, I'm",
        subtitle:
        "Software Engineer | Full Stack Developer | Empowering the Next Generation of Coders",
        profileImage: "/profile.jpg",
        ctaPrimary: "View Projects",
        ctaSecondary: "Contact Me",
    },

    // ========================= ABOUT PAGE CONFIG =========================
    about: {
        bio: `I'm a passionate Full Stack Developer and mentor who loves building secure, scalable systems and helping others grow in tech.`,

        skills: {
        frontend: [
            "React / Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML / CSS",
            "Redux",
            "Framer Motion",
            "Figma",
        ],
        backend: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "Django",
            "REST APIs",
            "JWT Auth",
            "Socket.IO",
        ],
        cloud: ["Azure", "AWS", "CI/CD Pipelines", "Cloudinary"],
        ai_security: [
            "Python",
            "NumPy/Pandas",
            "Cybersecurity Fundamentals",
            "ML / Data Mining",
        ],
        tools: ["Git/GitHub", "VS Code", "Postman", "Notion/Trello/Asana", "Agile"],
        },

        experience: [
            {
                role: "Full Stack Developer",
                company: "Tech Solutions Inc.",
                duration: "Jan 2022 - Present",
                points: [
                    "Developed and maintained web applications using React, Node.js, and PostgreSQL.",
                    "Led a team of 4 developers to build a cloud-based inventory management system.",
                    "Implemented CI/CD pipelines to streamline deployment processes.",
                ],
            },
             {
                role: "Full Stack Developer",
                company: "Tech Solutions Inc.",
                duration: "Jan 2022 - Present",
                points: [
                    "Developed and maintained web applications using React, Node.js, and PostgreSQL.",
                    "Led a team of 4 developers to build a cloud-based inventory management system.",
                    "Implemented CI/CD pipelines to streamline deployment processes.",
                ],
            },
            // Add more experiences as needed
        ], 

        education: [
            {
                degree: "B.S. in Computer Science",
                institution: "State University",
                duration: "2018 - 2022",
                details: [
                    "Graduated with Honors, GPA: 3.8/4.0",
                    "Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development",
                    "Activities: Coding Club President, Hackathon Organizer",
                ]
                    
            }, 
            // Add more education entries as needed
        ]
    },

    // ========================= CONTACT PAGE CONFIG =========================
    contact: {
        header: "Contact Me",
        description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.",
        email: "example@example.com",
        phone: "+1 (123) 456-7890",
        location: "Remote",
    },

    // ========================= Resend CONFIG =========================
    resend: {
        fromEmail: "Portfolio Contact <contact@yourdomain.com>", 
        toEmail: "your.email@domain.com", // your personal email
    },

    // ========================= FOOTER CONFIG =========================
    footer: {
        copyrightName: "Your Name",
        copyrightYear: "2025",
        details: "Customizable developer portfolio template built with Next.js, Tailwind CSS, and MDX.",
    },
};

export default siteConfig;
