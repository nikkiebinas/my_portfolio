import IntroImg from "@/assets/intro-design.png";
import { Variants } from "framer-motion";
import {
  AnimatedSliding,
  AnimatedMirror,
  AnimatedRotation,
} from "@/shared/AnimatedSettings";
import Facebook from "@/assets/icons8-facebook-circled.svg";
import LinkedIn from "@/assets/icons8-linkedin-circled.svg";
import GitHub from "@/assets/icons8-github.svg";
import Twitter from "@/assets/icons8-twitter-circled.svg";
import { IntroTypewriter } from "@/shared/AnimatedTypewriter";

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
    <section>
      <div className="mt-6 sm:flex sm:flex-row sm:items-center sm:justify-between">
        <AnimatedSliding variants={slidingLeftVarients}>
          <div className="mx-6 flex flex-col items-start justify-center gap-2 sm:ml-12 sm:basis-2/4 sm:items-start sm:justify-start">
            <h1 className="text-left font-serif text-xl leading-tight text-white md:text-2xl">
              Hello, I'm{" "}
              <span className="text-maroon">
                Nikkie Biñas
                <span className="text-white">
                  ,<br></br>a{" "}
                  <span className="text-maroon">
                    <IntroTypewriter />
                    <br></br>
                    <span className="text-sm text-lightBlack md:text-lg">
                      With a passion for creating intuitive and dynamic digital
                      experiences, I specialize in crafting responsive websites
                      and user-friendly mobile applications. Welcome to my
                      portfolio, where you can explore my projects and see how I
                      bring ideas to life through code and creativity.
                    </span>
                  </span>
                </span>
              </span>
            </h1>
            <ul className="mt-3 flex flex-row gap-2">
              <li>
                <a href="#">
                  <AnimatedRotation variants={rotationVarients}>
                    <img
                      alt="Facebook"
                      src={Facebook}
                      className="h-10 w-10 rounded-full"
                    />
                  </AnimatedRotation>
                </a>
              </li>
              <li>
                <a href="#">
                  <AnimatedRotation variants={rotationVarients}>
                    <img
                      alt="LinkIn"
                      src={LinkedIn}
                      className="h-10 w-10 rounded-full"
                    />
                  </AnimatedRotation>
                </a>
              </li>
              <li>
                <a href="#">
                  <AnimatedRotation variants={rotationVarients}>
                    <img
                      alt="Github"
                      src={GitHub}
                      className="h-10 w-10 rounded-full"
                    />
                  </AnimatedRotation>
                </a>
              </li>
              <li>
                <a href="#">
                  <AnimatedRotation variants={rotationVarients}>
                    <img
                      alt="Twitter"
                      src={Twitter}
                      className="h-10 w-10 rounded-full"
                    />
                  </AnimatedRotation>
                </a>
              </li>
            </ul>
          </div>
        </AnimatedSliding>
        <AnimatedSliding variants={slidingRightVarients}>
          <div className="mt-14 sm:mt-0 sm:basis-2/4">
            <AnimatedMirror>
              <div>
                <img
                  alt="Intro Image"
                  src={IntroImg}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </AnimatedMirror>
          </div>
        </AnimatedSliding>
      </div>
    </section>
  );
};

export default Introduction;
