/* eslint-disable jsx-a11y/anchor-is-valid */
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { t } = useTranslation("translation");

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-start max-h-full mt-10 py-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
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
          {t("about.about")}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col w-full justify-center items-center md:flex-row md:justify-center md:items-center mt-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: {
              boxShadow: "none",
              borderColor: "transparent",
              borderRadius: "4px",
              borderTopLeftRadius: isAboveMediumScreens ? "160px" : "400px",
              borderTopRightRadius: isAboveMediumScreens ? "4px" : "400px",
            },
            visible: {
              boxShadow: "0 0 50px rgba(237, 82, 186, 0.7)",
              borderColor: "#FF5300",
              borderRadius: "4px",
              borderTopLeftRadius: isAboveMediumScreens ? "160px" : "400px",
              borderTopRightRadius: isAboveMediumScreens ? "4px" : "400px",
            },
          }}
          transition={{ duration: 1, delay: 1.5, ease: "anticipate" }}
        >
          <a className="flex flex-col items-center bg-white border border-gray-200 rounded-t-[400px] rounded-b-lg md:rounded-lg md:rounded-tl-[160px] shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-full md:h-auto md:w-80 rounded-t-[400px] 
              transition duration-500 blur-[0.4px] brightness-[0.8] contrast-[0.8] grayscale-[75%] hover:blur-[0px] hover:brightness-[1.2] hover:contrast-[1.2] hover:grayscale-[0%] hover:saturate-[1.2]"
              src="../assets/Photo1.jpeg"
              alt="Photo1"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t("about.title")}
              </h5>
              <p className="text-md md:text-md mb-2 font-playfair text-gray-700 dark:text-gray-400">
                {t("about.paragraph1")}
              </p>

              <p className="text-md md:text-md mb-2 font-playfair text-gray-700 dark:text-gray-400">
                {t("about.paragraph2")}
              </p>
              <p className="text-md md:text-md mb-2 font-playfair text-gray-700 dark:text-gray-400">
                {t("about.paragraph3")}
              </p>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
