import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { menu, sign, cross, uk, sun, moon } from "../assets";
import { navLinks } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import styles from "../style";
import useDarkMode from "./useDarkMode";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isDark, setIsDark] = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";
  const { t } = useTranslation();

  return (
    <div className="w-full border-b border-PBlack shadow-md">
      <nav
        className={`w-full flex flex-row justify-between items-center bg-PWhite z-10 ${styles.boxWidth} ${styles.paddingXA} mx-auto py-3 overflow-hidden`}
      >
        {/* Wrap logo and text in a flex container */}
        <div className="flex flex-row items-center gap-12">
          <Link to="/adam-kascak-portfolio">
            <img
              src={sign}
              alt="adam kascak sign"
              className="w-[58px] h-[58px] dark:brightness-[4] dark:saturate-0 dark:opacity-100 flex-shrink-0 opacity-100 hover:opacity-50 dark:hover:opacity-50 focus-visible:opacity-50 transition-opacity duration-300 ease-in-out"
              tabIndex={0} // Makes the image focusable via Tab key
            />
          </Link>

          {isHomepage && (
            <span className="text-lg font-medium text-PBlack">
              {t(`home.title`)}
            </span>
          )}
        </div>

        {/* Show nav links if not on homepage */}
        {!isHomepage && (
          <div className="hidden md:flex">
            <TabGroup>
              <TabList className="flex flex-row items-center gap-5">
                {navLinks.map((nav) => (
                  <Tab
                    key={nav.id}
                    className="bg-PWhite font-extralight hover:text-PBlack group"
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
          </div>
        )}

        {/* Hamburger menu for smaller screens */}
        <Menu>
          {({ open }) => {
            // Prevent scrolling when the menu is open
            useEffect(() => {
              if (open) {
                document.documentElement.style.overflow = "hidden"; // Disable scrolling on html
                document.body.style.overflow = "hidden"; // Disable scrolling on body
              } else {
                document.documentElement.style.overflow = "auto"; // Re-enable scrolling on html
                document.body.style.overflow = "auto"; // Re-enable scrolling on body
              }
            }, [open]);

            return (
              <div className="md:hidden">
                {/* Menu Button */}
                <MenuButton className="relative z-50">
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

                {/* Menu Container */}
                <div
                  className={`fixed top-0 left-0 w-full h-full z-40 bg-PWhite flex flex-col space-y-6 font-semibold pt-10 px-10 border-b border-PBlack transition-all duration-300 ease-in-out ${
                    open ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {navLinks.map((nav) => (
                    <MenuItem
                      key={t(`navbar.${nav.id}`)}
                      as="div" // Prevents default behavior of closing the menu
                      className="w-full"
                    >
                      <Link
                        to={nav.to}
                        className="text-PBlack hover:text-PBlack font-extralight text-4xl"
                      >
                        {t(`navbar.${nav.id}`)}
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem
                    as="div"
                    className="flex items-center justify-start gap-8"
                  >
                    <LanguageSwitcher />
                    <div className="flex items-center gap-2">
                      <img
                        src={sun}
                        alt="light mode"
                        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
                      />
                      <button
                        onClick={() => setIsDark(!isDark)} // Toggle dark mode
                        className={`relative inline-flex h-6 w-12 items-center rounded-full bg-PGreyDark transition`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-PGrey transition ${
                            isDark ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                      <img
                        src={moon}
                        alt="dark mode"
                        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
                      />
                    </div>
                  </MenuItem>
                </div>
              </div>
            );
          }}
        </Menu>
      </nav>
    </div>
  );
};

export default Navbar;
