import React, { useContext } from "react";
import { counterContext } from "./App";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div>
      <ComponentC></ComponentC>
    </div>
  );
};

export default ComponentB;
