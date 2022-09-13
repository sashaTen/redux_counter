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
