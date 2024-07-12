// Contains constant data for using in website

import {
  mobile,
  backend,
  creator,
  web, typescript, reactjs,
  redux,
  tailwind,
  git, docker, linkedin,
  github,
  rakuten, mysql,
  hibernate,
  webflux,
  spring,
  javareactive, netlink,
  playtube,
  hpe,
  reacttextflow,
  mongo,
  java,
  javascript,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },{
    id: "resume",
    title: "Resume",
    link: "https://docs.google.com/document/d/1koMrfhxCIvSTeTUzuv2giGjSe9trfiZ-j2LAsbtGQKk/edit?usp=sharing",
  }
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: creator,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Micro-Services",
    icon: backend,
  },


] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },{
    name: "Spring Webflux",
    icon: webflux,
  },{
    name: "Mongodb",
    icon: mongo,
  },
  // {
  //   name: "Hibernate",
  //   icon: hibernate,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL DB",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "hibernate",
    icon: hibernate,
  },
  {
    name: "docker",
    icon: docker,
  }
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Senior Software Engineer",
    company_name: "Rakuten Symphony",
    icon: rakuten,
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "Project: RCP, Battle-tested Open RAN and Cloud Native Solution for Operator Deployments.",
"Created and delivered a product from scratch, meeting all OSS solution requirements by applying TMF standards 638 and 639, and achieved API certification from TMF forums.",
"Successfully migrated the inventory data from MySQL to graphDB during on-site work in Japan, ensuring that the transition was smooth and seamless.",
"Successfully executed POCs for migrating Rakuten's Inventory Manager module to a graph database-based microservice, resulting in a highly scalable and efficient system.",
"Reduced device onboarding time in the Inventory Module from 15 days to 1 day by switching from a manual process to the inventory service, achieving a 93% efficiency gain, boosting productivity, reducing costs, and enhancing business performance.",
"Implemented an Enum Combination configuration for Inventory that has resulted in 100% prevention of junk and incorrect data ingestion, thereby increasing data accuracy and quality. As a result, the inventory data is more reliable and trustworthy than ever before.",
"Developed a high-performance microservice using Kafka to handle 10,000 data inserts/updates, reducing the load on the Inventory system and enhancing efficiency and scalability."
    ],
  },
  {
    title: "Technical Intern",
    company_name: "Netlink Software",
    icon: netlink,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Jan 2020",
    points: [
      "Project: Lumenore (a web-based BI platform that enables the user to create actionable insights with a simple and no-code approach)",
"Developed efficient backend APIs using Python, Flask, Java, and SpringBoot for high-performance and reliable systems.",
"Collaborated with Core Development Team to enhance system reliability with efficient solutions, resulting in improved performance."
    ],
  },
  {
    title: "Technical Intern",
    company_name: "HP Enterprise",
    icon: hpe,
    iconBg: "#383E56",
    date: "Jan 2019 - May 2019",
    points: [
      "JanusGraphDB POC testing successful; insights gained for system optimisation.",
"Collaborated with the Core Development Team closely."
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "playTube",
    description:
      "Welcome to PlayTube, a video streaming platform built using React, Tailwind CSS and YouTube's public API. With PlayTube, you can watch your favorite videos in a user-friendly interface, without any distractions. PlayTube offers seamless video playback. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: playtube,
    source_code_link: "https://github.com/asinghrajput542/playTube-ui",
    live_site_link: "play-tube-ui.vercel.app",
  },{
    name: "React-TextFlow",
    description:
      "React TextFlow a Google-docs-clone , here you can create your own docs and can see other's docs. Can collaborate remotely in a doc, changes will be applied in real-time using web-socket.",
          tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-component",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reacttextflow,
    source_code_link: "https://github.com/asinghrajput542/react-textflow",
    live_site_link: "play-tube-ui.vercel.app",
  },{
    name: "Java Backend (Reactive)",
    description:
      "A Java backend service using Spring Boot WebFlux that follows reactive programming, which is a programming paradigm focused on developing asynchronous and non-blocking applications in an event-driven manner.",
          tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring webFlux",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: javareactive,
    source_code_link: "https://github.com/asinghrajput542/ReactiveProject",
    live_site_link: "https://github.com/asinghrajput542/ReactiveProject",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ayush-singh-5b3651176/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/asinghrajput542",
  },
] as const;
