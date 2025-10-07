import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import BilibiliIcon from '../components/Icon/BilibiliIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
// import EmailIcon from '../components/Icon/EmailIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage8 from '../images/miho_5.webp';
import porfolioImage3 from '../images/portfolio/badminton_1.jpg';
import porfolioImage1 from '../images/portfolio/band_1.jpg';
import porfolioImage6 from '../images/portfolio/band_2.jpg';
import porfolioImage4 from '../images/portfolio/climb_1.jpg';
import porfolioImage5 from '../images/portfolio/climb_2.jpg';
import porfolioImage2 from '../images/portfolio/marathon_2025hk.jpg';
import porfolioImage7 from '../images/portfolio/tennis_1.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import visual_crychic from '../images/pub/crychic.png'
import visual_csp from '../images/pub/csp.png'
import visual_debra from '../images/pub/debra.png';
import visual_othello from '../images/pub/othello.png'
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  Collaborators,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Publist,
  Social,
  TestimonialSection,
  TimelineItem,
  UpdatesItem} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yichuan Song\'s Homepage',
  description: "Welcome 你好 こんにちは",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'bio',
  Publist: 'research',
  // Contact: 'contact',
  Portfolio: 'Miscellaneous',
  Collaborators: 'Collaborators',
  Resume: 'Resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'news',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Yichuan.`,
  description: (
    <>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I&apos;m a final-year CS undergrad at <strong className="text-stone-100">the University of Hong Kong (HKU)</strong>, supervised by {' '}
        <a className="text-stone-100 underline hover:text-stone-50" href="https://ikekonglp.github.io/" rel="noopener noreferrer" target="_blank">Prof. Lingpeng Kong</a>
        . Currently, I also work for{' '}
        <a className="text-stone-100 underline hover:text-stone-50" href="https://yilundu.github.io/" rel="noopener noreferrer" target="_blank">Prof. Yilun Du</a>
        . I was also deeply inspired by these{' '}
        <a className="text-stone-100 underline hover:text-stone-50" href="/collaborators" rel="noopener noreferrer" target="_blank">collaborators</a>.
      </div>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My current research goal is to popularize <strong className="text-stone-100">Energy-Based Models</strong> by advancing their theoretical 
        boundaries and developing competitive real-world deployments, with a focus on long-horizon planning.
      </div>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me working at <strong className="text-stone-100">Chi Wah Building@HKU</strong>, jogging 
        along the <strong className="text-stone-100">Victoria Harbour</strong>, or exploring new restaurants with my friends.
      </div>
    </>
  ),
  actions: [
    {
      href: 'resume_20251007.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <div>
        Previously, my research focused on understanding model uncertainty. I was fortunate to be supervised by{' '}
        <a className="underline text-stone-100 hover:text-stone-50" href="https://www.cs.toronto.edu/~six/" rel="noopener noreferrer" target="_blank">
          Prof. Xujie Si
        </a>{' '}
        to conduct model-based verification of transformer robustness during summer 2024 at the University of Toronto, supported by{' '}
        <a className="underline text-stone-100 hover:text-stone-50" href="https://www.mitacs.ca/our-programs/globalink-research-internship-students/" rel="noopener noreferrer" target="_blank">
          Globalink, Mitacs
        </a>{' '}. 
        Afterwards, I spent a rewarding year working with{' '}
        <a className="underline text-stone-100 hover:text-stone-50" href="https://ikekonglp.github.io/" rel="noopener noreferrer" target="_blank">
          Prof. Lingpeng Kong
        </a>{' '}
        on interpretable, uncertainty-driven decoding of LRMs for long-CoT reasoning and agentic planning tasks.
      </div>
  
      <div>
        The unpredictable parametric knowledge stored in such models motivated me to seek generative measures that are theoretically grounded and not confined to text, which led me to energy-based models (EBMs). 
        Presently, I am exploring EBM-based measures for generalizable test-time sampling and compositional spatial planning under the supervision of{' '}
        <a className="underline text-stone-100 hover:text-stone-50" href="https://yilundu.github.io/" rel="noopener noreferrer" target="_blank">
          Prof. Yilun Du
        </a>.
      </div>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Hong Kong SAR, China', Icon: MapIcon},
    {label: 'Study', text: 'University of Hong Kong(B.Eng)', Icon: AcademicCapIcon},
    {label: 'Research Interests', text: 'EBMs, Contrastive Learning, Mechanistical Interpretability', Icon: SparklesIcon},
    {label: 'Email', text: 'songyc@connect.hku.hk', Icon: FlagIcon}
  ],
};

/**
 * BillBoard section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Oct 5th, 2025',
      text: 'This website is created.',
      image: '/updates_images/ts.jpg',
    },
    {
      name: 'Submission',
      text: 'Stay tuned...',
      image: '/updates_images/icml.jpg',
    },
    {
      name: 'Oct 7th, 2025',
      text: 'Start applying for graduate programs.',
      image: '/updates_images/redmoon.jpg',
    },
  ],
};


/**
 * Publications List section
 */
