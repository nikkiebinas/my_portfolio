import {
  AnimatedSlidingProps,
  AnimatedMirrorProps,
  AnimatedHamburgerProps,
  menuExitProps,
} from "@/shared/type";
import { MotionConfig, Variants, motion } from "framer-motion";

export const AnimatedSliding: React.FC<AnimatedSlidingProps> = ({
  children,
  variants,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedMirror: React.FC<AnimatedMirrorProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -5 }}
      animate={{ y: 5 }}
      transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};

const topHamburgerVarient: Variants = {
  open: {
    rotate: ["0deg", "0deg", "45deg"],
    top: ["35%", "50%", "50%"],
  },
  close: {
    rotate: ["45deg", "0deg", "0deg"],
    top: ["50%", "50%", "35%"],
  },
};

const middleHamburgerVarient: Variants = {
  open: {
    rotate: ["0deg", "0deg", "-45deg"],
  },
  close: {
    rotate: ["-45deg", "0deg", "0deg"],
  },
};

const bottomHamburgerVarient: Variants = {
  open: {
    rotate: ["0deg", "0deg", "45deg"],
    bottom: ["35%", "50%", "50%"],
    left: "50%",
  },
  close: {
    rotate: ["45deg", "0deg", "0deg"],
    bottom: ["50%", "50%", "35%"],
    left: "calc(50% + 6px)",
  },
};

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  isMenuToggled,
  setIsMenuToggled,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isMenuToggled ? "open" : "close"}
        onClick={() => setIsMenuToggled(!isMenuToggled)}
        className="relative h-10 w-10 bg-inherit py-8 transition-colors sm:hidden"
      >
        <motion.span
          style={{
            x: "-50%",
            y: "-50%",
          }}
          className="absolute left-[50%] top-[35%] h-1 w-7 bg-maroon"
          variants={topHamburgerVarient}
        />
        <motion.span
          style={{
            x: "-50%",
            y: "-50%",
          }}
          className="absolute left-[50%] top-[50%] h-1 w-7 bg-maroon"
          variants={middleHamburgerVarient}
        />
        <motion.span
          style={{
            x: "-50%",
            y: "50%",
          }}
          className="left-[calc(50% + 6px)] absolute bottom-[35%] h-1 w-4 bg-maroon"
          variants={bottomHamburgerVarient}
        />
      </motion.button>
    </MotionConfig>
  );
};

export const AnimatedMenu: React.FC<menuExitProps> = ({
  children,
  exit,
  transition,
}) => {
  return (
    <motion.div
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedRotation: React.FC<AnimatedSlidingProps> = ({
  children,
  variants,
}) => {
  return (
    <motion.div initial="hidden" whileHover="visible" variants={variants}>
      {children}
    </motion.div>
  );
};
