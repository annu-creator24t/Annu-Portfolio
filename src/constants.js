// Skills Section Logo's
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.jpeg';
import vscodeLogo from './assets/tech_logo/vscode.png';
import jupyterLogo from './assets/tech_logo/jupyter.jpeg';
import colabLogo from './assets/tech_logo/collab.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import pandasLogo from './assets/tech_logo/pandas.jpeg';
import matplotlibLogo from './assets/tech_logo/matplotlib.png';
import overleafLogo from './assets/tech_logo/overleaf.jpeg'
import tailwindCssLogo from './assets/tech_logo/tailwindcss.png';
import datapreprocessingLogo from './assets/tech_logo/datapreprocessing.png';
import featureengineeringLogo from './assets/tech_logo/featureengineering.png';
import supervisedlearningLogo from './assets/tech_logo/supervisedlearning.jpg';

// Experience Section Logo's
import infosysLogo from './assets/company_logo/infosys_logo.jpeg';
import svaarogyamLogo from './assets/company_logo/svaarogyam_logo.jpeg';
import  edunetLogo from './assets/company_logo/edunet_logo.jpeg';

// Education Section Logo's
import iilmLogo from './assets/education_logo/iilm_logo.png';
import dpcsLogo from './assets/education_logo/dpcs_logo.jpeg';

// Project Section Logo's
import fooddonation from './assets/work_logo/Ahar.png';
import chittavani from './assets/work_logo/ChittaVani.png';
import zerodha from './assets/work_logo/Zerodha Clone.png';
import portfolio from './assets/work_logo/Portfolio.png';;


// ------------------- Skills -------------------

export const SkillsInfo = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React', logo: reactjsLogo },
      {name:'TailwindCss', logo:tailwindCssLogo},  
    ],
  },
  {
    title: 'Version Control & Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Jupyter Notebook', logo: jupyterLogo },
      { name: 'Google Colab', logo: colabLogo },
     { name: "Overleaf", logo: overleafLogo }
    ],
  },
  {
    title: 'Machine Learning & Data Analytics',
    skills: [
      { name: 'Data processing', logo: datapreprocessingLogo },
      { name: 'Feature Engineering', logo: featureengineeringLogo },
      { name: 'Supervised Learning', logo: supervisedlearningLogo },
    ],
  },
  {
    title: 'Data Analysis & Visualization',
    skills: [
      { name: 'NumPy', logo: numpyLogo },
      { name: 'pandas', logo: pandasLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
    ]
  },
];

// ------------------- Experience -------------------

export const experiences = [
  {
    id: 0,
    img: infosysLogo,
    role: "Infosys Springboard Cohort Participant",
    company: "Infosys Springboard",
    link: "https://www.linkedin.com/company/infosys-springboard/posts/?feedView=all", // 🔗 clickable link
    date: "Aug 2025 - Oct 2025",
    desc: "Selected for Infosys Springboard Pragati Cohort 6 under the AI track, where I gained hands-on experience with core and advanced AI concepts. Worked on real-world projects exploring Machine Learning, NLP, and Deep Learning. Built strong skills in Python and AI model development. Developed a deeper understanding of ethical and responsible AI practices.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Deep Learning",
      "NLP",
    ],
  },
  {
    id: 1,
    img: svaarogyamLogo,
    role: "Data Science & ML Intern",
    company: "Svaarogyam Medical Devices Pvt. Ltd.",
    link: "https://www.google.com/search?q=svaarogyam-medical-pvt-ltd&sca_esv=3f626f5782a50780&source=hp&ei=i_wRaY_pEbmG4-EPu8-CoAg&iflsig=AOw8s4IAAAAAaRIKm46SYmK81JczX_6ksdG3QQwgTYva&ved=0ahUKEwjP2pGe6-eQAxU5wzgGHbunAIQQ4dUDCBo&uact=5&oq=svaarogyam-medical-pvt-ltd&gs_lp=Egdnd3Mtd2l6IhpzdmFhcm9neWFtLW1lZGljYWwtcHZ0LWx0ZDIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPATIKEC4YAxjqAhiPATIKEAAYAxjqAhiPATIKEC4YAxjqAhiPATIKEAAYAxjqAhiPATIKEAAYAxjqAhiPAUj4C1DpBVjpBXABeACQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgGgAhCoAgqYAxDxBQy-TE9gBmYjkgcBMaAHALIHALgHAMIHAzMtMcgHCw&sclient=gws-wiz",
    date: "May 2025 - Jul 2025",
    desc: "Worked on machine learning projects in the healthcare domain, focusing on data cleaning, feature extraction, and predictive modeling. Built and optimized end-to-end ML pipelines to make workflows more efficient and reliable. Collaborated remotely with a supportive team, gaining hands-on experience in applying ML to real-world medical data and devices.",
    skills: [
      "Machine Learning",
      "Python",
      "Data Cleaning",
      "Feature Extraction",
      "Healthcare AI",
    ],
  },
  {
    id: 2,
    img: edunetLogo,
    role: "AI & Machine Learning Intern",
    company: "Edunet Foundation (Microsoft & AICTE Initiative)",
    link: "https://www.linkedin.com/company/edunetfoundation/posts/?feedView=all",
    date: "Apr 2025 - May 2025",
    desc: "Applied core concepts of AI and Machine Learning to real-world projects under the Microsoft and AICTE initiative, gaining hands-on experience in Python programming, data preprocessing, and building predictive models. Strengthened understanding of end-to-end AI solution design—from data handling to model evaluation—through structured learning and expert mentorship.",
    skills: [
      "Python",
      "AI/ML Model Building",
      "Data Preprocessing",
      "Model Evaluation",
      "Microsoft AI Tools",
    ],
  },
];
// ------------------- Education -------------------

