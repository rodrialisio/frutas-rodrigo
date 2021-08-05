import "./CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import React, { Component,useState,useEffect } from "react"

export default function CartWidget() {
    const [countCarrito, setCount] = useState(0)

    return (
        <a href="#" class="badge bg-secondary" onClick={() => alert("hiciste click en el carrito")}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span class="badge bg-secondary">{countCarrito}</span>
        </a>
    )
}