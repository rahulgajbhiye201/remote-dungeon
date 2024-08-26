export const jobSources = [
  "https://weworkremotely.com/remote-jobs.rss",
  "https://weworkremotely.com/categories/remote-customer-support-jobs.rss",
  "https://weworkremotely.com/categories/remote-product-jobs.rss",
  "https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss",
  "https://weworkremotely.com/categories/remote-back-end-programming-jobs.rss",
  "https://weworkremotely.com/categories/remote-front-end-programming-jobs.rss",
  "https://weworkremotely.com/categories/remote-programming-jobs.rss",
  "https://weworkremotely.com/categories/remote-sales-and-marketing-jobs.rss",
  "https://weworkremotely.com/categories/remote-management-and-finance-jobs.rss",
  "https://weworkremotely.com/categories/remote-design-jobs.rss",
  "https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss",
  "https://weworkremotely.com/categories/all-other-remote-jobs.rss",
  "https://remotive.com/remote-jobs/feed",
  "https://remotive.com/remote-jobs/feed/software-dev",
  "https://remotive.com/remote-jobs/feed/customer-support",
  "https://remotive.com/remote-jobs/feed/design",
  "https://remotive.com/remote-jobs/feed/marketing",
  "https://remotive.com/remote-jobs/feed/sales-business",
  "https://remotive.com/remote-jobs/feed/product",
  "https://remotive.com/remote-jobs/feed/project-management",
  "https://remotive.com/remote-jobs/feed/data",
  "https://remotive.com/remote-jobs/feed/devops",
  "https://remotive.com/remote-jobs/feed/finance-legal",
  "https://remotive.com/remote-jobs/feed/hr",
  "https://remotive.com/remote-jobs/feed/qa",
  "https://remotive.com/remote-jobs/feed/writing",
  "https://remotive.com/remote-jobs/feed/all-others",
];

export const typeMap = new Map<string, string>([
  ["full_time", "Full Time"],
  ["Full-Time", "Full Time"],
  ["part_time", "Part Time"],
  ["Part_Time", "Part Time"],
  ["freelance", "Freelance"],
  ["contract", "Contract"],
]);

export const categoryMap = new Map<string, string>([
  // Full-Stack Programming
  ["Full-Stack Programming", "Fullstack Development"],
  ["Software Development", "Fullstack Development"],
  // Front-End Programming
  ["Front-End Programming", "Frontend Development"],
  // Back-End Programming
  ["Back-End Programming", "Backend Development"],
  // Data Analyst and AI/ML
  ["Data Analysis", "Data Analyst and AI/ML"],
  // DevOps and Sysadmin
  ["DevOps and Sysadmin", "DevOps and Sysadmin"],
  ["DevOps / Sysadmin", "DevOps and Sysadmin"],
  // Management and Finance
  ["Management and Finance", "Management and Finance"],
  ["Human Resources", "Management and Finance"],
  ["Finance / Legal", "Management and Finance"],
  ["Project Management", "Management and Finance"],
  // Sales and Marketing
  ["Marketing", "Sales and Marketing"],
  ["Sales and Marketing", "Sales and Marketing"],
  ["Sales / Business", "Sales and Marketing"],
  // Customer Support
  ["Customer Support", "Customer Support"],
  ["Customer Service", "Customer Support"],
  // Product
  ["Product", "Product"],
  // All Other Remote
  ["All Other Remote", "Other Remote"],
  ["All others", "Other Remote"],
  ["QA", "Other Remote"],
  // Design
  ["Design", "Design"],
  ["Writing", "Writing"],
]);

