import "./Item.css"
import React from "react"
import ItemCount from "./ItemCount.jsx"

export default function Item(props) {
    return (
        <div className="item">
            <div className="item-data-count">
                <div className="item-data">
                    <h3>{props.tipo}</h3>
                    <h3>${props.precio} x kg</h3>
                </div>
                <ItemCount/>
            </div>
            <img src={props.foto} alt="no picture"/>  
        </div>       
    )
}