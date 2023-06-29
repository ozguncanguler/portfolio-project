import LineGradient from "../components/LineGradient";
import NeonBar from "../components/NeonBar";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-start h-full mt-10 py-10"
    >
      <div className="flex flex-row">
        <p className="text-8xl font-neonderthaw text-neon-blue">Skills</p>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-4/12 m-5 pt-5 ">
          <NeonBar value={7} title={"React JS"} />
          <NeonBar value={8} title={"HTML, CSS, JS, TypeScript"} />
          <NeonBar value={7} title={"Bootstrap, SASS, MUI, Tailwind"} />
          <NeonBar value={6} title={"Bash Script, Git, SVN"} />
          <NeonBar value={2} title={"Node JS"} />
          <NeonBar value={3} title={"C, C++"} />
        </div>
        {/*<div className="w-full md:w-6/12 m-5 p-5 ">
          <img
            className="aspect-[3/4] m-5 p-5 max-h-4/12 border-4 border-orange shadow-orange shadow-[0_0_50px_10px] transition duration-500 md:blur-[0.4px] md:brightness-[0.8] md:contrast-[0.8] md:grayscale-[75%] md:hover:blur-[0px] md:hover:brightness-[1.2] md:hover:contrast-[1.2] md:hover:grayscale-[0%] md:hover:saturate-[1.2]"
            src="../assets/Photo2.jpeg"
            alt="Photo2"
          />
        </div> */}
        <div className=" w-full md:w-8/12 m-5 p-10 pl-0 md:pl-7 pr-20">
          <a
            href="/"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
              src="../assets/Photo2.jpeg"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                My Skills Explained
              </h5>
              <p class="mb-3 text-md font-playfair text-gray-700 dark:text-gray-400">
                In high school, I developed an interest in charcoal drawings,
                and during my university education, I took courses in
                functional, object-oriented, and microcontroller programming. In
                my professional career, I focused on web applications and
                embedded Linux projects, honing my skills in these areas. I have
                learned technologies such as C, C++, JS, TS, React-JS, HTML,
                CSS, Bootstrap, SASS, Tailwind, and MUI.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
