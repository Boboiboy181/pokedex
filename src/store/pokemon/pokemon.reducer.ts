import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "./pokemon.type";

const defaultValue: Pokemon = {
  id: 0,
  name: "",
  image: "",
  height: 0,
  weight: 0,
  type: "",
  move: "",
  stats: {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
  color: "white",
};

const INITIAL_STATE = {
  pokemon: defaultValue,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemon = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
