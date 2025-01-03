
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import experienceCertificate from "../assets/projects/Certificate.jpeg";

export const HERO_CONTENT = `A creative web developer with a flair for crafting sleek, responsive designs that stand out!`;

export const ABOUT_TEXT = `My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. With 5 years of professional experience, I have worked with a variety of technologies. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2023 - Sept. 2023",
    role: "Frontend Web Developer Intern",
    company: "Pep Softwares Pvt.",
    description: `Played a key role in enhancing the user experience of a multi-faceted web application, with a specific focus on the religious prayers section. Ensured seamless access to religious content, fostering a spiritually enriching experience for users.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: experienceCertificate,
  },
];

export const PROJECTS = [
  {
    title: "Weather Web App",
    image: project1,
    description:
      "A user-friendly search functionality, allowing you to quickly check the weather in various cities across the globe.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:"https://heetgudhka2003.github.io/Weather-App/", 
  },
  {
    title: "Dad Joke Generator App",
    image: project2,
    description:
      "An application that provides some light-hearted entertainment by generating a random dad joke every time the button is clicked.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://heetgudhka2003.github.io/Joke-Generator/",
  },
  {
    title: "Background Color Generator",
    image: project3,
    description:
      "An application that generates a completely new color with just two clicks, which can be easily copied to the clipboard.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink:"https://heetgudhka2003.github.io/Background-Color-Generator/",
  },
];

export const CONTACT = {
  address: "Thane, Maharashtra",
  email: "heetgudhka24@gmail.com",
};
