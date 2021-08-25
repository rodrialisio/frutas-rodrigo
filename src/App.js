import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { CartContext } from "./components/context/CartContext.jsx";
import "./App.css"

function App() { 

  return (
    <div className="App">
      <CartContext.Provider value={[]}>
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
            <Route exact path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;