export const technologiesKeyword = {
  // Fullstack Development
  "Fullstack Development": [
    "html", // Markup Language
    "html5", // Markup Language
    "css", // Style Sheet Language
    "css3", // Style Sheet Language
    "javascript", // Programming Language
    "typescript", // Superset of JavaScript
    "react", // UI Library
    "react.js", // UI Library
    "reactjs", // UI Library
    "redux", // State Management
    "redux-thunk", // Middleware for Redux
    "redux-saga", // Side Effects Model for Redux
    "angular", // Framework
    "angular.js", // Framework
    "vue", // Framework
    "vue.js", // Framework
    "sass", // CSS Preprocessor
    "scss", // CSS Preprocessor
    "less", // CSS Preprocessor
    "bootstrap", // CSS Framework
    "tailwindcss", // Utility-First CSS Framework
    "tailwind", // Utility-First CSS Framework
    "jquery", // JavaScript Library
    "nextjs", // React Framework
    "next.js", // React Framework
    "gatsby", // Static Site Generator
    "emotion", // CSS-in-JS Library
    "styled-components", // CSS-in-JS Library
    "material-ui", // UI Framework
    "ant design", // UI Framework
    "formik", // Form Management
    "react-router", // Routing Library
    "react-query", // Data Fetching Library
    "rxjs", // Reactive Extensions
    "node", // JavaScript Runtime
    "nodejs", // JavaScript Runtime
    "node.js", // JavaScript Runtime
    "express", // Web Framework for Node.js
    "expressjs", // Web Framework for Node.js
    "express.js", // Web Framework for Node.js
    "python", // Programming Language
    "java", // Programming Language
    "c#", // Programming Language
    "ruby", // Programming Language
    "php", // Programming Language
    "sql", // Structured Query Language
    "mongodb", // NoSQL Database
    "mongoose", // ODM for MongoDB
    "graphql", // Query Language for APIs
    "graphql-yoga", // GraphQL Server
    "apollo", // GraphQL Server
    "docker", // Containerization
    "kubernetes", // Container Orchestration
    "mysql", // Relational Database
    "postgresql", // Relational Database
    "prisma", // ORM for Node.js
    "firebase", // Backend-as-a-Service
    "redis", // In-Memory Data Structure Store
    "websockets", // Full-Duplex Communication Protocol
    "rest api", // Representational State Transfer
    "graphql api", // GraphQL API
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework
    "shopify",
    "aws",
    "firebase",
    "aws", // Cloud Computing Service
    "azure", // Cloud Computing Service
    "google cloud", // Cloud Computing Service
  ],

  // Frontend Development
  "Frontend Development": [
    "html", // Markup Language
    "html5", // Markup Language
    "css", // Style Sheet Language
    "css3", // Style Sheet Language
    "javascript", // Programming Language
    "typescript", // Superset of JavaScript
    "react", // UI Library
    "react.js", // UI Library
    "reactjs", // UI Library
    "redux", // State Management
    "redux-thunk", // Middleware for Redux
    "redux-saga", // Side Effects Model for Redux
    "angular", // Framework
    "angularjs", // Framework
    "angular.js", // Framework
    "vue", // Framework
    "vuejs", // Framework
    "vue.js", // Framework
    "sass", // CSS Preprocessor
    "scss", // CSS Preprocessor
    "less", // CSS Preprocessor
    "bootstrap", // CSS Framework
    "tailwindcss", // Utility-First CSS Framework
    "tailwind", // Utility-First CSS Framework
    "jquery", // JavaScript Library
    "nextjs", // React Framework
    "next.js", // React Framework
    "gatsby", // Static Site Generator
    "emotion", // CSS-in-JS Library
    "styled-components", // CSS-in-JS Library
    "material-ui", // UI Framework
    "ant design", // UI Framework
    "formik", // Form Management
    "react-router", // Routing Library
    "react-query", // Data Fetching Library
    "rxjs", // Reactive Extensions
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework
  ],

  // Backend Development
  "Backend Development": [
    "node", // JavaScript Runtime
    "nodejs", // JavaScript Runtime
    "node.js", // JavaScript Runtime
    "express", // Web Framework for Node.js
    "expressjs", // Web Framework for Node.js
    "express.js", // Web Framework for Node.js
    "python", // Programming Language
    "java", // Programming Language
    "c#", // Programming Language
    "ruby", // Programming Language
    "php", // Programming Language
    "sql", // Structured Query Language
    "mongodb", // NoSQL Database
    "mongoose", // ODM for MongoDB
    "graphql", // Query Language for APIs
    "graphql-yoga", // GraphQL Server
    "apollo", // GraphQL Server
    "docker", // Containerization
    "kubernetes", // Container Orchestration
    "mysql", // Relational Database
    "postgresql", // Relational Database
    "prisma", // ORM for Node.js
    "firebase", // Backend-as-a-Service
    "redis", // In-Memory Data Structure Store
    "websockets", // Full-Duplex Communication Protocol
    "rest api", // Representational State Transfer
    "graphql api", // GraphQL API
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework
    "aws", // Cloud Computing Service
    "azure", // Cloud Computing Service
    "google cloud", // Cloud Computing Service
  ],

  // App Development
  "App Development": [
    "react-native", // Framework for building native apps using React
    "flutter", // UI toolkit for building natively compiled apps
    "swift", // Programming Language for iOS development
    "objective-c", // Programming Language for iOS development
    "java", // Programming Language for Android development
    "kotlin", // Programming Language for Android development
    "xamarin", // Framework for building cross-platform apps
    "ionic", // Framework for building hybrid mobile apps
    "cordova", // Platform for building mobile apps using HTML, CSS, and JavaScript
    "android sdk", // Software Development Kit for Android
    "ios sdk", // Software Development Kit for iOS
    "react-native-navigation", // Navigation for React Native apps
    "firebase", // Backend service for mobile apps
    "redux", // State Management (can be used in mobile apps)
    "graphql", // API for mobile apps
  ],

  // Data Analyst and AI/ML
  "Data Analyst and AI/ML": [
    "python", // Programming Language
    "r", // Programming Language
    "sql", // Structured Query Language
    "pandas", // Data Analysis Library for Python
    "numpy", // Numerical Computing Library for Python
    "tensorflow", // Machine Learning Framework
    "keras", // Neural Networks API
    "scikit-learn", // Machine Learning Library
    "tableau", // Data Visualization Software
    "power bi", // Business Analytics Tool
    "excel", // Spreadsheet Software
    "matplotlib", // Plotting Library for Python
    "seaborn", // Statistical Data Visualization Library
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework
  ],

  // DevOps and Sysadmin
  "DevOps and Sysadmin": [
    "docker", // Containerization
    "kubernetes", // Container Orchestration
    "jenkins", // Automation Server
    "ansible", // Configuration Management Tool
    "terraform", // Infrastructure as Code
    "git", // Version Control System
    "gitlab", // Version Control and CI/CD Platform
    "github", // Version Control and Collaboration
    "aws", // Cloud Computing Service
    "azure", // Cloud Computing Service
    "google cloud", // Cloud Computing Service
    "bash", // Shell Scripting Language
    "linux", // Operating System
    "prometheus", // Monitoring System
    "grafana", // Visualization Tool
    "ci/cd pipelines", // Continuous Integration/Continuous Deployment
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework
  ],

  // Management and Finance
  "Management and Finance": [
    "microsoft excel", // Spreadsheet Software
    "microsoft power bi", // Business Analytics Tool
    "sql", // Structured Query Language
    "sap", // Enterprise Resource Planning
    "oracle", // Database Management System
    "quickbooks", // Accounting Software
    "financial modeling", // Financial Planning Tool
    "risk management", // Risk Assessment Tools
    "project management software", // Project Management Tools
    "hrms software", // Human Resource Management System
    "people analytics", // HR Data Analysis
    "ats systems", // Applicant Tracking System
    "recruitment software", // Hiring Tools
    "hr data analysis", // HR Data Analysis
    "microsoft excel", // Spreadsheet Software
    "financial modeling", // Financial Planning Tool
    "legal research software", // Legal Research Tools
    "case management software", // Legal Case Management Tools
    "document management systems", // Document Management Tools
    "microsoft project", // Project Management Software
    "trello", // Project Management Tool
    "jira", // Issue Tracking and Project Management Tool
    "asana", // Project Management Tool
    "slack", // Collaboration Tool
    "microsoft teams", // Collaboration Tool
    "basecamp", // Project Management Tool
  ],

  // Sales and Marketing
  "Sales and Marketing": [
    "hubspot", // Inbound Marketing and Sales
    "salesforce", // Customer Relationship Management
    "google analytics", // Web Analytics Service
    "mailchimp", // Email Marketing Service
    "social media marketing", // Digital Marketing Strategy
    "seo", // Search Engine Optimization
    "content marketing", // Digital Marketing Strategy
    "webflow",
    "customer.io",
  ],

  // Customer Support
  "Customer Support": [
    "zendesk", // Customer Service Software
    "intercom", // Customer Communication Software
    "freshdesk", // Customer Support Software
    "salesforce service cloud", // Customer Service Management
    "customer service software", // Customer Support Tools
  ],

  // Product
  Product: [
    "product management tools", // Product Management Software
    "roadmapping tools", // Product Roadmapping Tools
    "user feedback software", // User Feedback Collection Tools
    "analytics tools", // Product Analytics Tools
    "agile methodologies", // Agile Project Management
  ],

  // Design
  Design: [
    "graphic design", // Creating visual content to communicate messages
    "ui design", // Designing user interfaces for software and machines
    "ux design", // Enhancing user satisfaction by improving usability and accessibility
    "web design", // Planning and creating websites, focusing on layout and content
    "print design", // Designing for physical media like brochures, posters, and packaging
    "branding", // Developing a unique identity for a product or company
    "typography", // The art and technique of arranging type to make written language legible and visually appealing
    "color theory", // Understanding how colors interact and influence perception
    "layout design", // The arrangement of visual elements on a page
    "illustration", // Creating images to convey ideas or tell a story
    "photo editing", // Modifying images to enhance or alter their appearance
    "vector graphics", // Using geometrical primitives (points, lines, curves) for digital illustrations
    "prototyping", // Creating an early model of a product to test concepts and functionality
    "wireframing", // Building a skeletal outline of a web page or app for structure planning
    "user research", // Studying user needs and behaviors to inform design decisions
    "interaction design", // Designing interactive elements of a product to improve user experience
    "motion design", // Creating artwork that moves, often for web or video applications
    "design thinking", // A problem-solving approach focused on understanding user needs and iterative design
    "adobe creative suite", // A collection of graphic design, video editing, and web development applications
    "figma", // A web-based UI/UX design tool for collaborative design projects
    "sketch", // A digital design tool for creating interfaces and user experiences
    "invision", // A prototyping tool that allows designers to create interactive mockups
    "canva", // An online graphic design platform for creating social media graphics and presentations
  ],

  // Writing
  Writing: [
    "copywriting",
    "content writing",
    "technical writing",
    "creative writing",
    "academic writing",
    "business writing",
    "scriptwriting",
    "blogging",
    "journalism",
    "editing",
    "proofreading",
    "research",
    "storytelling",
    "SEO",
    "email marketing",
    "social media writing",
    "content strategy",
  ],

  // All Other Remote
  "Other Remote": [
    // Fullstack Developer
    "html", // Markup Language
    "html5", // Markup Language
    "css", // Style Sheet Language
    "css3", // Style Sheet Language
    "javascript", // Programming Language
    "typescript", // Superset of JavaScript
    "react", // UI Library
    "react.js", // UI Library
    "reactjs", // UI Library
    "redux", // State Management
    "redux-thunk", // Middleware for Redux
    "redux-saga", // Side Effects Model for Redux
    "angular", // Framework
    "angular.js", // Framework
    "vue", // Framework
    "vue.js", // Framework
    "sass", // CSS Preprocessor
    "scss", // CSS Preprocessor
    "less", // CSS Preprocessor
    "bootstrap", // CSS Framework
    "tailwindcss", // Utility-First CSS Framework
    "tailwind", // Utility-First CSS Framework
    "jquery", // JavaScript Library
    "nextjs", // React Framework
    "next.js", // React Framework
    "gatsby", // Static Site Generator
    "emotion", // CSS-in-JS Library
    "styled-components", // CSS-in-JS Library
    "material-ui", // UI Framework
    "ant design", // UI Framework
    "formik", // Form Management
    "react-router", // Routing Library
    "react-query", // Data Fetching Library
    "rxjs", // Reactive Extensions
    "nodejs", // JavaScript Runtime
    "node.js", // JavaScript Runtime
    "express", // Web Framework for Node.js
    "expressjs", // Web Framework for Node.js
    "express.js", // Web Framework for Node.js
    "python", // Programming Language
    "java", // Programming Language
    "c#", // Programming Language
    "ruby", // Programming Language
    "php", // Programming Language
    "sql", // Structured Query Language
    "mongodb", // NoSQL Database
    "mongoose", // ODM for MongoDB
    "graphql", // Query Language for APIs
    "graphql-yoga", // GraphQL Server
    "apollo", // GraphQL Server
    "docker", // Containerization
    "kubernetes", // Container Orchestration
    "mysql", // Relational Database
    "postgresql", // Relational Database
    "prisma", // ORM for Node.js
    "firebase", // Backend-as-a-Service
    "redis", // In-Memory Data Structure Store
    "websockets", // Full-Duplex Communication Protocol
    "rest api", // Representational State Transfer
    "graphql api", // GraphQL API
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework

    // Frontend Developer

    "html", // Markup Language
    "html5", // Markup Language
    "css", // Style Sheet Language
    "css3", // Style Sheet Language
    "javascript", // Programming Language
    "typescript", // Superset of JavaScript
    "react", // UI Library
    "react.js", // UI Library
    "reactjs", // UI Library
    "redux", // State Management
    "redux-thunk", // Middleware for Redux
    "redux-saga", // Side Effects Model for Redux
    "angular", // Framework
    "angularjs", // Framework
    "angular.js", // Framework
    "vue", // Framework
    "vuejs", // Framework
    "vue.js", // Framework
    "sass", // CSS Preprocessor
    "scss", // CSS Preprocessor
    "less", // CSS Preprocessor
    "bootstrap", // CSS Framework
    "tailwindcss", // Utility-First CSS Framework
    "tailwind", // Utility-First CSS Framework
    "jquery", // JavaScript Library
    "nextjs", // React Framework
    "next.js", // React Framework
    "gatsby", // Static Site Generator
    "emotion", // CSS-in-JS Library
    "styled-components", // CSS-in-JS Library
    "material-ui", // UI Framework
    "ant design", // UI Framework
    "formik", // Form Management
    "react-router", // Routing Library
    "react-query", // Data Fetching Library
    "rxjs", // Reactive Extensions
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework

    // Backend Developer

    "node", // JavaScript Runtime
    "nodejs", // JavaScript Runtime
    "node.js", // JavaScript Runtime
    "express", // Web Framework for Node.js
    "expressjs", // Web Framework for Node.js
    "express.js", // Web Framework for Node.js
    "python", // Programming Language
    "java", // Programming Language
    "c#", // Programming Language
    "ruby", // Programming Language
    "php", // Programming Language
    "sql", // Structured Query Language
    "mongodb", // NoSQL Database
    "mongoose", // ODM for MongoDB
    "graphql", // Query Language for APIs
    "graphql-yoga", // GraphQL Server
    "apollo", // GraphQL Server
    "docker", // Containerization
    "kubernetes", // Container Orchestration
    "mysql", // Relational Database
    "postgresql", // Relational Database
    "prisma", // ORM for Node.js
    "firebase", // Backend-as-a-Service
    "redis", // In-Memory Data Structure Store
    "websockets", // Full-Duplex Communication Protocol
    "rest api", // Representational State Transfer
    "graphql api", // GraphQL API
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework

    // App Developer

    "react-native", // Framework for building native apps using React
    "flutter", // UI toolkit for building natively compiled apps
    "swift", // Programming Language for iOS development
    "objective-c", // Programming Language for iOS development
    "java", // Programming Language for Android development
    "kotlin", // Programming Language for Android development
    "xamarin", // Framework for building cross-platform apps
    "ionic", // Framework for building hybrid mobile apps
    "cordova", // Platform for building mobile apps using HTML, CSS, and JavaScript
    "android sdk", // Software Development Kit for Android
    "ios sdk", // Software Development Kit for iOS
    "react-native-navigation", // Navigation for React Native apps
    "firebase", // Backend service for mobile apps
    "redux", // State Management (can be used in mobile apps)
    "graphql", // API for mobile apps

    // Data Analyst and AI/ML

    "python", // Programming Language
    "r", // Programming Language
    "sql", // Structured Query Language
    "pandas", // Data Analysis Library for Python
    "numpy", // Numerical Computing Library for Python
    "tensorflow", // Machine Learning Framework
    "keras", // Neural Networks API
    "scikit-learn", // Machine Learning Library
    "tableau", // Data Visualization Software
    "power bi", // Business Analytics Tool
    "excel", // Spreadsheet Software
    "matplotlib", // Plotting Library for Python
    "seaborn", // Statistical Data Visualization Library
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework

    // DevOps and Sysadmin

    "docker", // Containerization
    "kubernetes", // Container Orchestration
    "jenkins", // Automation Server
    "ansible", // Configuration Management Tool
    "terraform", // Infrastructure as Code
    "git", // Version Control System
    "gitlab", // Version Control and CI/CD Platform
    "github", // Version Control and Collaboration
    "aws", // Cloud Computing Service
    "azure", // Cloud Computing Service
    "google cloud", // Cloud Computing Service
    "bash", // Shell Scripting Language
    "linux", // Operating System
    "prometheus", // Monitoring System
    "grafana", // Visualization Tool
    "ci/cd pipelines", // Continuous Integration/Continuous Deployment
    "selenium", // Automation Testing Framework
    "jest", // JavaScript Testing Framework
    "mocha", // JavaScript Testing Framework
    "cypress", // End-to-End Testing Framework
    "postman", // API Testing Tool
    "test automation", // Automation Testing
    "bug tracking tools", // Issue Tracking Tools
    "selenium grid", // Distributed Testing Framework

    // Management and Finance

    "microsoft excel", // Spreadsheet Software
    "microsoft power bi", // Business Analytics Tool
    "sql", // Structured Query Language
    "sap", // Enterprise Resource Planning
    "oracle", // Database Management System
    "quickbooks", // Accounting Software
    "financial modeling", // Financial Planning Tool
    "risk management", // Risk Assessment Tools
    "project management software", // Project Management Tools
    "hrms software", // Human Resource Management System
    "people analytics", // HR Data Analysis
    "ats systems", // Applicant Tracking System
    "recruitment software", // Hiring Tools
    "hr data analysis", // HR Data Analysis
    "microsoft excel", // Spreadsheet Software
    "financial modeling", // Financial Planning Tool
    "legal research software", // Legal Research Tools
    "case management software", // Legal Case Management Tools
    "document management systems", // Document Management Tools
    "microsoft project", // Project Management Software
    "trello", // Project Management Tool
    "jira", // Issue Tracking and Project Management Tool
    "asana", // Project Management Tool
    "slack", // Collaboration Tool
    "microsoft teams", // Collaboration Tool
    "basecamp", // Project Management Tool

    // Sales and Marketing

    "hubspot", // Inbound Marketing and Sales
    "salesforce", // Customer Relationship Management
    "google analytics", // Web Analytics Service
    "mailchimp", // Email Marketing Service
    "social media marketing", // Digital Marketing Strategy
    "seo", // Search Engine Optimization
    "content marketing", // Digital Marketing Strategy
    "webflow",
    "customer.io",

    // Customer Support

    "zendesk", // Customer Service Software
    "intercom", // Customer Communication Software
    "freshdesk", // Customer Support Software
    "salesforce service cloud", // Customer Service Management
    "customer service software", // Customer Support Tools

    // Product

    "product management tools", // Product Management Software
    "roadmapping tools", // Product Roadmapping Tools
    "user feedback software", // User Feedback Collection Tools
    "analytics tools", // Product Analytics Tools
    "agile methodologies", // Agile Project Management

    // Design

    "graphic design", // Creating visual content to communicate messages
    "ui design", // Designing user interfaces for software and machines
    "ux design", // Enhancing user satisfaction by improving usability and accessibility
    "web design", // Planning and creating websites, focusing on layout and content
    "print design", // Designing for physical media like brochures, posters, and packaging
    "branding", // Developing a unique identity for a product or company
    "typography", // The art and technique of arranging type to make written language legible and visually appealing
    "color theory", // Understanding how colors interact and influence perception
    "layout design", // The arrangement of visual elements on a page
    "illustration", // Creating images to convey ideas or tell a story
    "photo editing", // Modifying images to enhance or alter their appearance
    "vector graphics", // Using geometrical primitives (points, lines, curves) for digital illustrations
    "prototyping", // Creating an early model of a product to test concepts and functionality
    "wireframing", // Building a skeletal outline of a web page or app for structure planning
    "user research", // Studying user needs and behaviors to inform design decisions
    "interaction design", // Designing interactive elements of a product to improve user experience
    "motion design", // Creating artwork that moves, often for web or video applications
    "design thinking", // A problem-solving approach focused on understanding user needs and iterative design
    "adobe creative suite", // A collection of graphic design, video editing, and web development applications
    "figma", // A web-based UI/UX design tool for collaborative design projects
    "sketch", // A digital design tool for creating interfaces and user experiences
    "invision", // A prototyping tool that allows designers to create interactive mockups
    "canva", // An online graphic design platform for creating social media graphics and presentations

    // Writing

    "copywriting",
    "content writing",
    "technical writing",
    "creative writing",
    "academic writing",
    "business writing",
    "scriptwriting",
    "blogging",
    "journalism",
    "editing",
    "proofreading",
    "research",
    "storytelling",
    "SEO",
    "email marketing",
    "social media writing",
    "content strategy",

    "shopify",
  ],
};
