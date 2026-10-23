export const heroData = {
  img: "/images/135179135.jpg",
  hi: "Hello! I am",
  name: "Christian",
  expertise: ["Software Engineer", "Web Developer"],
  about:
    "Currently a Software Engineer at Piikū Co. and currently a Computer Science student at the University of Hawaiʻi at Mānoa. I build full-stack web and mobile apps with React, React Native, Next.js, and TypeScript.",
  btnText: "My resume",
  url: "/Christian_Low_Resume.pdf",
};

export const aboutData = {
  title: "About My",
  cards: [
    {
      title: "Past",
      text: "At Purple Maia Foundation I helped build the Kilo Dashboard, mapping water quality and environmental data across Hawaiʻi with Leaflet.js and State GIS APIs, shaped by feedback from 50+ ʻĀina Stewards practitioners.",
    },
    {
      title: "Present",
      text: "Currently a Software Engineer at Piikū Co., building Foodland's Maikai Rewards app with React Native and TypeScript, an app that reaches 92%+ of Hawaiʻi households, while studying Computer Science at UH Mānoa.",
    },
    {
      title: "Future",
      text: "I graduate in May 2027 and want to keep building products that serve real communities, from mobile apps to data-heavy web platforms. I'm open to roles where I can contribute meaningfully and keep growing.",
    },
  ],
};

export const experienceData = {
  title: "Experience",
  jobs: [
    {
      role: "Software Engineer",
      company: "Piikū Co.",
      location: "Honolulu, HI",
      dates: "July 2026 – Present 2026",
      technologies: ["React Native", "Expo", "TypeScript", "NativeWind", "Storybook", "GitHub Actions", "EAS"],
      bullets: [
        "Architected full-stack mobile components and REST API integrations for Foodland's Maikai Rewards app using React Native (Expo SDK 57), TypeScript, and NativeWind 4, reaching 92%+ of Hawaiʻi households.",
        "Integrated a third-party loyalty API engine for secure customer account lookups, real-time points calculations, and digital card barcode generation, decoupled from WordPress/MiniOrange auth.",
        "Established an isolated Storybook design system (Vite/Web & Native) to standardize reusable components and optimize Tailwind CSS styling.",
        "Standardized code quality across a multi-repo ecosystem with ESLint flat configs, Prettier Tailwind sorting, cspell, and Husky pre-commit hooks.",
        "Shipped features in agile sprints with cross-functional product and design teams, backed by GitHub Actions and EAS CI/CD automation.",
      ],
    },
    {
      role: "Software Developer",
      company: "Purple Maia Foundation",
      location: "Honolulu, HI",
      dates: "May 2025 – August 2025",
      technologies: ["Leaflet.js", "REST APIs", "GIS"],
      bullets: [
        "Contributed to the Kilo Dashboard, using Leaflet.js and Hawaiʻi State GIS REST APIs to map geographic, water quality, and environmental data across high-risk island zones.",
        "Synthesized feedback from 50+ ʻĀina Stewards practitioners to design interactive mapping features for water quality, species tracking, and soil health monitoring.",
        "Achieved 100% REST API integration reliability by standardizing geospatial data ingestion pipelines for field researchers, volunteers, and restoration teams.",
        "Established code review protocols, technical API documentation, and standardized git workflows.",
      ],
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C", "HTML/CSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "React Native (Expo)",
        "Next.js",
        "Node.js",
        "NativeWind",
        "Tailwind CSS",
        "Prisma",
        "Leaflet.js",
        "WebSockets",
      ],
    },
    {
      title: "Developer Tools & Infrastructure",
      skills: [
        "GitHub Actions",
        "EAS",
        "Storybook",
        "Docker",
        "PostgreSQL",
        "Supabase",
        "Render",
        "Vercel",
        "REST APIs",
        "Husky",
      ],
    },
    {
      title: "Testing & Code Quality",
      skills: ["Jest", "ESLint", "Prettier", "Postman"],
    },
  ],
};

export const contactData = {
  title: "Looking to?",
  cards: [
    {
      title: "offer job opportunity?",
      text: "I'm open to discussing potential job opportunities or collaborations. If you have a role or project in mind, feel free to reach out — I'd love to hear about it.",
    },
    {
      title: "Connect?",
      text: "Networking and even socializing is key in tech, and I'm always looking to meet new people. Whether you're a fellow developer, designer, or entrepreneur.",
    },
    {
      title: "Build something?",
      text: "I love building web applications that solve real problems. Whether it's a portfolio, a product, or an experiment — I'm always up for a new challenge.",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:christianlow428@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/ChristianLow428/",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/christian-low428/",
    },
    {
      label: "Resume",
      url: "/Christian_Low_Resume.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "808Ultimate",
      image: "/images/808Ultimate.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Start.gg GraphQL API"],
      description:
        "A real-time tournament tracking platform that centralizes Hawaiʻi's Super Smash Bros. Ultimate scene. Server-side API routes pull from the Start.gg GraphQL API to deliver live bracket standings, player stats, and interactive Power Rankings, with an in-memory caching layer and revalidation strategy that eliminates rate-limiting issues.",
      demoUrl: "https://808ultimatewebsite-w1az.vercel.app/",
      codeUrl: "https://github.com/ChristianLow428/808ultimatewebsite",
    },
    {
      name: "Smash Ultimate Matchmaker",
      image: "/images/Hawaiissbu.png",
      technologies: ["React", "TypeScript", "Firebase, Gemini AI", "Discord API"],
      description:
        "Developed a full-stack, real-time matchmaking platform modeled after Smashmate.com, enabling users to find and challenge opponents instantly. ",
      demoUrl: "https://drive.google.com/file/d/1Vz3FarxMuWI8Bkg2XBXP-x_8mpxAGuaW/view?usp=sharing",
      codeUrl: "https://github.com/ChristianLow428/Smashmateclone",
    },
    {
      name: "Mānoa Compass",
      image: "/images/ManoaCompass.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Gemini API", "NextAuth.js", "Vercel"],
      description:
        "An AI-driven event discovery hub that matches 100+ UH Mānoa campus events to student interests. Uses the Gemini API to parse event descriptions, automated web scrapers with an admin moderation dashboard, and a server-side caching layer that cut page loads from 30s to sub-second.",
      demoUrl: "https://manoa-compass-code.vercel.app/",
      codeUrl: "https://manoa-compass.github.io/",
    },
  ],
};
