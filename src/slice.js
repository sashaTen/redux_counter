import { createSlice } from "@reduxjs/toolkit";
/*


export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      state.push(todo);
  },
});

*/

const initialState = { value: [1, 2, 3, 6, 5] };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value.push(1);
    },
    decrement(state) {
      state.value.pop();
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
});

// this is for dispatch
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// this is for configureStore
export default counterSlice.reducer;
