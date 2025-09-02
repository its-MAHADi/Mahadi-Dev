import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const Skills = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const skills = {
    Frontend: [
      {
        name: "HTML5",
        bg: "bg-[#f16529]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS3",
        bg: "bg-[#1572b6]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "Tailwind CSS",
        bg: "bg-[#33a9dc]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "JavaScript",
        bg: "bg-[#f0db4f]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        bg: "bg-[#61dafb]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      },
      {
        name: "React Router",
        bg: "bg-white/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original-wordmark.svg",
      },
    ],
    Backend: [
      {
        name: "Firebase",
        bg: "bg-[#ffa000]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
      },
      {
        name: "Node.js",
        bg: "bg-[#4b9742]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Express",
        bg: "bg-white/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        bg: "bg-[#46a037]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "JWT",
        bg: "bg-white/20",
        img: "https://i.postimg.cc/vZM1ppmy/jwt-logo.png",
      },
    ],
    Tools: [
      {
        name: "GitHub",
        bg: "bg-white/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      },
      {
        name: "Git",
        bg: "bg-[#f1502f]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "NPM",
        bg: "bg-[#cb3837]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Yarn",
        bg: "bg-[#2c8ebb]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
      },
      {
        name: "Postman",
        bg: "bg-[#ff6c37]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Netlify",
        bg: "bg-[#00c7b7]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Vercel",
        bg: "bg-white/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Figma",
        bg: "bg-[#a259ff]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "VSCode",
        bg: "bg-[#0078d7]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  };

  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h1 id="skills" className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-1">
          Skills
        </h1>
      </div>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center border border-blue-300 rounded-full p-2 w-full md:w-[60%] mx-auto mb-6 px-4">
          {categories.map((cat, i) => (
            <Tab
              key={cat}
              className={`md:px-6 px-4 py-2 mx-1 text-sm font-semibold rounded-full cursor-pointer transition duration-300 outline-none ${
                tabIndex === i
                  ? "bg-blue-600 text-white shadow-md"
                  : " dark:text-white border border-indigo-600 hover:bg-blue-600 hover:text-white "
              }`}
            >
              {cat}
            </Tab>
          ))}
        </TabList>

        {categories.map((cat) => (
          <TabPanel key={cat}>
            <Fade cascade damping={0.1} triggerOnce>
              <div className="flex flex-wrap justify-center gap-6">
                {skills[cat].map((skill) => (
                  <Tilt
                    key={skill.name}
                    scale={1.2}
                    transitionSpeed={2500}
                    className="rounded-3xl shadow-lg hover:z-10 p-4"
                  >
                    <div className={`rounded-3xl p-4 ${skill.bg}`}>
                      <img
                        className="rounded-xl w-20 h-20 object-contain"
                        src={skill.img}
                        alt={skill.name}
                      />
                      <p className="text-center mt-2 font-semibold">
                        {skill.name}
                      </p>
                    </div>
                  </Tilt>
                ))}
              </div>
            </Fade>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Skills;
