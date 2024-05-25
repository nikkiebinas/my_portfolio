import { TypeAnimation } from "react-type-animation";

export const IntroTypewriter: React.FC = () => {
  return (
    <TypeAnimation
      sequence={["Web Developer.", 1000, "Mobile Developer.", 1000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};
