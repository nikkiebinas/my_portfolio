import Logo from "@/assets/nb-maroon.png";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  AnimatedHamburger,
  AnimatedMenu,
  AnimatedSliding,
} from "@/shared/AnimatedSettings";
import Sun from "@/assets/sun.svg";
import Moon from "@/assets/moon.svg";

function NavBar() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const homeExit = {
    opacity: 0,
    y: 90,
    transition: {
      ease: "easeInOut",
      delay: 0.7,
    },
  };

  const aboutExit = {
    opacity: 0,
    y: 90,
    transition: {
      ease: "easeInOut",
      delay: 0.5,
    },
  };

  const projectExit = {
    opacity: 0,
    y: 90,
    transition: {
      ease: "easeInOut",
      delay: 0.3,
    },
  };

  const contactExit = {
    opacity: 0,
    y: 90,
    transition: {
      ease: "easeInOut",
      delay: 0.1,
    },
  };

  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      setTheme("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const slidingRightVarients: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const slidingLeftVarients: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <nav>
      <div className="flex h-20 w-full items-center justify-between pl-6 pr-4">
        <AnimatedSliding variants={slidingLeftVarients}>
          <img alt="logo" src={Logo} className="h-10 w-14 sm:ml-5" />
        </AnimatedSliding>
        <AnimatedSliding variants={slidingRightVarients}>
          <ul className="flex items-center justify-between sm:gap-8">
            <li>
              <NavButton title="Home" display="hidden" />
            </li>
            <li>
              <NavButton title="About" display="hidden" />
            </li>
            <li>
              <NavButton title="Project" display="hidden" />
            </li>
            <li>
              <NavButton title="Contact" display="hidden" />
            </li>
            <li className="mr-2 mt-2 bg-black sm:mr-0">
              <button
                className="rounded-full hover:bg-white/5"
                onClick={handleThemeSwitch}
              >
                <img
                  alt="Sun && Moon"
                  src={theme !== "light" ? Sun : Moon}
                  className="size-10"
                />
              </button>
            </li>
            <li>
              <AnimatedHamburger
                setIsMenuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
              />
            </li>
          </ul>
        </AnimatedSliding>
      </div>
      <AnimatePresence>
        {isMenuToggled && (
          <motion.div
            exit="exit"
            className="flex flex-col bg-inherit sm:hidden"
          >
            <ul className="mr-6 flex flex-col items-end gap-3 text-xl">
              <li>
                <AnimatedMenu transition={{ delay: 0.8 }} exit={homeExit}>
                  <NavButton title="Home" display="flex" />
                </AnimatedMenu>
              </li>
              <li>
                <AnimatedMenu transition={{ delay: 0.6 }} exit={aboutExit}>
                  <NavButton title="About" display="flex" />
                </AnimatedMenu>
              </li>
              <li>
                <AnimatedMenu transition={{ delay: 0.4 }} exit={projectExit}>
                  <NavButton title="Project" display="flex" />
                </AnimatedMenu>
              </li>
              <li>
                <AnimatedMenu transition={{ delay: 0.2 }} exit={contactExit}>
                  <NavButton title="Contact" display="flex" />
                </AnimatedMenu>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
