const NeonBar = ({ value, title }) => {
  return (
    <>
      <p>{title}</p>
      <div className="flex flex-row h-[25px] z-10 w-[70vw] md:w-[20vw] border-deep-blue   border-2 mb-2.5 ">
        {value === 1 ? (
          <div
            className={`md:w-[2vw] w-[7vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 2 ? (
          <div
            className={`md:w-[4vw] w-[14vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 3 ? (
          <div
            className={`md:w-[6vw] w-[21vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 4 ? (
          <div
            className={`md:w-[8vw] w-[28vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 5 ? (
          <div
            className={`md:w-[10vw] w-[35vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 6 ? (
          <div
            className={`md:w-[12vw] w-[42vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 7 ? (
          <div
            className={`md:w-[14vw] w-[49vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 8 ? (
          <div
            className={`md:w-[16vw] w-[56vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 9 ? (
          <div
            className={`md:w-[18vw] w-[63vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
        {value === 10 ? (
          <div
            className={`md:w-[vw] w-[70vw] h-full bg-neon-blue shadow-md shadow-neon-blue`}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NeonBar;
