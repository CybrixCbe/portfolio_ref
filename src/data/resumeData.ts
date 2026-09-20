import {
  ContactDetails,
  EducationItem,
  InternshipItem,
  ProjectItem,
  CertificationItem
} from '../types/portfolio';

export const PERSONAL_DETAILS: ContactDetails = {
  fullName: "NAVEEN KUMAR S",
  preferredName: "Naveen Kumar",
  role: "CYBER SECURITY ANALYST",
  subRole: "B.Sc. Information Technology Student",
  objective: "Motivated and detail-oriented B.Sc. Information Technology student seeking an opportunity to apply my technical skills, problem-solving abilities, and passion for cybersecurity in a challenging IT environment while continuously learning emerging technologies and contributing to organizational success.",
  phone: "+91 6374363722",
  email: "snaveenkumar070@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/cybrixcrop",
  linkedinDisplay: "linkedin.com/in/cybrixcrop",
  github: "https://github.com/CybrixCbe",
  githubDisplay: "github.com/CybrixCbe",
  socStatus: "Available for Opportunities",
  threatLevel: "Low",
  systemVersion: "v2.5"
};

export const HIGHLIGHT_METRICS = [
  {
    id: 'edu',
    label: 'EDUCATION',
    value: 'B.Sc. IT',
    detail: 'KPR College of Arts Science & Research',
    highlight: 'CGPA: 8.3'
  },
  {
    id: 'focus',
    label: 'PRIMARY FOCUS',
    value: 'Cybersecurity',
    detail: 'Security Analysis & Reconnaissance',
    highlight: 'Core Interest'
  },
  {
    id: 'skills',
    label: 'CORE SKILLS',
    value: 'Python, Java',
    detail: 'Linux Environment & Shell',
    highlight: 'Practical Stack'
  },
  {
    id: 'tools',
    label: 'TOOLS & COLLABORATION',
    value: 'Git & GitHub',
    detail: 'Version Control & Open Source',
    highlight: 'Workflows'
  }
];

export const SKILLS_DATA = [
  {
    category: "Languages & Web Development",
    skills: [
      { name: "Python", icon: "Code", tag: "Scripting, Recon & Backend" },
      { name: "Java", icon: "Cpu", tag: "Object-Oriented Programming" },
      { name: "HTML, CSS & JavaScript", icon: "Globe", tag: "Responsive Frontends" }
    ]
  },
  {
    category: "Security & Analysis Tools",
    skills: [
      { name: "Cybersecurity Fundamentals", icon: "Shield", tag: "Core Concepts & Practices" },
      { name: "Linux", icon: "Terminal", tag: "System Administration & Kali" },
      { name: "Nmap", icon: "Radio", tag: "Port Auditing & Discovery" },
      { name: "Wireshark", icon: "Activity", tag: "Network Packet Analysis" },
      { name: "Burp Suite", icon: "Bug", tag: "Web Application Testing" }
    ]
  },
  {
    category: "Systems & Professional Skills",
    skills: [
      { name: "Git & GitHub", icon: "GitBranch", tag: "Version Control & Repositories" },
      { name: "Problem Solving", icon: "Lightbulb", tag: "Analytical & Logic Reasoning" },
      { name: "Communication", icon: "MessageSquare", tag: "Collaborative Teamwork" }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "reconx",
    projectNumber: "01",
    title: "ReConX",
    subtitle: "Cybersecurity Web Scanner",
    category: "Cybersecurity Web Application",
    description: "Developed a cybersecurity web application that performs network and website reconnaissance using Nmap, WHOIS, and DNS Lookup. The application analyzes scan results, identifies potential security risks, generates downloadable reports, and provides an interactive dashboard with user authentication and scan history.",
    technologies: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
      "Nmap",
      "WHOIS",
      "DNS Lookup"
    ],
    keyHighlights: [
      "Integrated Nmap for target host discovery and active port analysis",
      "Automated WHOIS and DNS record queries for domain intelligence",
      "Structured risk classification highlighting potential security exposures",
      "User authentication with encrypted session management and scan archives",
      "Comprehensive downloadable summary reports for security auditing"
    ],
    githubUrl: "https://github.com/CybrixCbe",
    status: "Production Ready"
  },
  {
    id: "morsevision",
    projectNumber: "02",
    title: "MorseVision",
    subtitle: "Morse Code Encoder & Decoder",
    category: "Web Application & Communication Tool",
    description: "Built a web-based application that converts plain text into Morse code and decodes Morse code back into text in real time. The project features a responsive user interface, instant conversion, and an intuitive design for learning and communication purposes.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    keyHighlights: [
      "Real-time bi-directional translation between text and Morse code symbols",
      "Zero-latency client-side regex processing and parsing",
      "Built-in audio tone synthesizer simulating acoustic telegraph transmissions",
      "Responsive and intuitive interface designed for clear learning"
    ],
    githubUrl: "https://github.com/CybrixCbe",
    status: "Active Tool"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "degree",
    institution: "KPR College of Arts Science and Research",
    period: "2024 – Present",
    degree: "B.Sc. Information Technology",
    score: "8.3",
    scoreLabel: "CGPA",
    status: "Currently Enrolled",
    highlights: [
      "Specialization in Information Technology, Operating Systems, and Computing Architecture",
      "In-depth coursework in Cybersecurity, Object-Oriented Programming, and Databases",
      "Active participant in technical symposiums, hackathons, and software development"
    ]
  },
  {
    id: "hsc",
    institution: "Literacy Mission Matric Hr. Sec. School",
    period: "2023 – 2024",
    degree: "Higher Secondary Certificate (HSC)",
    score: "77%",
    scoreLabel: "Percentage",
    highlights: [
      "Higher Secondary Education with focus on Computer Science and Mathematics",
      "Graduated with 77% academic standing"
    ]
  },
  {
    id: "sslc",
    institution: "Literacy Mission Matric Hr. Sec. School",
    period: "2021 – 2022",
    degree: "Secondary School Leaving Certificate (SSLC)",
    score: "71%",
    scoreLabel: "Percentage",
    highlights: [
      "Foundational sciences, mathematics, and analytical problem-solving",
      "Graduated with 71% aggregate"
    ]
  }
];

