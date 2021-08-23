import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:tipo">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:tipo">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

