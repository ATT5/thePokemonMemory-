import { useDispatch } from "react-redux";
import { gameAction } from "../../store/game";
import { motion } from "framer-motion";

const ShowRankingBtn = () => {
  const dispatch = useDispatch();
  const handleRanking = () => dispatch(gameAction.showRanking());

  return (
    <motion.button
      className=" w-32 absolute right-5 bgb md:left-20 top-3 p-1 md:p-3 bg-yellow-400 rounded-2xl hover:bg-yellow-200 text-black "
      onClick={handleRanking}
      animate={{ y: ["0%", "10%", "0%"] }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      ranking
    </motion.button>
  );
};

export default ShowRankingBtn;
