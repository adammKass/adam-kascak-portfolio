import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Tab,
  TabGroup,
  TabList,
  Transition,
} from "@headlessui/react";
import { sign } from "../assets";
import { navLinks, navLinksContact } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../style";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkModeSwitcher from "./darkModeSwitcher";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage =
    location.pathname === "/adam-kascak-portfolio" ||
    location.pathname === "/adam-kascak-portfolio/" ||
    window.location.href ===
      "https://adammkass.github.io/adam-kascak-portfolio/";
  const { t } = useTranslation();

  return (
    <div className="w-full border-b border-PBlack shadow-md">
      <a
        href="#main-content"
        className="absolute top-0 left-0 p-2 bg-PBlack text-PWhite transform -translate-y-full transition-transform duration-300"
      >
        Skip to Main Content
      </a>
      <header
        className={`w-full flex flex-row justify-between mx-auto items-center bg-PWhite z-10 ${styles.boxWidth} ${styles.paddingXA} py-3 overflow-hidden`}
      >
        {/* Wrap logo and text in a flex container */}
        <div className="flex flex-row items-center gap-12">
          <Link to="/adam-kascak-portfolio" className={`${styles.focus}`}>
            <img
              src={sign}
              alt="Signature of Adam Kascak"
              className={`${styles.iconSize} ${styles.iconHover} p-0 lg:p-2`}
            />
          </Link>

          {/* Center the text */}

          {isHomepage && (
            <h1
              className={`${styles.cursorText} uppercase texy-xl font-medium`}
            >
              {t(`home.title`)}
            </h1>
          )}
        </div>

        {/* Show nav links if not on homepage */}
        {!isHomepage && (
          <nav className="hidden md:flex">
            <TabGroup>
              <TabList className="flex flex-row items-center gap-2 lg:gap-5">
                {navLinks.map((nav) => (
                  <Tab
                    key={nav.id}
                    className={`bg-PWhite font-light hover:text-PBlack group ${styles.focus} ${styles.cursorPointer} uppercase`}
                    onClick={() => navigate(nav.to)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        navigate(nav.to);
                      }
                    }}
                  >
                    <a className="text-PBlack hover:text-PBlack">
                      {t(`navbar.${nav.id}`)}
                      <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack"></span>
                    </a>
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
          </nav>
        )}
        <Link
          to={navLinksContact.to}
          className={`hidden md:block rounded-md bg-PBlack px-6 py-2 text-PWhite transition-colors duration-300 hover:bg-black/80 w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-PBlack ${styles.focus} ${styles.cursorPointer} uppercase font-medium`}
        >
          {t(`contactCTA`)}
        </Link>

        {/* Hamburger menu for smaller screens */}
        <Menu className={`md:hidden ${styles.cursorPointer}`} as="div">
          {({ open }) => (
            <>
              <MenuButton
                aria-label="Menu"
                className={`${styles.cursorPointer}`}
              >
                <div
                  id="nav-icon3"
                  className={`${open ? "open" : ""} hover:opacity-50`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </MenuButton>
              <Transition
                show={open}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-y-5"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-5"
              >
                <MenuItems
                  anchor={{ to: "bottom start", gap: "16px" }}
                  transition
                  className={`origin-top transition-all w-full h-full z-40 bg-PWhite flex flex-col space-y-6 font-semibold pt-10 px-10 border-b border-PBlack duration-300 ease-in-out`}
                >
                  {navLinks.map((nav) => (
                    <MenuItem
                      key={t(`navbar.${nav.id}`)}
                      as="div"
                      className="w-full"
                    >
                      <Link
                        to={nav.to}
                        className="text-PBlack font-extralight text-xl lg:text-4xl"
                      >
                        {t(`navbar.${nav.id}`)}
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem as="div" className="w-full">
                    <Link
                      to={navLinksContact.to}
                      className="text-PBlack font-extralight text-xl lg:text-4xl"
                    >
                      {t(`contactCTA`)}
                    </Link>
                  </MenuItem>
                  <MenuItem
                    as="div"
                    className="flex items-center justify-start gap-8"
                  >
                    <LanguageSwitcher />
                    <DarkModeSwitcher />
                  </MenuItem>
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu>
      </header>
    </div>
  );
};

export default Navbar;
