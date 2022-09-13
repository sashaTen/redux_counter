
/*
1   you  create   the  file  called   "store"
2  there   you  create  configure  store and export  default
3  wrap   your  app  into   provider  of that  store
4 create   file   called  slice 
5  in that  file  create  the   createslice({})  with   initial   state  of
the   datatype   you  need
ex:  todoSlice = createSlice
6  export   reducer's   functions   like   increment()   
7  export  default   todoSlice.reducer
8 Add Slice Reducers to the Store  like  : 
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

9    now it  is   time   to  useSelect  (get current  state)  and  usedispatch(set new state)




//////////////////////////////
SUMMARY   :  
To sum up, we have 6 steps to implement the Redux Toolkit to our react project:

Install Redux Toolkit and React-Redux Packages
Create a Redux Store
Include the Redux Store to App.js parent
Create a Redux State Slice
Add Slice Reducers to the Store
Implementing useSelector and useDispatch in React Components
*/
import "./styles.css";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./slice";
export default function App() {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {data.value}
      <h1>Hello CodeSandbox</h1>
      <h1
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </h1>
      <h1
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
