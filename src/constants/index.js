const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Education",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Always Learning",
    desc: "Dedicated to continuous learning and growth, with a strong focus on building real-world, impactful projects.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Collaborative Mindset",
    desc: "Open to feedback, eager to collaborate, and always ready to learn from peers and mentors.",
  },
  {
    imgPath: "/images/time.png",
    title: "Consistent Commitment",
    desc: "Managing time effectively to meet deadlines and stay focused on project goals throughout the journey.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/javalogo.glb",
    scale: 0.01,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Full Stack Developer",
    modelPath: "/models/mernlogo.glb",
    scale: 0.01,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Currently pursuing my Bachelor's degree at Sagar Institute of Research and Technology, focusing on building strong technical skills, creativity, and practical problem-solving.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.jpg",
    title: "Bachelor's Degree",
    date: "2022-2026",
    responsibilities: [
      "Sagar Institude of Research and Technology, Bhopal",
      "B.TECH-Computer Science and Engineering ",
      "RGPV University",
      "CGPA:7.67 as per 5th Sem",
    ],
  },
  {
    review:
      "Studied at Maharishi Vidya Mandir School, Bhopal, where I built a strong academic foundation and developed a keen interest in technology and creative thinking.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Higher Secondary Eduction",
    date: "2021-2022",
    responsibilities: [
      "Maharishi Vidya Mandir School, Bhopal",
      "MP BOARD",
      "Higher Secondary Education (class 12th).",
      "Score- 72.2%",
    ],
  },
  {
    review:
      "Studied at Maharishi Vidya Mandir School, Bhopal, where I built a strong academic foundation and developed a keen interest in technology and creative thinking.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Senior Secondary Education",
    date: "2019 - 2020",
    responsibilities: [
      "Maharishi Vidya Mandir School, Bhopal",
      "MP BOARD",
      "Senior Secondary Education (Class 10th).",
      "Score- 71.0%",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/github.png",
    URL: "https://github.com/Vasusethiya2003", // replace with your actual Facebook URL
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    URL: "https://www.linkedin.com/in/vasu-sethiya2003/", // replace with your actual LinkedIn URL
  },
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    URL: "https://www.instagram.com/iamvasu.sethiya", // replace with your actual Instagram URL
  },
  {
    name: "Twitter",
    imgPath: "/images/x.png",
    URL: "https://x.com/guptabasu111?t=5Iy0CH6cHDvxQO8-fd4PvA&s=09", // replace with your actual X (Twitter) URL
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
