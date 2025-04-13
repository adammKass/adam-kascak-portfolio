import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/react";
import { menu, sign, sun, moon } from "../assets";
import { navLinks } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../style";
import useDarkMode from "./useDarkMode";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isDark, setIsDark] = useDarkMode(); // Dark mode state
  const location = useLocation(); // Current location
  const navigate = useNavigate(); // Navigation handler
  const isHomepage =
    location.pathname === "/adam-kascak-portfolio" ||
    "https://adammkass.github.io/adam-kascak-portfolio/"; // Check if on homepage
  const { t } = useTranslation(); // Translation hook

  return (
    <div className="w-full border-b border-PBlack shadow-md">
      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="absolute top-0 left-0 p-2 bg-PBlack text-PWhite transform -translate-y-full transition-transform duration-300"
      >
        Skip to Main Content
      </a>

      <header
        className={`w-full flex flex-row justify-between items-center bg-PWhite z-10 ${styles.boxWidth} ${styles.paddingXA} mx-auto py-3 overflow-hidden`}
      >
        {/* Logo and Homepage Title */}
        <div className="flex flex-row items-center gap-12">
          <Link to="/adam-kascak-portfolio">
            <img
              src={sign}
              alt="Signature of Adam Kascak"
              className={`${styles.iconSize} ${styles.iconHover} ${styles.cursorPointer}`}
            />
          </Link>
          {isHomepage && (
            <h1 className={`${styles.cursorText}`}>{t(`home.title`)}</h1>
          )}
        </div>

        {/* Navigation Links for Larger Screens */}
        {!isHomepage && (
          <nav className="hidden md:flex">
            <TabGroup>
              <TabList className="flex flex-row items-center gap-5">
                {navLinks.map((nav) => (
                  <Tab
                    key={nav.id}
                    className={`bg-PWhite font-extralight hover:text-PBlack group ${styles.focus} ${styles.cursorPointer}`}
                    onClick={() => navigate(nav.to)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        navigate(nav.to);
                      }
                    }}
                  >
                    <a className="text-PBlack hover:text-PBlack">
                      {t(`navbar.${nav.id}`)}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-PBlack"></span>
                    </a>
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
          </nav>
        )}

        {/* Hamburger Menu for Smaller Screens */}
        <Menu className="md:hidden" as="div">
          {({ open }) => (
            <>
              {/* Menu Button */}
              <MenuButton aria-label="Menu">
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

              {/* Menu Items */}
              <Transition
                show={open}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-y-5"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-5"
              >
                <MenuItems className="origin-top transition-all w-full h-full z-40 bg-PWhite flex flex-col space-y-6 font-semibold pt-10 px-10 border-b border-PBlack duration-300 ease-in-out">
                  {/* Navigation Links */}
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

                  {/* Language Switcher and Dark Mode Toggle */}
                  <MenuItem
                    as="div"
                    className="flex items-center justify-start gap-8"
                  >
                    <LanguageSwitcher />
                    <div className="flex items-center gap-2">
                      {/* Light Mode Icon */}
                      <img
                        src={sun}
                        alt="light mode"
                        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
                      />
                      {/* Dark Mode Toggle Button */}
                      <button
                        aria-label="Toggle dark mode"
                        onClick={() => setIsDark(!isDark)}
                        className="relative inline-flex h-6 w-12 items-center rounded-full bg-PGreyDark transition"
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-PGrey transition ${
                            isDark ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                      {/* Dark Mode Icon */}
                      <img
                        src={moon}
                        alt="dark mode"
                        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
                      />
                    </div>
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
