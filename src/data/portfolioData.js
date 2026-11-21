// Centralized Data File for Saumya's Portfolio

export const personalInfo = {
  name: "Saumya",
  title: "Computer Science & Engineering Student | Cyber Security",
  subtitles: [
    "Cyber Security Student",
    "AI Enthusiast & Developer",
    "Full-Stack Web Architect",
    "Cloud Services Enthusiast",
    "Open-Source Contributor",
    "Problem-Solving Advocate"
  ],
  bio: "Pursuing B.Tech Computer Science & Engineering (Cyber Security) at VIT Chennai [CGPA 8.97]. Engineering production-grade full-stack web applications, AI models, and secure REST APIs.",
  location: "Chennai, Tamil Nadu, India",
  email: "saumyagarg55555@gmail.com",
  phone: "+91 8507851982",
  github: "https://github.com/Saumya-01git",
  linkedin: "https://linkedin.com/in/saumya-garg",
  twitter: "https://twitter.com/saumya_garg",
  medium: "https://medium.com/@saumyagarg55555",
  leetcode: "https://leetcode.com/u/Saumya_Garg/",
  hackerrank: "https://www.hackerrank.com/profile/saumyagarg55555"
};

export const spokenLanguages = [
  {
    language: "Hindi",
    level: "Native Proficiency",
    desc: "Mother tongue, fluent in speaking, reading, and writing"
  },
  {
    language: "English",
    level: "Native / Professional Proficiency",
    desc: "Primary language for academic and technical communication"
  },
  {
    language: "Telugu",
    level: "Intermediate Proficiency",
    desc: "Intermediate reading ability and conversational comprehension"
  },
  {
    language: "French",
    level: "Elementary Proficiency",
    desc: "Basic conversational vocabulary and elementary knowledge"
  }
];

export const skillsData = {
  languages: ["Python", "Java", "C++", "C", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  frameworks: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Prisma ORM", "Recharts", "Vite"],
  databases: ["PostgreSQL (AWS Neon Cloud)", "MongoDB (Atlas)", "SQLite"],
  aiMl: ["YOLOv8", "OpenCV", "OpenAI Whisper", "Scikit-Learn", "TF-IDF", "NLP", "Pandas", "NumPy"],
  toolsAndCloud: ["Git & GitHub", "Vercel & Render", "Postman", "Wireshark", "Burp Suite", "Cisco Packet Tracer", "VS Code"],
  coreDomains: ["Full-Stack Web Development", "Cyber Security", "REST API Architecture", "JWT & RBAC Auth", "Data Structures & Algorithms"]
};

export const experienceData = [
  {
    id: "labmentix",
    role: "Web Development Intern",
    company: "Labmentix",
    period: "May 2026 – Present",
    location: "Remote",
    badge: "Internship",
    points: [
      "Engineered production-grade web applications using React.js, Node.js, Express, and PostgreSQL, improving API query throughput by 25% through index optimization.",
      "Implemented JWT authentication, RBAC authorization middleware, and modular controllers across 15+ backend REST routes.",
      "Leveraged AI coding tools (GitHub Copilot, Gemini) to accelerate feature delivery speed during agile sprints."
    ],
    skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT Auth", "RBAC"]
  },
  {
    id: "gssoc",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSOC)",
    period: "Aug 2026 – Present",
    location: "Remote",
    badge: "Open Source",
    points: [
      "Contributed to community projects by submitting pull requests, fixing UI responsiveness bugs, and refactoring backend API error handling modules.",
      "Collaborated with maintainers and peer developers across code reviews and version control workflows."
    ],
    skills: ["Git", "GitHub", "React.js", "Node.js", "Open Source"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering (Cyber Security)",
    institution: "Vellore Institute of Technology (VIT), Chennai",
    period: "2024 – 2028 (Expected)",
    score: "CGPA: 8.97 / 10.0",
    coursesLabel: "Relevant Courses",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "Cyber Security Fundamentals"
    ]
  },
  {
    degree: "Senior Secondary (Class XII - CBSE)",
    institution: "Oxford Public School",
    period: "2020 – 2022",
    score: "91.2% • School Rank 2 Holder",
    coursesLabel: "Subjects / Specialization",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English Core",
      "Fine Arts"
    ]
  },
  {
    degree: "Secondary School Certificate (Class X - CBSE)",
    institution: "Jawahar Navodaya Vidyalaya (JNV)",
    period: "2018 – 2020",
    score: "96.4% • School Rank 2 Holder (Featured in Newspaper)",
    coursesLabel: "Subjects Studied",
    courses: [
      "Science",
      "Standard Mathematics",
      "English",
      "Hindi",
      "Social Studies (SST)",
      "Information Technology (IT)"
    ]
  }
];

