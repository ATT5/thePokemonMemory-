import { getData } from "../../store/GetPokemons";
import { useEffect, useState } from "react";
import ExitBtn from "../Btns/ExitBtn";
import { pokeball } from "../../assets";
import RankingBtn from "../Btns/RankingBtn";
import RankingList from "./RankingList";
import { useSelector } from "react-redux";

const Ranking = () => {
  const [list, setList] = useState({});
  const [loading, setLoading] = useState(true);
  const [ranking, setRanking] = useState("easy");
  const playerName = useSelector((state) => state.game.playerName);
  const score = useSelector((state) => state.game.score);
  const level = useSelector((state) => state.game.level);

  useEffect(() => {
    const getRanking = async () => {
      const data = await getData();
      setList(data);
      setLoading(false);
    };
    getRanking();
  }, []);

  const easyList = Object.values(list)
    .filter((el) => el.level === 5)
    .sort((a, b) => b.score - a.score);

  const mediumList = Object.values(list)
    .filter((el) => el.level === 10)
    .sort((a, b) => b.score - a.score);

  const hardList = Object.values(list)
    .filter((el) => el.level === 15)
    .sort((a, b) => b.score - a.score);

  let pLevel = "easy";
  let position;

  if (level === 10) {
    pLevel = "medium";
    position = mediumList.findIndex((el) => el.name === playerName);
  } else if (level === 15) {
    pLevel = "hard";
    position = hardList.findIndex((el) => el.name === playerName);
  } else {
    position = easyList.findIndex((el) => el.name === playerName);
  }

  const listHandler = (level) => setRanking(level);

  return (
    <section className=" flex flex-col items-center  w-full">
      <h3 className="text-3xl">Ranking</h3>
      <div>
        <RankingBtn
          level={"easy"}
          onClick={() => listHandler("easy")}
          selected={ranking}
        />
        <RankingBtn
          level={"medium"}
          onClick={() => listHandler("medium")}
          selected={ranking}
        />
        <RankingBtn
          level={"hard"}
          onClick={() => listHandler("hard")}
          selected={ranking}
        />
      </div>
      {/* Player score */}
      {score > 0 && (
        <div className="flex justify-between w-[95%] bg-yellow-300 p-1 mt-1 rounded-lg px-4">
          <p>{pLevel}</p>
          <p>
            ranking position:{" "}
            <span className="bg-red-400 rounded-sm p-[2px]">
              {position + 1}
            </span>
          </p>
          <p>
            score:<span className="bg-red-400 rounded-sm p-[2px]">{score}</span>
          </p>
        </div>
      )}
      {/*  */}
      <div className="w-[95%] flex justify-between bg-blue-300 rounded-lg px-10 text-center my-3">
        <p>n.-</p>
        <p>name</p>
        <p>score</p>
      </div>
      {loading && (
        <img src={pokeball} alt="pokeball" width={150} height={150} />
      )}
      {!loading && (
        <>
          {ranking === "easy" && <RankingList ranking={easyList} />}
          {ranking === "medium" && <RankingList ranking={mediumList} />}
          {ranking === "hard" && <RankingList ranking={hardList} />}
        </>
      )}
      <hr className="w-[90%] bg-black h-[2px] mb-1 " />

      <ExitBtn />
    </section>
  );
};

export default Ranking;
