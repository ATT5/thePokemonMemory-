import { wallpaper } from "./assets";
import GameBoard from "./components/GameBoard";
import { Menu } from "./components/Menu";
import MusicButton from "./components/Btns/MusicButton";
import Title from "./components/Title";
import Score from "./components/Score";
import Rules from "./components/Rules";
import { useSelector } from "react-redux";
import GameOver from "./components/GameOver";
import Pokemons from "./components/Pokemons";
import Ranking from "./components/Ranking/Ranking";
import ShowRankingBtn from "./components/Btns/ShowRankingBtn";

function App() {
  const playingGame = useSelector((state) => state.game.playing);
  const rules = useSelector((state) => state.game.rules);
  const player = useSelector((state) => state.game.playerIsAlive);
  const ranking = useSelector((state) => state.game.ranking);

  return (
    <main className="w-full  font-pixel bg-cover lg:bg-contain flex flex-col items-center ">
      <div
        className="fixed top-0 -z-10 w-full h-screen bg-cover lg:bg-contain  bg-[#388041] "
        style={{
          backgroundImage: `url(${wallpaper})`,
        }}
      ></div>

      {/* Handle the music */}
      <MusicButton />

      {/* Starting screen 🏀 */}
      {!rules && !playingGame && !ranking && (
        <section className="w-full h-screen flex flex-col items-center overflow-hidden">
          <Title />
          <Menu />
          <Pokemons />
          <ShowRankingBtn />
        </section>
      )}

      {/* Game rules */}
      {rules && <Rules />}

      {/* Game  💥*/}
      {playingGame && player && (
        <section className="w-full h-screen  flex items-center justify-center ">
          <Score />
          <GameBoard />
        </section>
      )}
      {!player && <GameOver />}

      {ranking && (
        <div className="w-[70%] bg-white rounded-3xl mt-10 p-3">
          <Ranking />
        </div>
      )}
    </main>
  );
}

export default App;
