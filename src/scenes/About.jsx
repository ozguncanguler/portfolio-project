import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-start h-full mt-10 py-10"
    >
      <div className="flex flex-row">
        <p className="text-8xl font-neonderthaw text-neon-blue">About</p>
      </div>

      {isAboveMediumScreens && (
        <div className="flex flex-col w-full justify-center items-center md:flex-row md:justify-center md:items-center mt-10">
          <a
            href="/"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-96 md:h-auto md:w-80 rounded-t-[400px] transition duration-500 md:blur-[0.4px] md:brightness-[0.8] md:contrast-[0.8] md:grayscale-[75%] md:hover:blur-[0px] md:hover:brightness-[1.2] md:hover:contrast-[1.2] md:hover:grayscale-[0%] md:hover:saturate-[1.2]"
              src="../assets/Photo1.jpeg"
              alt="Photo1"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Short story
              </h5>
              <p className="text-md mb-2 font-playfair text-gray-700 dark:text-gray-400">
                I'm Özgün. I work as a Frontend Developer, UI/UX Designer, and
                R&D Specialist. I was born in Istanbul in 1995, and currently
                live in Istanbul. I graduated from YTU with a degree in Control
                and Automation Engineering, and I have been working at Arçelik
                company since 2019.
              </p>

              <p className="text-md mb-2 font-playfair text-gray-700 dark:text-gray-400">
                During my internship at Arçelik, I designed a web interface that
                allows controlling TVs from a PC. Later I was promoted to
                engineering and during my engineer role I worked on
                troubleshooting software of inhouse and outsource TVs. I had the
                opportunity to work with our partner companies Google and MTK
                within the two android projects we developed during this
                process. During my specialization period, I worked on Smart
                Board and Hotel TV projects. Currently, I am working on
                developing a hotel TV application for Android TVs and creating a
                web-based management application for hotel administrators.
              </p>
              <p className="text-md mb-2 font-playfair text-gray-700 dark:text-gray-400">
                Drawing and making music are among my hobbies. I am skilled in
                creating realistic portraits using charcoal and ink.
                Additionally, I can play various types of guitars and have
                proficiency in playing the keyboard.
              </p>
              <p className="text-md mb-2 font-playfair text-gray-700 dark:text-gray-400">
                Throughout my career, my interest in visual design has grown,
                and I aim to specialize in frontend design by combining it with
                my empathetic abilities. Improving and enhancing people's lives
                is my top priority. In the future, I aspire to continue my
                career in Europe. During my university years, I had the
                opportunity to spend five months in Europe through the Erasmus+
                student exchange program, and I believe that experience nurtured
                my soul and creativity.
              </p>
            </div>
          </a>
          {/* <div className="w-8/12 m-5 p-5 border-2">
            <p className="text-md font-playfair">
              Hello, I'm Özgün. I work as a Frontend Developer, UI/UX Designer,
              and R&D Specialist. I was born in Istanbul in 1995, and currently
              live in Istanbul.
            </p>
            <p className="text-md font-playfair">
              I graduated from YTU with a degree in Control and Automation
              Engineering, and I have been working at Arçelik company since
              2019.
            </p>
            <p className="text-md font-playfair">
              During my internship at Arçelik, I designed a web interface that
              allows controlling TVs from a PC.
            </p>
            <p className="text-md font-playfair">
              Later I was promoted to engineering and during my engineer role I
              worked on troubleshooting software of inhouse and outsource TVs. I
              had the opportunity to work with our partner companies Google and
              MTK within the two android projects we developed during this
              process.
            </p>
            <p className="text-md font-playfair">
              During my specialization period, I worked on Smart Board and Hotel
              TV projects. Currently, I am working on developing a hotel TV
              application for Android TVs and creating a web-based management
              application for hotel administrators.
            </p>
            <p className="text-md font-playfair">
              Drawing and making music are among my hobbies. I am skilled in
              creating realistic portraits using charcoal and ink. Additionally,
              I can play various types of guitars and have proficiency in
              playing the keyboard.
            </p>
            <p className="text-md font-playfair ">
              Throughout my career, my interest in visual design has grown, and
              I aim to specialize in frontend design by combining it with my
              empathetic abilities. Improving and enhancing people's lives is my
              top priority. In the future, I aspire to continue my career in
              Europe. During my university years, I had the opportunity to spend
              five months in Europe through the Erasmus+ student exchange
              program, and I believe that experience nurtured my soul and
              creativity. Hello, I'm Özgün. I work as a Frontend Developer,
              UI/UX Designer, and R&D Specialist Engineer. I graduated from
              Yildiz Technical University with a degree in Control and
              Automation Engineering in 2019, and I have been working at Arçelik
              since then.
            </p>
          </div> 
          <div className="w-4/12 m-5 p-5 border-4 border-orange rounded-t-[400px] shadow-orange shadow-[0_0_50px_10px]">
            <img
              className="rounded-t-[400px] transition duration-500 md:blur-[0.4px] md:brightness-[0.8] md:contrast-[0.8] md:grayscale-[75%] md:hover:blur-[0px] md:hover:brightness-[1.2] md:hover:contrast-[1.2] md:hover:grayscale-[0%] md:hover:saturate-[1.2]"
              src="../assets/Photo1.jpeg"
              alt="Photo1"
            />
          </div>*/}
        </div>
      )}
      {!isAboveMediumScreens && (
        <div className="flex flex-col w-full justify-center items-center ">
          <div className="w-1/2 m-5 p-5 border-4 border-orange rounded-t-[400px] shadow-orange shadow-[0_0_50px_10px]">
            <img
              className="rounded-t-[400px] transition duration-500 md:blur-[0.4px] md:brightness-[0.8] md:contrast-[0.8] md:grayscale-[75%] md:hover:blur-[0px] md:hover:brightness-[1.2] md:hover:contrast-[1.2] md:hover:grayscale-[0%] md:hover:saturate-[1.2]"
              src="../assets/Photo3.jpeg"
              alt="Photo3"
            />
          </div>
          <div className="w-full m-5 p-5 border-2">
            <p className="text-md font-playfair">
              Hello, I'm Özgün. I work as a Frontend Developer, UI/UX Designer,
              and R&D Specialist. I was born in Istanbul in 1995, and currently
              live in Istanbul.
            </p>
            <p className="text-md font-playfair">
              I graduated from YTU with a degree in Control and Automation
              Engineering, and I have been working at Arçelik company since
              2019.
            </p>
            <p className="text-md font-playfair">
              During my internship at Arçelik, I designed a web interface that
              allows controlling TVs from a PC.
            </p>
            <p className="text-md font-playfair">
              Later I was promoted to engineering and during my engineer role I
              worked on troubleshooting software of inhouse and outsource TVs. I
              had the opportunity to work with our partner companies Google and
              MTK within the two android projects we developed during this
              process.
            </p>
            <p className="text-md font-playfair">
              During my specialization period, I worked on Smart Board and Hotel
              TV projects. Currently, I am working on developing a hotel TV
              application for Android TVs and creating a web-based management
              application for hotel administrators.
            </p>
            <p className="text-md font-playfair">
              Drawing and making music are among my hobbies. I am skilled in
              creating realistic portraits using charcoal and ink. Additionally,
              I can play various types of guitars and have proficiency in
              playing the keyboard.
            </p>
            <p className="text-md font-playfair">
              Throughout my career, my interest in visual design has grown, and
              I aim to specialize in frontend design by combining it with my
              empathetic abilities. Improving and enhancing people's lives is my
              top priority. In the future, I aspire to continue my career in
              Europe. During my university years, I had the opportunity to spend
              five months in Europe through the Erasmus+ student exchange
              program, and I believe that experience nurtured my soul and
              creativity. Hello, I'm Özgün. I work as a Frontend Developer,
              UI/UX Designer, and R&D Specialist Engineer. I graduated from
              Yildiz Technical University with a degree in Control and
              Automation Engineering in 2019, and I have been working at Arçelik
              since then.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
