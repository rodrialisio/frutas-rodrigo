import "./ItemListContainer.css"
import React from "react"

export default function ItemListContainer(props) {
    return (
        <div className="item-list-container">
            {props.children}
        </div>
    )
}