export const INTERNSHIP_DATA: InternshipItem = {
  role: "Cyber Security Intern",
  company: "Hackup Technology Pvt. Ltd.",
  type: "Technical Internship",
  responsibilities: [
    "Completed a Cyber Security Internship at Hackup Technology Pvt. Ltd., gaining hands-on practical experience in modern cybersecurity tools, methodologies, and security testing workflows.",
    "Worked with Kali Linux, Nmap, Wireshark, and Burp Suite to perform deep network analysis, traffic inspection, and basic security vulnerability testing."
  ],
  tools: [
    {
      name: "Kali Linux",
      description: "Specialized security distribution utilized for network auditing, terminal scripting, and security workflows.",
      icon: "Terminal"
    },
    {
      name: "Nmap",
      description: "Network exploration tool used for discovering live hosts, scanning ports, and identifying running services.",
      icon: "Radio"
    },
    {
      name: "Wireshark",
      description: "Network packet analyzer used for inspecting protocol handshakes, live packet captures, and traffic patterns.",
      icon: "Activity"
    },
    {
      name: "Burp Suite",
      description: "Web vulnerability proxy used to intercept HTTP requests and conduct baseline security testing on web endpoints.",
      icon: "Bug"
    }
  ]
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-cyber",
    title: "Cyber Security Internship Certificate",
    category: "Cybersecurity",
    issuer: "Hackup Technology Pvt. Ltd.",
    description: "Verified certificate awarded upon completing practical internship in cybersecurity tools, network analysis, and vulnerability assessment."
  },
  {
    id: "cert-hackathon",
    title: "24-Hour Hackathon Certificate",
    category: "Hackathon",
    issuer: "Hackathon Committee",
    description: "Certification for participating in an intensive 24-hour collaborative hackathon building innovative software solutions."
  },
  {
    id: "cert-reels",
    title: "1st Prize – Reels Making Competition (Team Event)",
    category: "Competition",
    issuer: "Inter-Collegiate Creative Event",
    description: "First-place team achievement recognizing creative media presentation, communication, and digital storytelling impact."
  }
];
