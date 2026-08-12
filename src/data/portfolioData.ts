export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  fullDescription: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  architectureDetails?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; icon?: string; hot?: boolean }[];
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  badgeText: string;
  description: string;
}

export interface Achievement {
  title: string;
  event: string;
  award: string;
  description: string;
  iconType: 'trophy' | 'award' | 'star';
}

export const PERSONAL_INFO = {
  name: "Hari Hara Nandan",
  title: "Java Backend Developer | Spring Boot | REST APIs | MySQL",
  typingTitles: [
    "Java Backend Developer",
    "Spring Boot Developer",
    "REST API Builder",
    "Cloud & AI Enthusiast"
  ],
  email: "vedavyas2410@gmail.com",
  phone: "+91 8309443594",
  location: "Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/hari-hara-nandan-cv-608240354",
  github: "https://github.com/Hari-2426/",
  photoUrl: "/photo.jpg",
  resumeUrl: "/Hari_Hara_Nandan_Resume.docx",
  education: {
    degree: "B.Tech in Computer Science & Data Science",
    institution: "G Pulla Reddy Engineering College",
    duration: "Aug 2023 – 2027",
    gpa: "8.7 / 10.0"
  },
  summary: `Java Backend Developer with hands-on experience building RESTful APIs using Spring Boot, Spring Data JPA, and MySQL, plus working knowledge of Oracle databases. Strong foundations in Java, OOP, and Data Structures. National-level hackathon winner. AWS-certified in prompt engineering with growing interest in cloud-native, serverless, and AI-powered backend systems. Currently pursuing B.Tech in Computer Science & Data Science at G Pulla Reddy Engineering College (GPA 8.7/10.0, Aug 2023–2027).`
};