export const education = [
  {
    id: 0,
    img: iilmLogo,
    school: "IILM University, Greater Noida",
    date: "2023 - 2027",
    location: "Greater Noida, Uttar Pradesh, India",
    desc: "Pursuing B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning (AIML). Focused on developing technical expertise in AI, ML, and software development while exploring research opportunities in applied machine learning and data-driven systems.",
    degree: "B.Tech in Computer Science (AIML)",
  },
  {
    id: 1,
    img: dpcsLogo,
    school: "Delhi Public Convent School",
    date: "2021-2023",
    location: "Ballia, Uttar Pradesh, India",
    desc: "Completed Class 12 under the CBSE Board with a focus on Physics, Chemistry, Mathematics, Hindi, and English. Built a strong foundation in analytical thinking and problem-solving.",
    degree: "Class 12 (CBSE)",
  },
];

// ------------------- Projects (unchanged) -------------------

export const projects = [
  {
    id: 0,
    title: "ChittaVani",
    description:
      "ChittaVani bridges human brain signals with digital communication using AI, Machine Learning, and neuroscience. It empowers individuals with speech or mobility impairments to express their thoughts effortlessly, promoting inclusive and accessible communication.",
    image: chittavani,
    tags: [
      "React Vite",
      "HTML",
      "Tailwind CSS",
      "Machine Learning",
      "Node.js",
      "Express",
      "MongoDB",
      "Neuroscience",
    ],
  },

  {
    id: 1,
    title: "AHAR",
    description:
      "AHAR is a platform that connects restaurants, events, and NGOs to redistribute surplus food efficiently. Built with the MERN stack and SQL integration, it supports real-time tracking, route mapping, and transparent food donation management.",
    image: fooddonation,
    tags: ["HTML", "React", "CSS", "Express", "Node.js", "SQL"],
  },

  {
    id: 2,
    title: "Zerodha Clone",
    description:
      "A clean, high-performance clone of Zerodha’s official website developed with React and Tailwind CSS.",
    image: zerodha,
    tags: ["React", "Tailwind CSS", "HTML", "CSS", "MongoDB", "Express"],
    github: "https://github.com/annu-creator24t/Zerodha-Clone",
   
  },

  {
    id: 3,
    title: "Annu's Portfolio",
    description:
      "Annu’s Portfolio is a modern, responsive personal website showcasing projects, skills, and achievements. Built using React and Tailwind CSS with smooth animations and elegant UI.",
    image: portfolio,
    tags: ["HTML", "React", "Tailwind CSS", "CSS"],
    github: "https://github.com/annu-creator24t/Annu-Portfolio",
    webapp: "https://annu-portfolio-pi.vercel.app/",
  },
];
