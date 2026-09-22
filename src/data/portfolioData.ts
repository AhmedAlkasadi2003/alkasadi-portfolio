export interface CaseStudy {
  slug: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  category: 'Front-End' | 'E-Commerce' | 'Enterprise Systems';
  categoryAr: string;
  role: string;
  roleAr: string;
  period: string;
  image: string;
  featured: boolean;
  summary: string;
  summaryAr: string;
  problem: string;
  problemAr: string;
  approach: string;
  approachAr: string;
  architecture: {
    description: string;
    descriptionAr: string;
    highlights: string[];
    highlightsAr: string[];
  };
  measurableOutcomes: {
    metric: string;
    metricAr: string;
    label: string;
    labelAr: string;
  }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient';
    context?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyAr: string;
  role: string;
  roleAr: string;
  period: string;
  periodAr: string;
  location: string;
  locationAr: string;
  description: string[];
  descriptionAr: string[];
  keyWins: string[];
  keyWinsAr: string[];
  technologies: string[];
}

export interface SocialProfile {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleAr: string;
  date: string;
  dateAr: string;
  category: string;
  categoryAr: string;
  readTime: string;
  readTimeAr: string;
  excerpt: string;
  excerptAr: string;
  author: string;
  content: string;
}

export const PERSONAL_INFO = {
  fullName: 'Ahmed Mahfoodh Alkasadi',
  fullNameAr: 'أحمد محفوظ الكاسدي',
  shortName: 'Ahmed Alkasadi',
  username: 'AhmedAlkasadi2003',
  title: 'Front-End Developer',
  titleAr: 'مطور واجهات أمامية',
  location: 'Hadramout, Yemen',
  locationAr: 'حضرموت، اليمن',
  emails: ['ahmed.alkasadi2003@gmail.com'],
  phones: ['+967 770 500 789'],
  github: 'https://github.com/AhmedAlkasadi2003',
  linkedin: 'https://www.linkedin.com/in/ahmed-alkasadi',
  education: {
    degree: 'Bachelor of Information Technology',
    degreeAr: 'بكالوريوس تقنية المعلومات',
    institution: 'Hadramout University of Science and Technology',
    institutionAr: 'جامعة حضرموت للعلوم والتكنولوجيا',
    period: '2020 – 2025',
    gpa: 'Very Good',
  },
  training: {
    name: 'ITI React.js Summer Training',
    nameAr: 'التدريب الصيفي React.js في ITI',
    period: 'September 2023',
    focus: 'Next.js, Tailwind CSS, ES6 JavaScript, and clean, modular code.',
    focusAr: 'Next.js وTailwind CSS وJavaScript ES6 وكتابة كود نظيف ومنظّم.',
  },
  languages: [
    { name: 'Arabic', nameAr: 'العربية', level: 'Listed on CV', levelAr: 'مذكورة في السيرة الذاتية' },
    { name: 'English', nameAr: 'الإنجليزية', level: 'Listed on CV', levelAr: 'مذكورة في السيرة الذاتية' },
  ],
};