export const PROJECTS: Project[] = [
  {
    id: "smart-bill",
    title: "Smart Bill & Subscription Manager",
    subtitle: "Enterprise-grade Full-Stack Subscription & Bill Lifecycle Engine",
    badge: "Featured Backend App",
    description: "Full-stack bill and subscription tracker featuring three-tier RBAC (USER / ADMIN / SUPER_ADMIN), stateless JWT authentication, automated payment lifecycle audit trails, and scheduled email reminders.",
    fullDescription: "A production-grade backend and full-stack application built to solve subscription fatigue and bill tracking complexity. Engineered with high security standards, incorporating stateless JWT authorization through custom filter chains, BCrypt password encryption, granular role-based access control, and an automated background cron daemon for notification delivery.",
    tags: ["Spring Boot", "Spring Security", "JWT", "Hibernate/JPA", "MySQL", "Java Mail", "REST APIs"],
    githubUrl: "https://github.com/Hari-2426/Smart_Bill_And_Subscription_Manager.git",
    highlights: [
      "Three-tier Role-Based Access Control (RBAC): USER, ADMIN, and SUPER_ADMIN privilege scoping.",
      "Stateless JWT authentication implemented via custom OncePerRequestFilter & BCrypt password hashing.",
      "Complete payment lifecycle management with immutable audit trail log timestamps.",
      "Daily automated @Scheduled cron job triggering personalized email notifications via Java Mail API.",
      "Self-led security audit identifying and fixing an Insecure Direct Object Reference (IDOR) vulnerability."
    ],
    architectureDetails: [
      "Layered Architecture: Controller -> Service Layer -> Repository (JPA/Hibernate) -> Database Schema.",
      "Security Filter Chain: Stateless Session Management, JWT Token Validation Filter, Cors Configuration.",
      "Automated Cron Daemon: @EnableScheduling with cron expressions for daily execution at 08:00 AM."
    ]
  },
  {
    id: "patient-management",
    title: "Patient Management REST API",
    subtitle: "Production-Style Medical Record & Doctor Dispatching API",
    badge: "Clean Architecture",
    description: "Production-style RESTful API featuring 7 core endpoints, centralized exception handling with @RestControllerAdvice, Bean Validation on DTOs, and structured SLF4J/Logback logging.",
    fullDescription: "Robust microservice REST API designed following enterprise Java backend standards. Provides full CRUD operations for patient records, medical histories, and doctor allocations with strict DTO-layer data validation, uniform JSON error responses, and clean layered decoupling.",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "SLF4J", "Logback", "Bean Validation", "Lombok"],
    githubUrl: "https://github.com/Hari-2426/Patient_Management_REST_API",
    highlights: [
      "7 Production-standard REST endpoints following strict HTTP method semantic standards (GET, POST, PUT, DELETE).",
      "Centralized Global Exception Handling utilizing @RestControllerAdvice & Custom Exception Handlers.",
      "Strict input payload validation with Hibernate Validator / Bean Validation annotations (@NotNull, @Email, @Size).",
      "Layered architecture strictly isolating Data Access (JPA) from Business Logic and DTO mapping.",
      "Structured logging with SLF4J and Logback appenders for production monitoring."
    ],
    architectureDetails: [
      "Controller: Handles request mapping, payload validation, and returns ResponseEntity<T> status objects.",
      "Service: Encapsulates transactional business logic, entity conversion, and custom error triggering.",
      "Repository: Spring Data JPA interfaces leveraging custom JPQL queries and method name query generation."
    ]
  },
  {
    id: "agritech-platform",
    title: "AgriTech Smart Farming Platform",
    subtitle: "National Hackathon 1st Place Machine Learning Powered Crop Insights",
    badge: "🏆 1st Place Winner",
    description: "React-based smart agriculture platform delivering data-driven crop selection and yield predictions powered by Random Forest and Linear Regression ML models.",
    fullDescription: "Award-winning smart farming web solution engineered for farmers to maximize crop yield based on real-time soil condition parameters (pH, NPK levels) and historical climate data. Won 1st Place at Ripple 2k26 National-Level Hackathon.",
    tags: ["React", "JavaScript", "Machine Learning", "Random Forest", "Linear Regression", "Tailwind CSS"],
    liveUrl: "https://smart-farming-rgm.vercel.app/",
    highlights: [
      "1st Place Winner at Ripple 2k26 National-Level Hackathon amongst top university engineering teams.",
      "Interactive data-driven crop yield recommendation engine using Machine Learning models.",
      "Responsive React interface optimized for low-bandwidth mobile devices in agrarian areas.",
      "Visual analytical dashboards for soil fertility assessment and seasonal crop recommendations."
    ],
    architectureDetails: [
      "Frontend: Component-driven React architecture with responsive state management.",
      "ML Integration: Predictive algorithms evaluating ambient temperature, humidity, and soil nutrients."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming & query languages",
    skills: [
      { name: "Java", hot: true },
      { name: "SQL", hot: true }
    ]
  },
  {
    category: "Backend",
    description: "Enterprise Java frameworks, API design & ORM tools",
    skills: [
      { name: "Spring Boot", hot: true },
      { name: "REST APIs", hot: true },
      { name: "Spring MVC" },
      { name: "Spring Security" },
      { name: "Hibernate (ORM)" },
      { name: "Spring Data JPA" },
      { name: "JDBC" },
      { name: "Microservices" },
      { name: "Maven" },
      { name: "Postman" }
    ]
  },
  {
    category: "Databases",
    description: "Relational data management systems",
    skills: [
      { name: "MySQL", hot: true },
      { name: "Oracle DB" }
    ]
  },
  {
    category: "Cloud & AI",
    description: "Cloud fundamentals, AI tools & prompt engineering",
    skills: [
      { name: "AWS Prompt Engineering (Certified)", hot: true },
      { name: "Antigravity", hot: true },
      { name: "Claude Cowork", hot: true },
      { name: "VS Code Copilot", hot: true },
      { name: "Machine Learning Fundamentals" }
    ]
  },
  {
    category: "Tools & DevOps",
    description: "IDE, version control & build workflows",
    skills: [
      { name: "Git & GitHub", hot: true },
      { name: "Eclipse IDE" },
      { name: "VS Code" }
    ]
  },
  {
    category: "Concepts",
    description: "CS fundamentals & engineering principles",
    skills: [
      { name: "Object-Oriented Programming (OOP)", hot: true },
      { name: "Data Structures & Algorithms" },
      { name: "Clean Code & Layered Architecture" }
    ]
  },
  {
    category: "Frontend",
    description: "Web development core stack",
    skills: [
      { name: "HTML5 & CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "React" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Advanced Java with Spring Boot & Microservices",
    issuer: "Frontlines EduTech (FLM)",
    year: "2026",
    badgeText: "Enterprise Java",
    description: "Mastery over Spring Boot framework, Spring Security, microservices architecture, JPA entity relationships, and production deployment."
  },
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    year: "2026",
    badgeText: "AWS Certified",
    description: "Official AWS credential covering LLM prompt design, context structuring, guardrails, and AI integration strategies."
  },
  {
    title: "Databases for Developers: Foundations",
    issuer: "Oracle Dev Gym",
    year: "2025",
    badgeText: "Oracle Verified",
    description: "Comprehensive validation in SQL syntax, relational query optimization, table normalization, and indexing."
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Place Winner",
    event: "Ripple 2k26 National-Level Hackathon",
    award: "National Level 1st Prize",
    description: "Led team to first place with an ML-powered AgriTech solution providing farmers data-backed crop selection recommendations.",
    iconType: "trophy"
  },
  {
    title: "3rd Place Winner",
    event: "Intra-College Vibe Coding Hackathon",
    award: "3rd Prize",
    description: "Built a rapid high-performance prototype within strict timeframe constraints, demonstrating fast problem solving and clean code execution.",
    iconType: "award"
  },
  {
    title: "3rd Place Winner",
    event: "Inter-College Technical Competition",
    award: "3rd Prize",
    description: "Recognized for outstanding technical presentation and software engineering design implementation.",
    iconType: "star"
  }
];
