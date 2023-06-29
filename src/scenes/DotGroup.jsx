import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const moonStyle = `relative bg-white hover:shadow-white shadow-lg  before:absolute before:w-4 before:h-4 before:rounded-full 
  before:border-2 before:border-navy-blue before:bg-navy-blue before:left-[10%] before:top-[-5%]`;

  const sunStyle = `relative bg-yellow hover:shadow-yellow shadow-lg before:absolute before:w-1 before:h-5 before:bg-navy-blue 
  before:left-[40%] after:absolute after:h-1 after:w-5 after:bg-navy-blue after:top-[40%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7 z-10">
      <AnchorLink
        className={`${selectedPage === "home" ? sunStyle : moonStyle}
        w-5 h-5 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${selectedPage === "about" ? sunStyle : moonStyle}
        w-5 h-5 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${selectedPage === "skills" ? sunStyle : moonStyle}
        w-5 h-5 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${selectedPage === "projects" ? sunStyle : moonStyle}
        w-5 h-5 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${selectedPage === "contact" ? sunStyle : moonStyle}
        w-5 h-5 rounded-full`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
