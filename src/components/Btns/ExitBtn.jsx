import React from "react";
import { gameAction } from "../../store/game";
import { useDispatch } from "react-redux";

const ExitBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="border-8 border-double bg-red-500 border-black  p-1 my-1 "
      onClick={() => dispatch(gameAction.exit())}
    >
      Exit
    </button>
  );
};

export default ExitBtn;
