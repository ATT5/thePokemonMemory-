import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    // Game status
    rules: false,
    playing: false,
    playerIsAlive: true,
    win: false,
    // Game
    level: 5,
    flip: false,
    pokemonsSelected: [],
    score: 0,
    //extras
    playerName: "",
    ranking: false,
    playMusic: false,
  },
  reducers: {
    okRules(state) {
      state.rules = true;
    },
    startGame(state) {
      state.playing = true;
      state.rules = false;
    },
    setLevel: (state, actions) => {
      state.level = actions.payload;
    },
    flipDown(state) {
      state.flip = !state.flip;
    },
    getPokemon(state, actions) {
      const checkPokemon = state.pokemonsSelected.includes(actions.payload);

      if (!checkPokemon) {
        state.pokemonsSelected.push(actions.payload);
        state.score++;
        if (state.pokemonsSelected.length === state.level) {
          state.win = true;
          state.playerIsAlive = false;
        }
      } else {
        state.playerIsAlive = false;
      }
    },
    playAgain(state) {
      state.playing = true;
      if (!state.win) state.score = 0;
      state.win = false;
      state.pokemonsSelected = [];
      state.playerIsAlive = true;
    },
    exit(state) {
      state.level = 5;
      state.rules = false;
      state.playing = false;
      state.playerIsAlive = true;
      state.score = 0;
      state.win = false;
      state.pokemonsSelected = [];
      state.ranking = false;
    },
    showRanking(state) {
      state.ranking = true;
    },
    playMusicHandler(state) {
      state.playMusic = true;
    },
    stopMusic(state) {
      state.playMusic = false;
    },
    getPlayerName(state, actions) {
      state.playerName = actions.payload;
    },
  },
});

export const gameAction = gameSlice.actions;

export default gameSlice;
