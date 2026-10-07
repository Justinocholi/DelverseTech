export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'How It Works' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export const SERVICES = [
  {
    icon: '🧠',
    title: 'AI-Powered Solutions',
    description: 'Transform your business with intelligent automation, ML models, and AI-driven insights that elevate decision-making and operational efficiency.',
    features: ['Machine Learning Models', 'NLP & Computer Vision', 'Predictive Analytics', 'AI Automation'],
    color: '#6366f1',
    gradient: 'from-indigo-500/20 to-purple-500/10',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Stunning, high-performance web applications crafted with modern technologies, pixel-perfect design, and exceptional user experiences.',
    features: ['Next.js & React', 'Progressive Web Apps', 'SEO Optimization', 'CMS Integration'],
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    icon: '📱',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver seamless performance across iOS and Android with beautiful, intuitive interfaces.',
    features: ['Flutter & React Native', 'Native iOS & Android', 'UI/UX Design', 'App Store Optimization'],
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 to-pink-500/10',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable intelligence with advanced analytics, real-time dashboards, and predictive modeling solutions.',
    features: ['Business Intelligence', 'Data Visualization', 'Real-time Dashboards', 'Predictive Modeling'],
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    icon: '🔐',
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions to protect your digital assets, ensure compliance, and build resilience against evolving threats.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance & Governance', 'Threat Intelligence'],
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure, automated CI/CD pipelines, and DevOps practices that accelerate deployment and maximize reliability.',
    features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
    color: '#ef4444',
    gradient: 'from-red-500/20 to-rose-500/10',
  },
];

export const STATS = [
  { number: '50+', label: 'Projects Delivered', suffix: '' },
  { number: '30+', label: 'Happy Clients', suffix: '' },
  { number: '5+', label: 'Years Experience', suffix: '' },
  { number: '99', label: 'Client Satisfaction', suffix: '%' },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We deep-dive into your business goals, challenges, and competitive landscape to craft a tailored technology roadmap aligned with your vision.',
    icon: '🔭',
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description: 'Our expert architects design scalable system blueprints while our designers craft stunning, user-centric interfaces that convert and delight.',
    icon: '✏️',
  },
  {
    number: '03',
    title: 'Build & Deploy',
    description: 'Agile development sprints, rigorous testing, and seamless CI/CD deployment pipelines deliver production-ready solutions on schedule.',
    icon: '🚀',
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'AbisGroup Africa',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description: 'A comprehensive livestock marketplace platform connecting farmers, processors, and consumers across the full supply chain with real-time tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    link: 'https://www.abisgroup.africa/',
    color: '#6366f1',
    gradient: 'from-indigo-600 to-purple-700',
  },
  {
    id: 2,
    title: 'MECA Group',
    category: 'website',
    categoryLabel: 'Corporate Website',
    description: 'Complete digital rebrand and platform redevelopment for Nigeria\'s leading engineering group, delivering a modern presence with enhanced performance.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://www.mecagroup.com.ng/',
    color: '#06b6d4',
    gradient: 'from-cyan-600 to-blue-700',
  },
  {
    id: 3,
    title: 'LearnlyApp Platform',
    category: 'education',
    categoryLabel: 'EdTech',
    description: 'Interactive educational platform featuring content management, student progress tracking, and dynamic course delivery for modern learners.',
    technologies: ['React', 'Next.js', 'Firebase', 'Vercel'],
    link: 'https://uploadify-learning.vercel.app/',
    color: '#10b981',
    gradient: 'from-emerald-600 to-teal-700',
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    text: 'DelverseTech completely transformed our digital presence. Their team delivered a comprehensive solution that not only looks incredible but significantly improved our operational efficiency. Absolutely world-class work.',
    author: 'Engr. Yakubu Samaila',
    position: 'Managing Director & CEO',
    company: 'MECA GROUP',
    avatar: '/meca.jpg',
    initials: 'YS',
  },
  {
    stars: 5,
    text: 'Working with DelverseTech was a game-changer for our firm. They understood our complex requirements and delivered a sophisticated platform that perfectly aligns with our strategic business needs.',
    author: 'Dr. I.B. Gashinbaki',
    position: 'Group Country Director',
    company: 'DCP',
    avatar: '/dcp.jpg',
    initials: 'IG',
  },
  {
    stars: 5,
    text: 'The platform they built for us exceeded all expectations. Their innovative approach to UX design and robust architecture created an experience that both educators and students absolutely love.',
    author: 'Michael Adebayo',
    position: 'Director of Products',
    company: 'LearnlyApp',
    avatar: '/debs.jpg',
    initials: 'MA',
  },
];

export const TEAM = [
  {
    name: 'David Ocholi',
    role: 'Founder & CEO',
    bio: 'Visionary technology leader with deep expertise in enterprise software strategy and digital transformation at scale.',
    avatar: '/Dave.jpeg',
    initials: 'DO',
    color: '#6366f1',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Tomiwa Amodemaja',
    role: 'Co-Founder & Head of Product',
    bio: 'Product strategist who bridges user needs with technical execution to craft exceptional digital experiences.',
    avatar: '/Tomi.jpeg',
    initials: 'TA',
    color: '#06b6d4',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Joshua Ocholi',
    role: 'Co-Founder & CTO',
    bio: 'Technical architect and lead engineer who transforms ambitious ideas into elegant, scalable software systems.',
    avatar: '/josh.jpg',
    initials: 'JO',
    color: '#8b5cf6',
    linkedin: '#',
    twitter: '#',
  },
];

export const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Flutter',
  'TensorFlow', 'PyTorch', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes',
  'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL',
];
