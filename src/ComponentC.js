import React, { useContext } from "react";
import { dispatchContext } from "./App";
const ComponentC = () => {
  const context = useContext(dispatchContext);
  return (
    <div>
      <p>Component A</p>
      <button type="button" onClick={() => context.countDispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => context.countDispatch("decrement")}>
        Decrement
      </button>
    </div>
  );
};

export default ComponentC;
