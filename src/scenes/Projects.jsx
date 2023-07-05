import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const { t } = useTranslation("translation");

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{text}</p>
      </div>
      <img
        className="h-auto max-w-full rounded-lg"
        src={`../assets/${projectTitle}.jpg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { t } = useTranslation("translation");

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-start h-auto mt-10 py-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          visible: {
            opacity: [
              0.1, 0.1, 0.2, 0.1, 0.3, 0.1, 0.2, 0.1, 0.3, 0.2, 0.2, 0.3, 0.2,
              0.1, 1, 1, 1, 1, 1, 0.2, 1, 1, 0, 1, 0.2, 1, 0, 1,
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
          {t("projects.projects")}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="flex justify-center text-center items-center p-10 bg-grey aspect-square
              text-xl sm:text-6xl md:text-2xl font-playfair font-semibold text-orange"
        >
          {t("projects.header1")} <br /> {t("projects.header2")} <br />
          {t("projects.header3")}
        </div>
        <Project
          title={"Arguest"}
          text={"Arguest Guest Management and Android Hotel TV App"}
        />
        <Project title={"Arsigna"} text={"Arsigna Maintanance"} />
        <Project
          title={"TV Projects"}
          text={
            "I have been in inhouse and outsource TV projects from 2019 to 2022"
          }
        />
        <Project
          title={"Graduate Thesis"}
          text={"Hemolysis and Coagulation Mock Circuit"}
        />
        <Project
          title={"Who Got Shot"}
          text={"Metalcore band from Istanbul/Turkey"}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
