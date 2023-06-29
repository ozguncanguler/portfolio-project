import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Project = ({ title, text }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

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

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-start h-auto mt-10 py-10"
    >
      <div className="flex flex-row">
        <p className="text-8xl font-neonderthaw text-neon-blue">Projects</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
        <div
          className="flex justify-center text-center items-center p-10 bg-grey
              text-3xl font-playfair font-semibold text-blue"
        >
          ALL PROJECTS <br /> THAT <br /> I AM INVOLVED IN
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
