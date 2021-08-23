import "./ItemDetail.css"
import React from "react"
import ItemCount from "./ItemCount"

export default function ItemDetail(props) {

    return (
        <div className="item-detail">
            <div className="item-background-wrapper">
                <img className="item-background" src={props.fotoB} alt="..."/> 
            </div>
            <div className="item-text-wrapper">
                <h1>{props.tipo}</h1>
                <h2>Origen:{props.origen}</h2>
                <h2>${props.precio} x kg</h2>
            </div>
            <ItemCount/>
        </div>       
    )
}