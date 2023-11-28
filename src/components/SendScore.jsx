import { sendData } from "../store/GetPokemons";
import { useSelector, useDispatch } from "react-redux";
import { gameAction } from "../store/game";

const SendScore = ({ score, onClick }) => {
  const level = useSelector((state) => state.game.level);
  const playerName = useSelector((state) => state.game.playerName);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(score, playerName, level);
    onClick();
  };

  return (
    <form className=" flex flex-col items-center" onSubmit={handleSubmit}>
      <p className="text-2xl text-center">compare your score</p>
      <input
        onChange={(e) => dispatch(gameAction.getPlayerName(e.target.value))}
        required
        maxLength={9}
        type="text"
        className="border-8 border-double border-black my-3 px-1 w-52 text-center"
        placeholder="your name"
      />
      <button className="border-8 border-double border-black bg-yellow-300  p-1 my-1  ">
        submit
      </button>
    </form>
  );
};

export default SendScore;
