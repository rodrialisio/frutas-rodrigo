import "./ItemListContainer.css"
import React from "react"
import ItemList from "./ItemList.jsx"

export default function ItemListContainer() {

    return (
        <div className="item-list-container" style={{backgroundImage: "url(/images/madera.jpg)"}}  >
            <ItemList/>
        </div>
    )
}