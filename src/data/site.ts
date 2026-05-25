export const SITE = {
  name: 'Kato Elvis',
  title: 'Software Engineering Student & Full-Stack Developer',
  bio: '2nd year Software Engineering student at Bugema University, passionate about building scalable web applications and contributing to open source healthcare and fintech ecosystems.',
  email: 'katoelvis23@gmail.com',
  phone: '+256 778946429',
  phoneHref: 'tel:+256778946429',
  github: 'ELVIS-KATO',
  githubUrl: 'https://github.com/ELVIS-KATO',
  linkedin: '#', //To be added
  university: 'Bugema University',
  year: '2nd Year',
  resumePath: 'Kato_Elvis_Resume.pdf', //Resume Doc here...
} as const

export const OPEN_SOURCE_COMMUNITIES = [
  { name: 'OpenMRS', startYear: 2024 },
  { name: 'Mifos', startYear: 2025 },
  { name: 'Open Elements', startYear: 2025 },
  { name: 'Sugar Labs', startYear: 2025 },
  { name: 'Linux Foundation', startYear: 2025 },
] as const

export const SKILLS = {
  languages: [
    { name: 'Java', level: 85 },
    { name: 'Python', level: 82 },
    { name: 'TypeScript', level: 80 },
  ],
  frameworks: [
    { name: 'React', level: 85 },
    { name: 'Django', level: 68 },
    { name: 'Spring Boot', level: 75 },
  ],
  tools: [
    { name: 'REST APIs', level: 88 },
    { name: 'GitHub API', level: 80 },
    { name: 'Git', level: 90 },
  ],
} as const

export const PROJECTS = [
  {
    id: 'kitoma',
    title: 'Kitoma Secondary School — Accounting System',
    description:
      'Full accounting system for tracking school inflows and outflows, generating receipts, and producing term, monthly, and yearly financial reports for administrators.',
    tech: ['Python', 'React', 'MySQL', 'Typescript','Bootstrap'],
    github: 'https://github.com/ELVIS-KATO/Kitoma-Secondary-School', 
    placeholderText: 'Kitoma Admin dashboard',
    imageData: 'KitomaSDA.png',
  },
  {
    id: 'rakai',
    title: 'Rakai Community School of Nursing — Student Records',
    description:
      'Comprehensive student records management covering personal information, academic progress, and financial tracking for nursing school administration.',
    tech: ['Java', 'Bootstrap', 'MySQL', 'CSS','JavaFX'],
    github: 'https://github.com/ELVIS-KATO/SCHOOL-MANAGEMENT', 
    placeholderText: 'Rakai school image',
    imageData: 'Rakai-screenshot.png',
  },
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'GitHub', href: '/#github-stats' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
] as const