export const achievementsData = [
  {
    title: "School Rank 2 Holder (Class X & XII)",
    organization: "JNV & Oxford Public School",
    grade: "Featured in Print Newspaper Coverage",
    desc: "Achieved School Rank 2 distinction in Class X (96.4%) at Jawahar Navodaya Vidyalaya—honored with print newspaper coverage—and Class XII (91.2%) at Oxford Public School."
  },
  {
    title: "Cent Percentage Attendance Award",
    organization: "School Academic Honor",
    grade: "₹2,500 Cash Prize Honor",
    desc: "Awarded a ₹2,500 cash prize for flawless 100% attendance, demonstrating unwavering consistency, resilience, patience, and a commitment to show up every single day regardless of how challenging the situation is."
  },
  {
    title: "FIITJEE 100% Scholarship Awardee",
    organization: "FIITJEE Talent Exam",
    grade: "Top Percentile Rank",
    desc: "Ranked in top percentile in competitive nationwide talent examination (Class 8), earning a 100% tuition scholarship."
  },
  {
    title: "JNV National Entrance Selection",
    organization: "Nationwide Entrance Exam",
    grade: "Top 0.1% Selection Rate",
    desc: "Selected for prestigious residential school via national competitive examination among top 0.1% applicants."
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900) Internship",
    organization: "Ethnus & Microsoft",
    grade: "Grade A (91% Marks)",
    desc: "Completed Azure Cloud fundamentals training and internship covering cloud architecture, security, and networking."
  }
];

export const projectsData = [
  {
    id: "insurepulse",
    title: "InsurePulse",
    tagline: "Enterprise Insurance Management Platform",
    category: "Full Stack Web App",
    icon: "🛡️",
    techStack: ["React", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT Auth", "AWS Neon Cloud", "Vercel", "Render"],
    github: "https://github.com/Saumya-01git/InsurePulse",
    liveDemo: "https://insurepulse.vercel.app",
    highlights: [
      "Engineered a full-stack insurance management system serving 3 role-isolated portals (Admin, Agent, Customer) with strict RBAC governance.",
      "Integrated Prisma ORM with PostgreSQL on AWS Neon Cloud, optimizing document rendering while handling real-time loss claims vaulting."
    ],
    architecture: {
      frontend: "React 19 + Vite + Tailwind CSS + ShadCN UI + Recharts",
      backend: "Node.js + Express + Prisma ORM + JWT Authorization",
      database: "PostgreSQL hosted on AWS Neon Cloud Infrastructure"
    }
  },
  {
    id: "signflow",
    title: "SignFlow",
    tagline: "MERN Digital Document Signature Platform",
    category: "Full Stack Security App",
    icon: "✍️",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "PDF.js", "Brevo API"],
    github: "https://github.com/Saumya-01git/SignFlow",
    highlights: [
      "Built a secure digital document signing web app supporting PDF.js in-browser rendering, role-based signing workflows, and signature audit trails.",
      "Integrated Brevo Email API (formerly Sendinblue) to automate signature requests, witness approvals, and HTML notifications."
    ],
    architecture: {
      frontend: "React + Tailwind CSS + PDF.js Canvas Renderer",
      backend: "Node.js + Express + Multer File Handler",
      database: "MongoDB Atlas Cloud + Brevo Transactional Mailer"
    }
  },
  {
    id: "speech-ai",
    title: "Speech AI",
    tagline: "Speech Transcription Web Application",
    category: "AI & Web Audio App",
    icon: "🎙️",
    techStack: ["React", "Node.js", "Express", "OpenAI Whisper", "Web Audio API"],
    github: "https://github.com/Saumya-01git/Speech-AI",
    highlights: [
      "Developed a speech-to-text web application using OpenAI Whisper for browser-based audio capture and automated speech-to-text transcription.",
      "Implemented client-side audio visualizer waveform rendering and text export for transcript text."
    ],
    architecture: {
      frontend: "React + Web Audio API Record RTC",
      backend: "Express API Bridge to OpenAI Whisper ML Engine",
      core: "Whisper Base/Small Neural Network Transcription Model"
    }
  },
  {
    id: "threat-detection",
    title: "AI Real-Time Threat Detection System",
    tagline: "Computer Vision Security Pipeline",
    category: "AI & Computer Vision",
    icon: "📹",
    techStack: ["Python", "YOLOv8", "OpenCV", "SQLite", "PyTorch"],
    github: "https://github.com/Saumya-01git/AI-Threat-Detection",
    highlights: [
      "Built a real-time object/weapon detection pipeline using YOLOv8 and OpenCV, processing 30+ FPS video streams and logging incident metadata to SQLite.",
      "Designed automated bounding-box alert overlays for restricted area security monitoring."
    ],
    architecture: {
      core: "YOLOv8 Small Weights + PyTorch CUDA Acceleration",
      pipeline: "OpenCV Frame Grubber + Threaded Inference Loop",
      database: "SQLite Incident Log Vault"
    }
  },
  {
    id: "safespeak",
    title: "SafeSpeak",
    tagline: "Cyberbullying & Toxic Content Detection",
    category: "NLP & Cyber Security",
    icon: "🛡️",
    techStack: ["Python", "NLP", "TF-IDF", "Scikit-learn", "SVM", "Random Forest"],
    github: "https://github.com/Saumya-01git/Phishing-Detection-Extension",
    highlights: [
      "Created an NLP classification pipeline using TF-IDF feature extraction and SVM/Random Forest classifiers, achieving high model prediction accuracy.",
      "Designed real-time API endpoints to flag harassment, hate speech, and online threats."
    ],
    architecture: {
      nlp: "TF-IDF N-gram Tokenizer + Scikit-Learn Ensemble",
      classifier: "Support Vector Machines (SVM) + Random Forest",
      backend: "Python Flask REST Inference Gateway"
    }
  }
];
