import React, { useReducer } from "react";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const counterContext = React.createContext();
export const dispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    default:
      throw new Error(`unknown action ${action.type}`);
  }
};
const App = () => {
  const [count, dispatch] = useReducer(reducer, []);
  return (
    <div>
      <dispatchContext.Provider value={{ countDispatch: dispatch }}>
        <counterContext.Provider value={count}>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Cart></Cart>
              </Route>
              <Route exact path="/b">
                <Store></Store>
              </Route>
            </Switch>
          </Router>
        </counterContext.Provider>
      </dispatchContext.Provider>
    </div>
  );
};

export default App;
