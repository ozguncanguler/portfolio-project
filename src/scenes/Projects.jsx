import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Project = ({ title, text }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const { t } = useTranslation("translation");

  return (
    <>
      <div>
        <div hidden>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{title}</p>
        </div>
        <img
          className="h-auto max-w-full rounded-lg"
          src={`../assets/${projectTitle}.jpg`}
          alt={projectTitle}
        />
      </div>
    </>
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
      <div className="flex flex-row">
        <p className="text-8xl font-neonderthaw text-neon-blue">
          {t("projects.projects")}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
        <div
          className="flex justify-center text-center items-center p-10 bg-grey
              text-4xl font-playfair font-semibold text-orange"
        >
          {t("projects.header1")} <br /> {t("projects.header2")} <br />{" "}
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
      </div>
    </section>
  );
};

export default Projects;
