export const personalInfo = {
  name: 'Kaveesh Senevirathne',
  title: 'Fullstack Software Engineer',
  tagline: 'Building scalable web applications with precision & purpose',
  email: 'khsenevirathne@gmail.com',
  phone: '+94 76 5350039',
  location: 'Galle, Sri Lanka',
  bio: `I'm a fullstack software engineer with a passion for crafting robust, scalable web applications. From live-streaming platforms serving millions of users to real-time election reporting systems, I've built software that operates at the intersection of performance and impact. Currently working with ClickDo Ltd. (UK), I bring expertise across the entire stack — from Spring Boot and Node.js backends to React, Angular, and Next.js frontends.`,
  links: {
    github: 'https://github.com/KHSenevirathne',
    linkedin: 'https://www.linkedin.com/in/kaveesh-senevirathne',
    stackoverflow:
      'https://stackoverflow.com/users/14956167/kaveesh-senevirathne',
    twitter: 'https://twitter.com/KHSenevirathne',
  },
};

export const experience = [
  {
    role: 'Software Engineer',
    company: 'ClickDo Ltd.',
    location: 'London, United Kingdom',
    type: 'Remote',
    period: 'Mar 2025 — Present',
    current: true,
    description: [
      'Integrating front-end and server-side components with Next.js to maximize SEO performance',
      'Building production-grade web applications for UK-based clients',
      'Optimizing web performance and search engine visibility',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'SEO'],
  },
  {
    role: 'Associate IT Executive',
    company: 'Wave Beach Resort',
    location: 'Unawatuna, Sri Lanka',
    type: 'Contract',
    period: 'Jan 2024 — Jan 2025',
    current: false,
    description: [
      'Administered websites and internal applications on a contractual basis',
      'Developed Billing & Payment Analytics Dashboard for financial insights',
      'Led Booking System Optimization Initiative improving guest experience',
      'Implemented Internal System Process Automation reducing manual tasks',
      'Integrated Payment Gateway for seamless transaction processing',
    ],
    tech: ['Web Admin', 'Dashboard', 'Payment Integration', 'Automation'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Capital Maharaja Group',
    location: 'Colombo, Sri Lanka',
    type: 'Internship',
    period: 'Jan 2023 — Jul 2023',
    current: false,
    description: [
      'Completed a 6-month internship contributing to multiple production applications',
      'Collaborated with cross-functional teams to design and implement software solutions',
      'Gained hands-on experience with Angular, Spring Boot, and live stream server management',
    ],
    tech: ['Angular', 'Spring Boot', 'Server Management', 'Live Streaming'],
  },
];

export const projects = [
  {
    title: 'Election 2024 Web Application',
    client: 'Newsfirst',
    description:
      'Comprehensive election coverage and analysis platform. Optimized reporting with real-time results, transparent ad management, and live updates for all types of elections across Sri Lanka.',
    tech: [
      'Angular Material',
      'Bootstrap',
      'Node.js',
      'Spring Boot',
      'Maven',
      'Spring Security',
    ],
    highlights: ['Real-time Updates', 'Ad Management', 'Election Analytics'],
    category: 'Enterprise',
  },
  {
    title: 'Newsfirst.lk Websites',
    client: 'Capital Maharaja Group',
    description:
      'Multi-platform news delivery system providing precise and impartial news to the entire population of Sri Lanka. Features optimized user interfaces and a CMS for remote content management.',
    tech: [
      'Spring Boot',
      'Angular',
      'Bootstrap',
      'NestJS',
      'MySQL',
    ],
    highlights: ['CMS Platform', 'Multi-language', 'National Scale'],
    category: 'Media',
  },
  {
    title: 'Cricket World Cup 2023/24 Live Stream',
    client: 'Newsfirst',
    description:
      'Professional live-streaming platform for CWC 23/24 matches. Engineered to handle millions of concurrent users with uninterrupted, high-quality streaming throughout the tournament.',
    tech: ['Spring Boot', 'JavaScript', 'Bootstrap', 'MySQL'],
    highlights: ['1M+ Users', 'Live Streaming', 'High Availability'],
    category: 'Streaming',
  },
  {
    title: 'Eva Millionaire Dreams — Season 2',
    client: 'EVA',
    description:
      'QR Code Scanning and SMS Gateway integration system to streamline data capture and validate customer coupon codes. Revolutionized the previous system with optimized features.',
    tech: ['Spring Boot', 'JavaScript', 'Bootstrap', 'MySQL'],
    highlights: ['QR Scanning', 'SMS Gateway', 'Data Validation'],
    category: 'Application',
  },
];

export const skills = {
  languages: [
    { name: 'Java', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'SQL', level: 85 },
    { name: 'C#', level: 60 },
  ],
  frameworks: [
    'React',
    'React Native',
    'Angular',
    'Next.js',
    'Spring Boot',
    'Spring',
    'Hibernate',
    'Spring Data JPA',
    'Node.js',
    'Express.js',
    'NestJS',
    'Flutter',
    'JavaFX',
    'Bootstrap',
    'jQuery',
    'Maven',
    'NPM',
  ],
  databases: ['MySQL', 'MongoDB'],
  tools: [
    'Git',
    'GitHub',
    'GitLab',
    'Postman',
    'Apache Tomcat',
    'Figma',
    'Draw.io',
  ],
  ides: ['IntelliJ IDEA', 'VS Code', 'Android Studio'],
  os: ['Ubuntu', 'Windows'],
};

export const education = [
  {
    degree: 'Bachelor of Engineering (Hons) in Software Engineering',
    type: 'Top-Up (UG)',
    institution: 'London Metropolitan University',
    location: 'United Kingdom',
    period: 'Expected 2026',
    current: true,
  },
  {
    degree: 'Graduate Diploma in Software Engineering (GDSE)',
    type: '',
    institution: 'Institute of Software Engineering (IJSE)',
    location: 'Sri Lanka',
    period: 'Sep 2021 — Sep 2024',
    current: false,
  },
];

export const interests = [
  'Full Stack Development',
  'UI/UX Design',
  'Mobile Application Development',
  'DevOps',
  'Cloud Computing',
];

export const wishToLearn = [
  'Project Management',
  'Kubernetes',
  'Cyber Security',
  'AWS & Azure',
  'Native iOS',
  'IoT',
  'Network Engineering',
];
