import "./ItemDetail.css"
import React from "react"
import ItemCount from "./ItemCount"
import { useState } from "react"

export default function ItemDetail(props) {
    const [valor, setValor]= useState(0)
    
    const onAdd= (count)=> {
        setValor(count)
        console.log(count)
    }

    return (
        <div className="item-detail">
            <div className="item-background-wrapper">
                <img className="item-background" src={props.fotoB} alt="..."/> 
            </div>
            <div className="item-text-wrapper">
                <h1>{props.tipo}</h1>
                <h2>Origen:{props.origen}</h2>
                <h2>${props.precio} x kg</h2>
                <h2>(stock: {props.stock}kg)</h2>
            </div>
            <ItemCount onAdd={onAdd}/>
        </div>       
    )
}