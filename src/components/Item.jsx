import "./Item.css"
import React from "react"
import ItemCount from "./ItemCount.jsx"
import ItemDetail from "./ItemDetail"

export default function Item(props) {

    return (
        <div className="item">
            <div className="item-detail-count">
                <ItemDetail foto={props.foto} tipo={props.tipo} precio={props.precio} />
                <ItemCount/>
            </div>
        </div>       
    )
}