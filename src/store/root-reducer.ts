import { combineReducers } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemon/pokemon.reducer";
import { counterReducer } from "./counter/counter.reducer";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  counter: counterReducer,
});
