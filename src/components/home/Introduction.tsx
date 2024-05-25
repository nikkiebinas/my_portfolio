import IntroImg from "@/assets/intro-design.png";
import {
  AnimatedMirror,
  AnimatedRotation,
  AnimatedSliding,
} from "@/shared/AnimatedSettings";
import { IntroTypewriter } from "@/shared/AnimatedTypewriter";
import { Variants } from "framer-motion";
import Facebook from "@/assets/icons8-facebook-circled.svg";
import LinkedIn from "@/assets/icons8-linkedin-circled.svg";
import GitHub from "@/assets/icons8-github.svg";
import Twitter from "@/assets/icons8-twitter-circled.svg";

const Introduction = () => {
  const slidingLeftVarients: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const slidingRightVarients: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const rotationVarients: Variants = {
    hidden: {
      rotate: [0],
    },
    visible: {
      rotate: [0, 360],
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="mt-6 sm:grid sm:grid-cols-2">
      <AnimatedSliding variants={slidingLeftVarients}>
        <div className="mx-6 flex flex-col items-start justify-start sm:ml-12">
          <p className="font-serif text-xl leading-snug text-white sm:mt-[60px] md:text-2xl">
            Hello, I'm <span className="text-maroon">Nikkie Biñas</span>
            <br />a{" "}
            <span className="text-maroon">
              <IntroTypewriter />
            </span>
            <br />
            <span className="text-sm text-lightBlack md:text-lg">
              With a passion for creating intuitive and dynamic digital
              experiences, I specialize in crafting responsive websites and
              user-friendly mobile applications. Welcome to my portfolio, where
              you can explore my projects and see how I bring ideas to life
              through code and creativity.
            </span>
          </p>
          <div className="mt-3 flex flex-row gap-2">
            <a href="#">
              <AnimatedRotation variants={rotationVarients}>
                <img
                  alt="Facebook"
                  src={Facebook}
                  className="h-10 w-10 rounded-full"
                />
              </AnimatedRotation>
            </a>
            <a href="#">
              <AnimatedRotation variants={rotationVarients}>
                <img
                  alt="LinkIn"
                  src={LinkedIn}
                  className="h-10 w-10 rounded-full"
                />
              </AnimatedRotation>
            </a>
            <a href="#">
              <AnimatedRotation variants={rotationVarients}>
                <img
                  alt="Github"
                  src={GitHub}
                  className="h-10 w-10 rounded-full"
                />
              </AnimatedRotation>
            </a>
            <a href="#">
              <AnimatedRotation variants={rotationVarients}>
                <img
                  alt="Twitter"
                  src={Twitter}
                  className="h-10 w-10 rounded-full"
                />
              </AnimatedRotation>
            </a>
          </div>
        </div>
      </AnimatedSliding>
      <AnimatedSliding variants={slidingRightVarients}>
        <AnimatedMirror>
          <img alt="Intro Image" src={IntroImg} className="mt-14 sm:mt-0" />
        </AnimatedMirror>
      </AnimatedSliding>
    </section>
  );
};

export default Introduction;
