import project1 from "../src/assets/FitMeAppProject.jpg"
import project2 from "../src/assets/SafePass.webp"
import project3 from "../src/assets/ProtfolioWebsite.webp"
import project4 from "../src/assets/PermmisionLibrary.jpg"
import project5 from "../src/assets/GrandmasSecrets.jpg"
import personImage from "../src/assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiJavaLine,
  RiAndroidLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Shachar Males",
  role: "Software Developer",
  subheading:
    " I am a software engineer with strong teamwork skills, the ability to handle multiple tasks, and a mastery of various tools and technologies. I am seeking a Software Engineer position to apply my skils and knowledge in a real-world setting. I am a quick learner and have strong interpersonal skills. I am excited to bring my enthusiasm and dedication to the role.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "FitMeApp",
    description:
      "Workout App is an iOS application built with SwiftUI in Xcode. The app includes daily workouts and provides a full-body workout plan for each day of the week. The application leverages Firebase Realtime Database for data storage and Firebase Authentication for user authentication using email and password.",
    techStack: ["SwiftUI", "Firebase", "Xcode", "Authentication"],
    imgSrc: project1,
    link: "https://github.com/shacharml/FitMeApp.git",
  },
  {
    id: 2,
    title: "SafePass",
    description:
      "SafePass is a self Password Manager Android Application.",
    techStack: ["Java", "Android Studio", "MVVM", "Navigation","HTML popup viewer" ],
    imgSrc: project2,
    link: "https://github.com/shacharml/SafePass.git",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["java Script", "Tailwind CSS","HTML"],
    imgSrc: project3,
    link: "https://github.com/shacharml/portfolio-website.git",
  },
  {
    id: 4,
    title: "Permission Library",
    description:
      "This is a simple permission library for Android that allows you to easily request runtime permissions.",
    techStack: ["Java", "JitPack", "Android Studio"],
    imgSrc: project4,
    link: "https://github.com/shacharml/Permission_Library.git",
  },
  {
    id: 5,
    title: "Grandmas Secrets",
    description:
      "Android Share Recipes Application.",
    techStack: ["Java", "Android Studio","Realtime Firebase", "Firebase Cloud Storage", "Authentication" ,"Glide", "Lottie"],
    imgSrc: project5,
    link: "https://github.com/shacharml/Grandmas_Secrets.git",
  },
];

export const SKILLS = [
  {
    name: "JAVA",
    icon: <RiJavaLine className="text-orange-600" />,
  },
  {
    name: "Android",
    icon: <RiAndroidLine className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "Firebase",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.",
    techStack: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    techStack: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    yearRange: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description:
      "Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
    techStack: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    yearRange: "2020 - 2021",
    role: "Software Engineer",
    company: "PayPal",
    description:
      "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
    techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    duration: "2012 - 2016",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Master of Science in Software Engineering",
    institution: "MIT",
    duration: "2016 - 2018",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
