import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import React, { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import { CartContext } from "./components/context/CartContext.jsx";
import "./App.css"

export default function App() { 
  const [compra,setCompra]=useState([])

  const addItem= (fruta,imagen,kilos,costo) => { 
    if (compra.find( item => item.tipo === fruta)) {
      const repetido= compra.find( item => item.tipo === fruta)
      repetido.cantidad += kilos
      repetido.total += costo
    } else {
      compra.push({
        tipo: fruta,
        foto: imagen,
        cantidad: kilos,
        total: costo
      })
    }
  }

  const removeItem= (fruta) => {
    setCompra(compra.filter(function(item){
      return item.tipo !== fruta
    }))
  }

  const clear = () => {
    setCompra([])
  }

  return (
    <div className="App">
      <CartContext.Provider value={{compra,setCompra,addItem,removeItem,clear}}>
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

