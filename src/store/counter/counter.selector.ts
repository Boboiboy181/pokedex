import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectCounterReducer = (state: RootState) => state.counter;

export const selectCurrentCounter = createSelector(
  [selectCounterReducer],
  (counter) => counter.counter
);
