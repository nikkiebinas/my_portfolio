import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  title: string;
  display: string;
};

function NavButton({ title, display }: Props) {
  const lowerCaseTitle = title.toLowerCase().replace(/ /g, "");
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover="hover"
      onClick={() => navigate(`/${lowerCaseTitle}`)}
      className={`relative ${display}  flex-col items-center font-serif text-xl text-white sm:flex`}
    >
      <span className="hover:text-maroon">{title}</span>
      <motion.div
        initial={{ width: 0 }}
        variants={{
          hover: {
            width: "100%",
          },
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-[-3px] left-0 h-[2px] w-[0] bg-maroon"
      />
    </motion.button>
  );
}

export default NavButton;