const frontendImage = '/images/frontend-work.svg';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'itqanpro-system-corporate-platform',
    title: 'ItqanPro System & Corporate Platform',
    titleAr: 'نظام ومنصة إتقان برو للشركات',
    subtitle: 'Company profile and business-management platform.',
    subtitleAr: 'منصة لملف الشركة وإدارة الأعمال.',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة مؤسسية',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: 'Portfolio Project',
    image: frontendImage,
    featured: true,
    summary: 'Developed a company profile and business platform covering accounting, human resources, transaction management, entity data, user management, and Ministry of Health integration.',
    summaryAr: 'طوّرت منصة لملف الشركة وإدارة الأعمال تشمل المحاسبة والموارد البشرية وإدارة المعاملات وبيانات الكيانات وإدارة المستخدمين والتكامل مع وزارة الصحة.',
    problem: 'The platform needed to bring company information and multiple business-management areas together in one experience.',
    problemAr: 'احتاجت المنصة إلى جمع معلومات الشركة ومجالات إدارة الأعمال المتعددة في تجربة واحدة.',
    approach: 'Built the front end with Next.js and Tailwind CSS, organizing the platform around its company-profile, management, and user-facing areas.',
    approachAr: 'بنيت الواجهة الأمامية باستخدام Next.js وTailwind CSS مع تنظيم المنصة حول ملف الشركة ومجالات الإدارة والمستخدمين.',
    architecture: {
      description: 'A front-end platform for a corporate profile and business-management workflows.',
      descriptionAr: 'منصة واجهة أمامية لملف الشركة وسير عمل إدارة الأعمال.',
      highlights: ['Company profile', 'Accounting and human-resources areas', 'Transaction, entity-data, and user management'],
      highlightsAr: ['ملف الشركة', 'مجالات المحاسبة والموارد البشرية', 'إدارة المعاملات وبيانات الكيانات والمستخدمين'],
    },
    measurableOutcomes: [
      { metric: 'Next.js', metricAr: 'Next.js', label: 'Front-end technology', labelAr: 'تقنية الواجهة الأمامية' },
      { metric: 'Tailwind CSS', metricAr: 'Tailwind CSS', label: 'Styling technology', labelAr: 'تقنية التنسيق' },
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'basqat-content-platform',
    title: 'Basqat',
    titleAr: 'بسقات',
    subtitle: 'Content-management platform for products, services, courses, and media.',
    subtitleAr: 'منصة لإدارة المنتجات والخدمات والدورات والمحتوى الإعلامي.',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة مؤسسية',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: 'Portfolio Project',
    image: frontendImage,
    featured: true,
    summary: 'Developed a platform for managing products, services, training courses, and media-center content.',
    summaryAr: 'طوّرت منصة لإدارة المنتجات والخدمات والدورات التدريبية ومحتوى المركز الإعلامي.',
    problem: 'The project called for one interface to manage several types of business and media content.',
    problemAr: 'تطلّب المشروع واجهة واحدة لإدارة عدة أنواع من محتوى الأعمال والإعلام.',
    approach: 'Implemented the platform interface with Next.js and Tailwind CSS.',
    approachAr: 'نفّذت واجهة المنصة باستخدام Next.js وTailwind CSS.',
    architecture: {
      description: 'A content-management interface spanning products, services, training, and media-center content.',
      descriptionAr: 'واجهة لإدارة المحتوى تشمل المنتجات والخدمات والتدريب والمركز الإعلامي.',
      highlights: ['Product management', 'Service management', 'Training courses and media-center content'],
      highlightsAr: ['إدارة المنتجات', 'إدارة الخدمات', 'الدورات التدريبية ومحتوى المركز الإعلامي'],
    },
    measurableOutcomes: [
      { metric: 'Next.js', metricAr: 'Next.js', label: 'Front-end technology', labelAr: 'تقنية الواجهة الأمامية' },
      { metric: 'Tailwind CSS', metricAr: 'Tailwind CSS', label: 'Styling technology', labelAr: 'تقنية التنسيق' },
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'rakzoon-dashboard',
    title: 'Rakzoon Dashboard',
    titleAr: 'لوحة تحكم ركزون',
    subtitle: 'Integrated, high-performance dashboard for the Rakzoon application.',
    subtitleAr: 'لوحة تحكم متكاملة وعالية الأداء لتطبيق ركزون.',
    category: 'Front-End',
    categoryAr: 'تطوير واجهات أمامية',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: 'Portfolio Project',
    image: frontendImage,
    featured: true,
    summary: 'Designed and developed an integrated, high-performance dashboard for the Rakzoon application.',
    summaryAr: 'صممت وطوّرت لوحة تحكم متكاملة وعالية الأداء لتطبيق ركزون.',
    problem: 'Rakzoon required an integrated dashboard experience for its application.',
    problemAr: 'احتاج تطبيق ركزون إلى تجربة لوحة تحكم متكاملة.',
    approach: 'Designed and developed the dashboard with Next.js and Tailwind CSS.',
    approachAr: 'صممت وطوّرت لوحة التحكم باستخدام Next.js وTailwind CSS.',
    architecture: {
      description: 'A front-end dashboard experience for the Rakzoon application.',
      descriptionAr: 'تجربة لوحة تحكم بواجهة أمامية لتطبيق ركزون.',
      highlights: ['Integrated dashboard', 'Application-focused interface', 'High-performance front-end implementation'],
      highlightsAr: ['لوحة تحكم متكاملة', 'واجهة مخصصة للتطبيق', 'تنفيذ واجهة أمامية عالية الأداء'],
    },
    measurableOutcomes: [
      { metric: 'Next.js', metricAr: 'Next.js', label: 'Front-end technology', labelAr: 'تقنية الواجهة الأمامية' },
      { metric: 'Tailwind CSS', metricAr: 'Tailwind CSS', label: 'Styling technology', labelAr: 'تقنية التنسيق' },
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'der3-education-dashboard',
    title: 'DER3 Educational Admin Dashboard',
    titleAr: 'لوحة الإدارة التعليمية DER3',
    subtitle: 'Educational administration dashboard with student, course, grading, and analytics features.',
    subtitleAr: 'لوحة إدارة تعليمية تضم الطلاب والمقررات والدرجات والتحليلات.',
    category: 'Enterprise Systems',
    categoryAr: 'أنظمة مؤسسية',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: 'Portfolio Project',
    image: frontendImage,
    featured: true,
    summary: 'Designed and developed an educational admin dashboard with student management, courses, grading systems, and real-time performance analytics.',
    summaryAr: 'صممت وطوّرت لوحة إدارة تعليمية شاملة تتضمن إدارة الطلاب والمقررات ونظم الدرجات وتحليلات الأداء الفورية.',
    problem: 'The educational workflow needed an administration dashboard spanning students, courses, grading, and performance.',
    problemAr: 'احتاج سير العمل التعليمي إلى لوحة إدارة تشمل الطلاب والمقررات والدرجات والأداء.',
    approach: 'Created the front end with Next.js and Tailwind CSS for the educational administration experience.',
    approachAr: 'أنشأت الواجهة الأمامية باستخدام Next.js وTailwind CSS لتجربة الإدارة التعليمية.',
    architecture: {
      description: 'An educational administration interface centered on students, course information, grades, and performance analytics.',
      descriptionAr: 'واجهة إدارة تعليمية ترتكز على الطلاب ومعلومات المقررات والدرجات وتحليلات الأداء.',
      highlights: ['Student management', 'Course management', 'Grading and real-time performance analytics'],
      highlightsAr: ['إدارة الطلاب', 'إدارة المقررات', 'الدرجات وتحليلات الأداء الفورية'],
    },
    measurableOutcomes: [
      { metric: 'Next.js', metricAr: 'Next.js', label: 'Front-end technology', labelAr: 'تقنية الواجهة الأمامية' },
      { metric: 'Tailwind CSS', metricAr: 'Tailwind CSS', label: 'Styling technology', labelAr: 'تقنية التنسيق' },
    ],
    technologies: ['Next.js', 'Tailwind CSS'],
  },
  {
    slug: 'e-commerce-storefront',
    title: 'E-Commerce Storefront',
    titleAr: 'متجر إلكتروني',
    subtitle: 'E-commerce website with products, cart, and checkout features.',
    subtitleAr: 'موقع تجارة إلكترونية يضم المنتجات وسلة التسوق وإتمام الشراء.',
    category: 'E-Commerce',
    categoryAr: 'تجارة إلكترونية',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: 'Portfolio Project',
    image: frontendImage,
    featured: false,
    summary: 'Built a full-featured e-commerce website with product listings, shopping-cart, and checkout functionality.',
    summaryAr: 'بنيت موقع تجارة إلكترونية متكاملاً يضم قوائم المنتجات وسلة التسوق ووظائف إتمام الشراء.',
    problem: 'The storefront needed the core customer flow from browsing products through checkout.',
    problemAr: 'احتاج المتجر إلى رحلة العميل الأساسية من تصفح المنتجات حتى إتمام الشراء.',
    approach: 'Developed the front end with React and Tailwind CSS, including React Router DOM.',
    approachAr: 'طوّرت الواجهة الأمامية باستخدام React وTailwind CSS، مع React Router DOM.',
    architecture: {
      description: 'A React storefront interface with product listing, cart, and checkout areas.',
      descriptionAr: 'واجهة متجر مبنية بـ React تشمل قوائم المنتجات وسلة التسوق وإتمام الشراء.',
      highlights: ['Product listings', 'Shopping cart', 'Checkout functionality'],
      highlightsAr: ['قوائم المنتجات', 'سلة التسوق', 'وظائف إتمام الشراء'],
    },
    measurableOutcomes: [
      { metric: 'React', metricAr: 'React', label: 'Front-end technology', labelAr: 'تقنية الواجهة الأمامية' },
      { metric: 'Tailwind CSS', metricAr: 'Tailwind CSS', label: 'Styling technology', labelAr: 'تقنية التنسيق' },
    ],
    technologies: ['React', 'Tailwind CSS', 'React Router DOM'],
  },
  {
    slug: 'movies-app',
    title: 'Movies App',
    titleAr: 'تطبيق الأفلام',
    subtitle: 'Interactive movie-browsing and search application.',
    subtitleAr: 'تطبيق تفاعلي لتصفح الأفلام والبحث عنها.',
    category: 'Front-End',
    categoryAr: 'تطوير واجهات أمامية',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: 'Portfolio Project',
    image: frontendImage,
    featured: false,
    summary: 'Built an interactive movies app that lets users browse and search movies and view their details.',
    summaryAr: 'بنيت تطبيق أفلام تفاعلياً يتيح للمستخدمين تصفح الأفلام والبحث عنها وعرض تفاصيلها.',
    problem: 'The app needed an interactive way to browse, search, and inspect movie details.',
    problemAr: 'احتاج التطبيق إلى طريقة تفاعلية لتصفح الأفلام والبحث عنها واستعراض تفاصيلها.',
    approach: 'Created the user interface around movie browsing, search, and detail views.',
    approachAr: 'أنشأت واجهة المستخدم حول تصفح الأفلام والبحث عنها وعرض التفاصيل.',
    architecture: {
      description: 'An interactive interface with browsing, search, and movie-detail views.',
      descriptionAr: 'واجهة تفاعلية تضم التصفح والبحث وعرض تفاصيل الأفلام.',
      highlights: ['Movie browsing', 'Movie search', 'Movie-detail views'],
      highlightsAr: ['تصفح الأفلام', 'البحث عن الأفلام', 'عرض تفاصيل الأفلام'],
    },
    measurableOutcomes: [
      { metric: 'Browse', metricAr: 'تصفح', label: 'Movie discovery', labelAr: 'استكشاف الأفلام' },
      { metric: 'Search', metricAr: 'بحث', label: 'Movie search', labelAr: 'البحث عن الأفلام' },
    ],
    technologies: ['Movie browsing', 'Search', 'Detail views'],
  },
  {
    slug: 'hotel-room-reservation',
    title: 'Hotel Room Reservation',
    titleAr: 'حجز غرف فندقية',
    subtitle: 'Front-end hotel reservation website.',
    subtitleAr: 'موقع واجهة أمامية لحجز الفنادق.',
    category: 'Front-End',
    categoryAr: 'تطوير واجهات أمامية',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: 'Portfolio Project',
    image: frontendImage,
    featured: false,
    summary: 'Developed the front end for a hotel reservation website.',
    summaryAr: 'طوّرت الواجهة الأمامية لموقع حجز فندقي.',
    problem: 'The project required a hotel-reservation website interface.',
    problemAr: 'تطلّب المشروع واجهة لموقع حجز فندقي.',
    approach: 'Developed the front end with React and Tailwind CSS.',
    approachAr: 'طوّرت الواجهة الأمامية باستخدام React وTailwind CSS.',
    architecture: {
      description: 'A front-end reservation website for hotel rooms.',
      descriptionAr: 'موقع حجز غرف فندقية بواجهة أمامية.',
      highlights: ['Hotel reservation interface', 'Front-end implementation', 'Responsive styling with Tailwind CSS'],
      highlightsAr: ['واجهة حجز فندقي', 'تنفيذ واجهة أمامية', 'تنسيق متجاوب باستخدام Tailwind CSS'],
    },
    measurableOutcomes: [
      { metric: 'React', metricAr: 'React', label: 'Front-end technology', labelAr: 'تقنية الواجهة الأمامية' },
      { metric: 'Tailwind CSS', metricAr: 'Tailwind CSS', label: 'Styling technology', labelAr: 'تقنية التنسيق' },
    ],
    technologies: ['React', 'Tailwind CSS'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Front-End Development',
    titleAr: 'تطوير الواجهات الأمامية',
    icon: 'Layout',
    description: 'Building modern, interactive, and high-performance user interfaces.',
    descriptionAr: 'بناء واجهات مستخدم حديثة وتفاعلية وعالية الأداء.',
    skills: [
      { name: 'HTML', level: 'Proficient' },
      { name: 'CSS', level: 'Proficient' },
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'React.js', level: 'Proficient' },
      { name: 'Next.js', level: 'Proficient' },
    ],
  },
  {
    id: 'styling',
    title: 'Styling & UI',
    titleAr: 'التنسيق وواجهات المستخدم',
    icon: 'Palette',
    description: 'Tools used to create responsive and maintainable interfaces.',
    descriptionAr: 'أدوات مستخدمة لإنشاء واجهات متجاوبة وقابلة للصيانة.',
    skills: [
      { name: 'Tailwind CSS', level: 'Proficient' },
      { name: 'Bootstrap', level: 'Proficient' },
      { name: 'jQuery', level: 'Proficient' },
    ],
  },
  {
    id: 'react-ecosystem',
    title: 'React Ecosystem',
    titleAr: 'منظومة React',
    icon: 'Code2',
    description: 'React tools for application state, hooks, and routing.',
    descriptionAr: 'أدوات React لإدارة الحالة والخطافات والتوجيه.',
    skills: [
      { name: 'Redux', level: 'Proficient' },
      { name: 'Redux Toolkit', level: 'Proficient' },
      { name: 'React Hooks', level: 'Proficient' },
      { name: 'React Router DOM', level: 'Proficient' },
    ],
  },
  {
    id: 'backend-foundations',
    title: 'Backend Foundations',
    titleAr: 'أساسيات الخلفية',
    icon: 'Server',
    description: 'Backend technologies listed in Ahmed’s CV.',
    descriptionAr: 'تقنيات الخلفية المذكورة في السيرة الذاتية لأحمد.',
    skills: [
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express', level: 'Proficient' },
    ],
  },
  {
    id: 'workflow',
    title: 'Development Workflow',
    titleAr: 'سير عمل التطوير',
    icon: 'GitBranch',
    description: 'Version-control tools for collaborative development.',
    descriptionAr: 'أدوات التحكم بالإصدارات للتطوير التعاوني.',
    skills: [
      { name: 'Git', level: 'Proficient' },
      { name: 'GitHub', level: 'Proficient' },
    ],
  },
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'quarisma',
    company: 'Quarisma',
    companyAr: 'كواريسما',
    role: 'Intern / Freelance Front-End Developer',
    roleAr: 'متدرب / مطور واجهات أمامية مستقل',
    period: '2025 – 2026',
    periodAr: '2025 – 2026',
    location: 'Hadramout, Yemen',
    locationAr: 'حضرموت، اليمن',
    description: ['Designed new projects and developed front-end interfaces using React.'],
    descriptionAr: ['صممت مشاريع جديدة وطوّرت واجهات أمامية باستخدام React.'],
    keyWins: ['Designed new projects', 'Developed React front ends'],
    keyWinsAr: ['تصميم مشاريع جديدة', 'تطوير واجهات أمامية باستخدام React'],
    technologies: ['React'],
  },
  {
    id: 'alphabet',
    company: 'Alphabet',
    companyAr: 'ألفابت',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: '2023 – 2024',
    periodAr: '2023 – 2024',
    location: 'Hadramout, Yemen',
    locationAr: 'حضرموت، اليمن',
    description: ['Worked as a full-time employee, designing new projects and developing APIs using Tailwind CSS and React.'],
    descriptionAr: ['عملت بدوام كامل في تصميم مشاريع جديدة وتطوير واجهات برمجية باستخدام Tailwind CSS وReact.'],
    keyWins: ['Designed new projects', 'Developed APIs with React and Tailwind CSS'],
    keyWinsAr: ['تصميم مشاريع جديدة', 'تطوير واجهات برمجية باستخدام React وTailwind CSS'],
    technologies: ['React', 'Tailwind CSS', 'APIs'],
  },
  {
    id: 'new-dimensions-company',
    company: 'New Dimensions Company',
    companyAr: 'شركة الأبعاد الجديدة',
    role: 'Front-End Developer',
    roleAr: 'مطور واجهات أمامية',
    period: '2024 – 2025',
    periodAr: '2024 – 2025',
    location: 'Hadramout, Yemen',
    locationAr: 'حضرموت، اليمن',
    description: ['Worked as a full-time employee, designing new projects and developing APIs using Tailwind CSS and Next.js.'],
    descriptionAr: ['عملت بدوام كامل في تصميم مشاريع جديدة وتطوير واجهات برمجية باستخدام Tailwind CSS وNext.js.'],
    keyWins: ['Designed new projects', 'Developed APIs with Next.js and Tailwind CSS'],
    keyWinsAr: ['تصميم مشاريع جديدة', 'تطوير واجهات برمجية باستخدام Next.js وTailwind CSS'],
    technologies: ['Next.js', 'Tailwind CSS', 'APIs'],
  },
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  { platform: 'GitHub', url: PERSONAL_INFO.github, handle: '@AhmedAlkasadi2003', icon: 'Github' },
  { platform: 'LinkedIn', url: PERSONAL_INFO.linkedin, handle: 'Ahmed Alkasadi', icon: 'Linkedin' },
  { platform: 'Email', url: `mailto:${PERSONAL_INFO.emails[0]}`, handle: PERSONAL_INFO.emails[0], icon: 'Mail' },
  { platform: 'Phone', url: 'tel:+967770500789', handle: PERSONAL_INFO.phones[0], icon: 'Phone' },
];

export const BLOG_POSTS: BlogPost[] = [];

export const EXPERIENCE_ITEMS = WORK_EXPERIENCES;
export const BLOG_POSTS_DATA = BLOG_POSTS;
