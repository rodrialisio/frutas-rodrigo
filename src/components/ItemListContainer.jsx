import "./ItemListContainer.css"
import React from "react"
import ItemList from "./ItemList.jsx"

export default function ItemListContainer() {

    return (
        <div className="item-list-container" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/frutas-rodrigo.appspot.com/o/madera.jpg?alt=media&token=15b35702-60bb-448e-bade-0ee31fa7cc83)"}}  >
            <ItemList/>
        </div>
    )
}