import { walking } from "../assets";
import { motion } from "framer-motion";

const Pokemons = () => {
  return (
    <>
      <motion.div
        className="w-full absolute bottom-1"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={walking}
          alt="pikachu"
          width={150}
          height={75}
          className="absolute bottom-3 right-0 "
        />
      </motion.div>
    </>
  );
};

export default Pokemons;
