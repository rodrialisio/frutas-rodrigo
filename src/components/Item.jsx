import "./Item.css"
import React from "react"
import { Link } from "react-router-dom"

export default function Item(props) {
    return (
        <div className="item" style={{backgroundImage: `url(${props.fotoB})`}}>
            <Link to={`/item/${props.tipo}`} className="item-info" >
                <div className="item-text-wrapper">
                    <h1>{props.tipo}</h1>
                </div>
            </Link>
        </div>       
    )
}