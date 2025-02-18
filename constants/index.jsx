import project1 from "../src/assets/FitMeAppProject.jpg";
import project2 from "../src/assets/SafePass.webp";
import project3 from "../src/assets/ProtfolioWebsite.webp";
import project4 from "../src/assets/PermmisionLibrary.jpg";
import project5 from "../src/assets/GrandmasSecrets.jpg";
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
  { label: "Military Service", href: "#mikitary" },
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
    description: "SafePass is a self Password Manager Android Application.",
    techStack: [
      "Java",
      "Android Studio",
      "MVVM",
      "Navigation",
      "HTML popup viewer",
    ],
    imgSrc: project2,
    link: "https://github.com/shacharml/SafePass.git",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["java Script", "Tailwind CSS", "HTML"],
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
    description: "Android Share Recipes Application.",
    techStack: [
      "Java",
      "Android Studio",
      "Realtime Firebase",
      "Firebase Cloud Storage",
      "Authentication",
      "Glide",
      "Lottie",
    ],
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
    role: "Wedding planner and producer",
    company: "Ofek Pravda",
    description:
      "Working with providers, dealing with purchases and money,managing the event, facing unexpected situations and meeting the couple’s needs and requests.",
    techStack: [],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "B.Sc. Software Engineering",
    institution: "Afeka Collage - Tel Aviv",
    duration: "2019 - 2023",
    description: "GPA: 89 ,Majored in Mobile applications development",
  },
];

export const MILITARY_SERVICE = [
  {
    yearRange: "2023 - 2024",
    role: "Active reserve duty – Iron Swords war",
    description:
      "Head of lifeblood system for combat soldiers in Gaza, 98 division.Responsible for combat supplies, validity of the supplies, orders and more. In parallel, evacuation of wounded and fallen soldiers in Gaza. ",
  },
  {
    yearRange: "2014 - 2017",
    role: "Combat soldier in karakal",
    description:
      " I volunteered for combat service to contribute in a meaningful way with the goal of combining giving with receiving. The position required me to meet targets and make decisions under pressure. This experience developed my leadership, teamwork and problemsolving skills, which translated well into my professional life",
  },
];
