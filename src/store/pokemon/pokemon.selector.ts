import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectPokemonReducer = (state: RootState) => state.pokemon;

export const selectCurrentPokemon = createSelector(
  [selectPokemonReducer],
  (pokemon) => pokemon.pokemon
);
