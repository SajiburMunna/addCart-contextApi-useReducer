import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { counterContext } from "./App";
const Header = () => {
  const count = useContext(counterContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            ComA <h1>{count}</h1>
          </Link>
        </li>
        <li>
          <Link to="/b">ComB </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
