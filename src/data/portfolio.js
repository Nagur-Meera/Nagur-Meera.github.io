export const personalInfo = {
  name: "Nagur Meeravali Shaik",
  email: "nagurmeeravalishaik01@gmail.com",
  phone: "+91 90593 64539",
  birthday: "Dec 08, 2005",
  location: "Vijayawada, Andhra Pradesh, INDIA",
  portfolio: "nagur-meera.netlify.app",
  github: "Nagur-Meera",
  linkedin: "nagur-meeravali-shaik",
  university_email: "nagurmeeravali.shaik@srmap.edu.in"
};

export const education = [
  {
    degree: "BTech (CSE)",
    institution: "SRM University - AP",
    period: "2022 - present",
    gpa: "8.84",
    icon: "🎓"
  },
  {
    degree: "Class 12th",
    institution: "Sri Chaitanya Junior College (BIEAP)",
    period: "2022",
    percentage: "81.3%",
    icon: "📚"
  },
  {
    degree: "Class 10th",
    institution: "Sri Chaitanya School (BSEAP)",
    period: "2020",
    percentage: "98.17%",
    icon: "🏫"
  }
];

export const workExperience = [
  {
    title: "Software Developer Intern",
    company: "Edubot Software and Services",
    location: "Vijayawada, A.P, India",
    period: "June 2024 – July 2024",
    description: [
      "Developed an Electricity Billing System with a focus on backend logic and database design for accurate bill calculations",
      "Created responsive user interfaces, gaining hands-on experience in full-stack development within the company's EdTech projects"
    ],
    technologies: ["Java", "PostgreSQL", "HTML", "CSS", "JavaScript", "Eclipse IDE"],
    icon: "💼"
  }
];

export const hackathons = [
  {
    title: "Tax-Expense-Management-System",
    event: "TechXcelerate 24-Hour Hackathon",
    location: "Hyderabad, Telangana, India",
    period: "March 2025",
    description: [
      "Participated in an intensive 24-hour hackathon developing a MERN-based web application for freelancers to track income, auto-generate invoices, and calculate taxes",
      "Collaborated with team members to implement JWT-secured authentication and real-time dashboards"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "GitHub"],
    icon: "🚀"
  }
];

export const competitions = [
  {
    title: "DSA Quiz and Coding Competition",
    event: "Final Round - Rank 1",
    organizer: "Knowvy Perks and Events",
    host: "Technocrats Institute of Technology, Bhopal",
    period: "2025",
    description: [
      "Achieved Rank 1 in the final round of DSA Quiz and Coding Competition, demonstrating exceptional problem-solving skills and algorithmic thinking",
      "Competed with participants from across institutions in data structures and algorithms challenges and secured first position"
    ],
    technologies: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming"],
    icon: "🏆"
  }
];

