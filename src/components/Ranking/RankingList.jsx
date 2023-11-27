const RankingList = ({ ranking }) => {
  return (
    <div className="w-[95%] min-h-[350px]">
      <ul>
        {ranking.slice(0, 10).map((el, index) => (
          <li
            key={el.name + index}
            className="flex  justify-between my-2 px-10"
          >
            <span className="text-red-500 ">{index + 1}</span>
            <p className="ml-2">{el.name}</p>
            <span className="ml-2 ">{el.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  ß;
};

export default RankingList;
