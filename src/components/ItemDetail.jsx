import "./ItemDetail.css"
import React from "react"

export default function ItemDetail(props) {
    
    return (
        <div className="item-detail">
            <div className="item-background-wrapper">
                <img className="item-background" src={props.foto}/>
            </div>
            <div className="item-info-wrapper">
                <h4>{props.tipo}</h4>
                <h4>${props.precio} x kg</h4>
            </div>
        </div>
    )
}