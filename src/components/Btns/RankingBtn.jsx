const RankingBtn = ({ level, onClick, selected }) => {
  return (
    <button
      className={` border-8 border-double  border-black active:bg-slate-300 p-1 my-1 ${
        level === selected ? " bg-green-300" : ""
      } `}
      onClick={onClick}
    >
      {level}
    </button>
  );
};

export default RankingBtn;
