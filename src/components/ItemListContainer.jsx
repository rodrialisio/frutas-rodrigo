import "./ItemListContainer.css"
import React from "react"
import ItemList from "./ItemList.jsx"

export default function ItemListContainer(props) {
    return (
        <div className="item-list-container">
            <ItemList greeting="¡Bienvenidos!"/>
        </div>
    )
}