import LineGradient from "../components/LineGradient";
import NeonBar from "../components/NeonBar";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { t } = useTranslation("translation");

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-start h-full mt-10 py-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          visible: {
            opacity: [
              1, 1, 0.2, 1, 0.5, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0.2, 1, 0,
              0.2, 1, 1, 0, 1, 0.2, 1, 0, 1,
            ],
          },
        }}
        transition={{
          duration: 1.5,
          ease: "anticipate",
        }}
        className="flex flex-row mt-16"
      >
        <p className="text-6xl md:text-8xl font-neonderthaw text-neon-blue">
          {t("skills.skills")}
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full md:w-4/12 my-5 pt-5 "
        >
          <NeonBar value={7} title={"React JS"} />
          <NeonBar value={8} title={"HTML, CSS, JS, TypeScript"} />
          <NeonBar value={7} title={"Bootstrap, SASS, MUI, Tailwind"} />
          <NeonBar value={6} title={"Bash Script, Git, SVN"} />
          <NeonBar value={2} title={"Node JS"} />
          <NeonBar value={3} title={"C, C++"} />
        </motion.div>

        {/*<div className="w-full md:w-6/12 m-5 p-5 ">
          <img
            className="aspect-[3/4] m-5 p-5 max-h-4/12 border-4 border-orange shadow-orange shadow-[0_0_50px_10px] transition duration-500 md:blur-[0.4px] md:brightness-[0.8] md:contrast-[0.8] md:grayscale-[75%] md:hover:blur-[0px] md:hover:brightness-[1.2] md:hover:contrast-[1.2] md:hover:grayscale-[0%] md:hover:saturate-[1.2]"
            src="../assets/Photo2.jpeg"
            alt="Photo2"
          />
        </div> */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full md:w-8/12 my-5 py-10 pl-0 md:pl-7"
        >
          <a
            href="/"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-60 md:rounded-none md:rounded-l-lg
              transition duration-500 blur-[0.4px] brightness-[0.8] contrast-[0.8] grayscale-[75%] hover:blur-[0px] hover:brightness-[1.2] hover:contrast-[1.2] hover:grayscale-[0%] hover:saturate-[1.2]"
              src="../assets/Photo2.jpeg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t("skills.title")}
              </h5>
              <p className="mb-3 text-md font-playfair text-gray-700 dark:text-gray-400">
                {t("skills.paragraph")}
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
