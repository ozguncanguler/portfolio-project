import { useEffect, useState } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { color, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import ReactFlagsSelect from "react-flags-select";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  const { t } = useTranslation("translation");

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow flex items-center" : ""
      }
      ${"hover:text-yellow flex items-center transition duration-500"}
        `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {t(`navbar.${lowerCasePage}`)}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-blue";
  const { t } = useTranslation("translation");
  const [languageSelected, setLanguageSelected] = useState("GB");
  const lang = i18n.language.toUpperCase();

  const selectStyles = {
    color: "red",
  };

  // Language initializator for react flag select
  useEffect(() => {
    if (lang === "EN") {
      setLanguageSelected("GB");
    } else if (lang === "TR") {
      setLanguageSelected("TR");
    } else {
      setLanguageSelected("GB");
    }
  }, [lang]);

  const countries = ["GB", "TR"];
  const customLabels = {
    GB: "EN",
    TR: "TR",
  };

  const handleLanguageChange = (e) => {
    setLanguageSelected(e);
    const languages = {
      GB: "en",
      TR: "tr",
    };
    const index = Object.keys(languages).indexOf(e);
    const language = Object.values(languages)[index];
    i18n.changeLanguage(language);
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="flex items-center justify-between mx-auto w-5/6"
      >
        <div />
        {isAboveSmallScreens ? (
          <div
            style={{ transform: "translateY(0px)" }}
            className="flex justify-between gap-16 font-opensans text-sm font-semibold text-pale-yellow "
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <ReactFlagsSelect
              countries={countries}
              customLabels={customLabels}
              showSelectedLabel={false}
              selected={languageSelected.toString()}
              onSelect={handleLanguageChange}
              className="text-black w-20"
            />
          </div>
        ) : (
          <div className="flex">
            <ReactFlagsSelect
              countries={countries}
              customLabels={customLabels}
              showSelectedLabel={false}
              selected={languageSelected.toString()}
              onSelect={handleLanguageChange}
              className="text-black"
            />
            <button
              className="rounded-lg  bg-deep-blue ml-4 p-2 hover:bg-blue transition duration-500"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menuicon" src="../assets/menu-icon.svg" />
            </button>
          </div>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="closeicon" src="../assets/close-icon.svg" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-navy-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
