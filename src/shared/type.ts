import { Variants } from "framer-motion";

export interface AnimatedSlidingProps {
  children: JSX.Element;
  variants: Variants;
}

export interface AnimatedMirrorProps {
  children: JSX.Element;
}

export interface AnimatedHamburgerProps {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
}

export interface menuExitProps {
  children: JSX.Element;
  exit: { [key: string]: unknown };
  transition: { [key: string]: unknown };
}
