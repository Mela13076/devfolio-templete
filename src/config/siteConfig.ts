
//If you want to include blogs on your site, set showBlogs to true, otherwise set to false
// If you set to true, make sure to create your blog mdx files in contents/blogs/
const showBlogs = true;

export const siteConfig = {
    // ========================= Global Settings =========================
    siteName: "Devfolio",
    name: "Your Name Here",
    metadataTitle: "Developer Portfolio Template",
    siteDescription:
        "A modern, customizable developer portfolio template built with Next.js, Tailwind CSS, and MDX.",
    tabIcon: "/icon.svg", //An image found in the public folder to use as the tab icon. 
    socials: {
        github: {
            show: true,
            url: "https://github.com/username",
        },
        linkedin: {
            show: true,
            url: "https://linkedin.com/in/username",
        },
        twitter: {
            show: true,
            url: "https://twitter.com/username",
        }
    },
    showDevLogo: false, // Set to true to show a developer logo (</>) with site name, false for just site name
    siteColorTheme: "teal", // Options: blue, green, purple, pink, orange, red, yellow, teal


    // ========================= NAVIGATION =========================
    navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        ...(showBlogs ? [
            { label: "Blogs", href: "/blogs" }
        ] : []),
        { label: "Contact", href: "/contact" },
    ],

    // ========================= HERO SECTION CONFIG =========================
    hero: {
        headline: "Hi, I'm",
        subtitle:
        "Software Engineer | Full Stack Developer | Empowering the Next Generation of Coders",
        profileImage: "/profile.jpg",
        ctaPrimary: {
            include: true,
            label: "View Projects",
            href: "/projects",
        },
        ctaSecondary: {
            include: true,
            label: "Contact Me",
            href: "/contact",
        },
    },

    // ========================= ABOUT PAGE CONFIG =========================
    about: {
        bio: `I'm a passionate Full Stack Developer and mentor who loves building secure, scalable systems and helping others grow in tech.`,

        skills: {
            frontend: {
                name: "Frontend",
                include: true,
                skill:[
                    "React / Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "HTML / CSS",
                    "Redux",
                    "Framer Motion",
                    "Figma",
                ]
            },
            backend: {
                name: "Backend",
                include: true,
                skill:[
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "MongoDB",
                    "Django",
                    "REST APIs",
                    "JWT Auth",
                    "Socket.IO",
                ],
            },
            cloud: {
                name: "Cloud & DevOps",
                include: true,
                skill: ["Azure", "AWS", "CI/CD Pipelines", "Cloudinary"]
            },
            ai_security: {
                name: "AI/ Data Science & Security",
                include: true,
                skill:[
                    "Python",
                    "NumPy/Pandas",
                    "Cybersecurity Fundamentals",
                    "ML / Data Mining",
                ],
            },
            tools: {
                name: "Tools & Collaboration",
                include: true,
                skill: ["Git/GitHub", "VS Code", "Postman", "Notion/Trello/Asana", "Agile"],
            },
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

    // ========================= Blogs PAGE CONFIG =========================
    // if you want to include a blogs on your site, set showBlogs to true (found on top), otherwise set to false
    
    blogs: {
        include: showBlogs, //Don't change this line
        description: "Read my latest articles on web development, programming tips, and tech trends.",
    },

    // ========================= CONTACT PAGE CONFIG =========================
    contact: {
        header: "Contact Me",
        description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.",
        email: "example@example.com",
        phone: "+1 (123) 456-7890",
        location: "Remote",
        includeForm: true, // Set to true to include contact form, false to hide
    },

    // ========================= Resend CONFIG =========================
    //Change if using the contact form
    resend: {
        fromEmail: "Portfolio Contact <onboarding@resend.dev>", 
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