export const publications: Publist[] = [
  {
    title: 'Debra: A Discrete Method for Energy-Based Reasoning',
    authors: 'Yichuan Song, Yilun Du',
    conference: 'Draft for ICML2026',
    field: 'EBMs, Reasonin\'&Plannin\', Test-Time',
    imageSrc: visual_debra,
    paperlink: '/papers_tmp/ICLR26_Draft.pdf',
    codelink: 'https://github.com/YourSaDady/ire_reasoning.git',
  },
  {
    title: 'Introspective Reasoning: Does Large Reasoning Model Says What It Thinks?',
    authors: 'Yichuan Song, Chang Ma, Shiqi Chen, Lingpeng Kong',
    conference: 'Draft for ACL2025',
    field: 'LMs, Interpret, Reasonin\'&Plannin\'',
    imageSrc: visual_crychic,
    paperlink: '/papers_tmp/ACL25_Draft.pdf',
    codelink: 'https://github.com/YourSaDady/Introspective_Reasoning.git',
  },
  {
    title: 'Knowledge Verification on Transformers: Case of Othello',
    authors: 'Yichuan Song, Xujie Si',
    field: 'LMs, Interpret',
    imageSrc: visual_othello,
    codelink: 'https://github.com/YourSaDady/UofT-verification.git',
    demolink: '/papers_tmp/othello.pdf',
  },
  {
    title: 'Compositional Spatial Planning: An Energy-Based Approach',
    authors: 'Yichuan Song, Yilun Du',
    conference: 'To be submitted to ICML2026',
    field: 'EBMs, Reasonin\'&Plannin\'',
    imageSrc: visual_csp,
    paperlink: '/papers_tmp/csp.pdf',
    demolink: 'https://wp2025.cs.hku.hk/fyp25086/',
  },
];

/**
 * Collaborators
 */
export const collaborators: Collaborators[] = [
  {name: 'Chang Ma', homepagelink: 'https://chang-github-00.github.io/-changma/', message: 'Mentored me on IntrospectiveReasoning'},
  {name: 'Shiqi Chen', homepagelink: 'https://shiqichen17.github.io/', message: 'Mentored me on IntrospectiveReasoning'},
  // ↓↓↓  add more here
];

/**
 * Portfolio section TODO!!!!!
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'First Live with X&Y band',
    description: 'Dec 1st, 2024: I play bass and violin for the X&Y band @HKU_Landman. We had our first live show with other amazing bands.',
    image: porfolioImage1,
  },
  {
    title: 'Standard Chartered HK Marathon 2025',
    description: 'Feb 9th, 2025: My first complete marathon! Ready for run in Tokyo or Boston one day.',
    image: porfolioImage2,
  },
  {
    title: 'Badminton with hallmates',
    description: 'Apr 1st, 2025: Played badminton with friends lived in WLH.',
    image: porfolioImage3,
  },
  {
    title: 'Watch Sun Rise at Lantau Trail',
    description: 'Apr 4th, 2025: We spent the whole evening climbing along the trail and watched sun rise at the top.',
    image: porfolioImage4,
  },
  {
    title: 'Trip to Dong Long Island',
    description: 'Feb 23rd, 2025: Chill time with friends on the Dong Long Island.',
    image: porfolioImage5,
  },
  {
    title: 'Guest Performance at CUHK(SZ)',
    description: 'Jan 11st, 2025: Our X&Y band was fortunate to have an invited performance at CUHK(SZ)!',
    image: porfolioImage6,
  },
  {
    title: 'Tennis Match in the Glow',
    description: 'May 12th: Played tennis in the beautiful afterglow.',
    image: porfolioImage7,
  },
  {
    title: 'To be continued',
    image: porfolioImage8,
  },
];

// Updates
export const updates: UpdatesItem[] = [
  {
    date: '2025/10/5',
    message: 'This website is created;)',
  }
];
// Education
export const education: TimelineItem[] = [
  {
    date: 'Sep 2021 - Present(expected to graduate in June, 2026)',
    location: 'The University of Hong Kong',
    title: 'Bachelor in Engineering(Computer Science)',
  }
];
// Exchange&Intern
export const exchange_intern: TimelineItem[] = [
  {
    date: 'May 2024 - Aug 2024',
    location: 'Bahen Centre for Information Technology, University of Toronto',
    title: 'Research Intern(Globalink, Mitacs)',
  },
  {
    date: 'Jun 2023 - Aug 2023',
    location: 'University of California, Berkeley',
    title: 'Summer Session Visitor(HKU SSAP scholarship)',
  },
  {
    date: 'Jun 2022 - Aug 2022',
    location: 'Peking University',
    title: 'Summer School Visitor(HKU China Vision Programme)',
  }
];
// Service
export const service: TimelineItem[] = [
  {
    date: '2025-26 A.Y.',
    location: 'The University of Hong Kong',
    title: 'Student TA for the course AILT1001',
  },
  {
    date: '02/2023 - 05/2023',
    location: 'Vedi Fortress, Armenian Araxes River Valley',
    title: 'Student Helper for HKU Archaeology Team',
  },
  {
    date: '09/2022 - 01/2023',
    location: 'The University of Hong Kong',
    title: 'Student TA for the course ENGG1340',
  },
  {
    date: '09/2021 - 07/2023',
    location: 'The University of Hong Kong',
    title: 'Member of HKU RoboMaster Team(Mechanical Group)',
  }
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/YourSaDady'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'Email', Icon: EmailIcon, href: 'mailto:songyc@connect.hku.hk'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lovestaiga-199257246/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/taaaajiang/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Tiger_Song_1'},
];