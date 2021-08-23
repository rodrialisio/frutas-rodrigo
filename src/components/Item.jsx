import "./Item.css"
import React from "react"
import { Link } from "react-router-dom"

export default function Item(props) {
    return (
        <div className="item">
            <div className="item-background-wrapper">
                <img className="item-background" src={props.fotoB}/>
            </div>
            <Link to={`/item/${props.tipo}`} className="item-info">
                <div className="item-text-wrapper">
                    <h4>{props.tipo}</h4>
                </div>
            </Link>
        </div>       
    )
}