export const projects = [
  {
    id: 1,
    title: "VeriFact - AI-Powered Fact-Checking System",
    description: "Comprehensive AI-powered fact-checking system combining real-time news monitoring, advanced RAG capabilities, and intelligent credibility scoring to combat misinformation using Google Gemini 2.0 Flash, Pinecone vector database, and real-time WebSocket updates.",
    technologies: ["React 18", "Vite", "Material-UI", "Node.js", "Express.js", "Google Gemini 2.0", "Pinecone", "MongoDB Atlas", "Redis", "Socket.IO"],
    github: "https://github.com/Nagur-Meera/VeriFact",
    demo: "https://verifact-zeta.vercel.app/",
    api: "https://veri-fact-six.vercel.app/",
    image: "verifact.svg",
    category: "AI/ML",
    featured: true,
    highlights: [
      "95%+ fact-checking accuracy rate",
      "Real-time news monitoring with WebSocket updates",
      "Advanced RAG system with vector embeddings",
      "Multi-dimensional credibility scoring",
      "Serverless architecture on Vercel"
    ]
  },
  {
    id: 8,
    title: "MIC-ELMS - Employee Leave Management System",
    description: "A comprehensive and responsive web application for managing employee leave requests, designed specifically for educational institutions with role-based access control for administrators, department heads, and employees.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Axios", "Vercel"],
    github: "https://github.com/Nagur-Meera/MIC-Employee_Leave_Management_System",
    demo: "https://mic-employee-leave-management-syste-ebon.vercel.app/",
    image: "mic-elms.svg",
    category: "Full Stack",
    featured: true,
    highlights: [
      "Role-based access control (Admin, HOD, Employee)",
      "Multi-level approval workflow",
      "Mobile-optimized responsive design",
      "Dashboard with key metrics and visualizations",
      "Document attachment support and Excel exports"
    ]
  },
  {
    id: 2,
    title: "TracFac - Student-Faculty Tracking and Communication System",
    description: "Centralized web-based platform to streamline academic communication, program management, and student-faculty interactions within educational institutions using modern MERN stack architecture.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/nagur-meera/tracfac",
    demo: null,
    image: "tracfac.svg",
    category: "Full Stack",
    featured: true,
    highlights: [
      "Centralized academic communication platform",
      "Real-time student-faculty interactions",
      "Program management and tracking",
      "MERN stack implementation",
      "Educational institution focus"
    ]
  },
  {
    id: 3,
    title: "Kidney Disease Classification using Digital Image Processing",
    description: "CNN-based diagnostic system classifying kidney CT scan images into four disease categories (Normal, Cyst, Tumor, Stone) with 91.93% test accuracy using robust image preprocessing and deep learning.",
    technologies: ["Python", "TensorFlow/Keras", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/nagur-meera/kidney-disease-classification",
    demo: null,
    image: "kidney.svg",
    category: "Machine Learning",
    featured: true,
    highlights: [
      "91.93% test accuracy on medical imaging",
      "Four-category disease classification",
      "Robust image preprocessing pipeline",
      "CNN-based deep learning model",
      "Medical diagnostic application"
    ]
  },
  {
    id: 4,
    title: "Air Quality Index Prediction System",
    description: "Advanced machine learning system predicting Carbon Monoxide concentrations using multi-model ensemble (Neural Network, Random Forest, Linear Regression) with comprehensive health impact assessment based on WHO standards.",
    technologies: ["Python", "TensorFlow/Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/Nagur-Meera/Air-Quality-Index-Prediction-System",
    demo: null,
    image: "aqi.svg",
    category: "Machine Learning",
    featured: true,
    highlights: [
      "Multi-model ensemble for accurate predictions",
      "Real-time AQI assessment with health categorization",
      "Advanced feature engineering with temporal features",
      "KNN imputation for missing value treatment",
      "WHO standard-based health impact analysis"
    ]
  },
  {
    id: 5,
    title: "SignEase - Sign Language Application",
    description: "Comprehensive sign language application featuring searchable GIF database, user-generated content system, and role-based access control for admins and users to facilitate sign language learning and community building.",
    technologies: ["PHP", "XAMPP", "CSS", "HTML", "MySQL", "JavaScript"],
    github: "https://github.com/Nagur-Meera/SignEase",
    demo: null,
    image: "signease.svg",
    category: "Web Development",
    featured: false,
    highlights: [
      "Searchable sign language GIF database",
      "User-generated content system",
      "Role-based access control (Admin/User)",
      "Category-based organization",
      "Community-driven content platform"
    ]
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    description: "Intelligent movie recommendation system using user-based collaborative filtering to suggest personalized movies based on user preferences, view counts, and average ratings with advanced data preprocessing and analysis techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Analysis"],
    github: "https://github.com/Nagur-Meera/Movie-Recommendation-System",
    demo: null,
    image: "movie.svg",
    category: "Machine Learning",
    featured: false,
    highlights: [
      "User-based collaborative filtering algorithm",
      "Personalized recommendations based on preferences",
      "Weighted scoring system (70% ratings, 30% views)",
      "Advanced data preprocessing and cleaning",
      "Efficient recommendation generation"
    ]
  },
  {
    id: 7,
    title: "OBE Implementation: Program Level Objective Setting",
    description: "Java Swing application for Outcome Based Education (OBE) supporting CRUD operations for Program Level Objectives (PLOs) with GUI-based data entry, SQLite database integration, and clean modular architecture.",
    technologies: ["Java", "Swing/AWT", "SQLite", "JDBC", "NetBeans IDE"],
    github: "https://github.com/Nagur-Meera/OBE-PLO-Setting",
    demo: null,
    image: "obe.svg",
    category: "Desktop Application",
    featured: false,
    highlights: [
      "Complete CRUD operations for PLO management",
      "SQLite database with auto-increment primary keys",
      "Clean MVC-like modular Java architecture",
      "GUI-based data entry and management",
      "Academic project for CS307 course"
    ]
  }
];

export const skills = {
  "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript", "PHP"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Vite", "PHP"],
  "AI & Machine Learning": ["TensorFlow/Keras", "Scikit-learn", "Google Gemini API", "OpenCV", "NumPy", "Pandas"],
  "Database Technologies": ["MySQL", "MongoDB", "SQLite", "PostgreSQL", "Redis", "Pinecone Vector DB"],
  "Frontend Frameworks": ["React 18", "Material-UI", "Tailwind CSS", "Socket.IO Client"],
  "Backend Technologies": ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "JWT Authentication"],
  "Cloud & Deployment": ["Vercel", "MongoDB Atlas", "Redis Cloud", "Serverless Functions"],
  "Data Science": ["Matplotlib", "Seaborn", "Data Preprocessing", "Feature Engineering"],
  "Core CS Concepts": ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Design"],
  "Developer Tools": ["VS Code", "Postman", "Cursor", "GitHub", "Claude", "NetBeans IDE", "Eclipse IDE", "XAMPP"]
};

export const certifications = [
  {
    name: "RBI@90 Nationwide Online Quiz 2024",
    issuer: "Reserve Bank of India",
    icon: "🏦"
  },
  {
    name: "SQL",
    issuer: "HackerRank",
    icon: "🗃️"
  },
  {
    name: "Python",
    issuer: "NPTEL",
    icon: "🐍"
  },
  {
    name: "Java",
    issuer: "HackerRank",
    icon: "☕"
  },
  {
    name: "JavaScript",
    issuer: "HackerRank",
    icon: "📜"
  },
  {
    name: "Foundations of Cybersecurity",
    issuer: "Coursera",
    icon: "🔐"
  }
  ,
  {
    name: "AWS Fundamentals",
    issuer: "Amazon Web Services",
    icon: "☁️"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Nagur-Meera",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nagur-meeravali-shaik/",
    icon: "Linkedin"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/nagurmeeravali_shaik/",
    icon: "Code"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/nagurmeeravali",
    icon: "Code2"
  },
  {
    name: "Email",
    url: "mailto:nagurmeeravalishaik01@gmail.com",
    icon: "Mail"
  },
  {
    name: "Phone",
    url: "tel:+919059364539",
    icon: "Phone"
  }
];
