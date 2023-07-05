import { motion } from "framer-motion";

const NeonBar = ({ value, title }) => {
  return (
    <>
      <p>{title}</p>
      <div className="flex flex-row h-[25px] z-10 w-[83vw] md:w-[25vw] border-deep-blue   border-2 mb-2.5 ">
        {value === 1 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "10%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 2 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "20%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 3 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "30%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 4 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "40%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 5 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "50%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 6 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "60%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 7 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "70%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 8 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "80%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 9 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "90%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
        {value === 10 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 1, width: 0 },
              visible: { opacity: 1, width: "100%" },
            }}
            className=" h-full bg-neon-blue shadow-md shadow-neon-blue"
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NeonBar;
