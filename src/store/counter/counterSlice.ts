// eslint-disable-next-line import/named
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number,
    isReady: boolean,
}

const initialState: CounterState = {
    count: 0,
    isReady: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;

    },
    addOne(state){
      state.count++;
    },
    substracOne(state){
      if (state.count === 0) return;
      state.count--;
    },
    resetCounter(stete, action: PayloadAction<number>){
      if (action.payload < 0) action.payload = 0;

      stete.count = action.payload
    }
  }
});

export const { addOne, resetCounter, substracOne, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;