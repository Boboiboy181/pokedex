import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  value: 1,
};

const INITIAL_STATE = {
  counter: defaultValue,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      if (state.counter.value > 897) {
        state.counter.value = 898;
        return;
      }
      state.counter.value++;
    },
    decrement: (state) => {
      if (state.counter.value < 2) {
        return state;
      }
      state.counter.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.counter.value + action.payload > 897) {
        state.counter.value = 898;
        return;
      }
      state.counter.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.counter.value - action.payload < 2) {
        state.counter.value = 1;
        return;
      }
      state.counter.value -= action.payload;
    },
    reset: (state) => {
      state.counter.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
