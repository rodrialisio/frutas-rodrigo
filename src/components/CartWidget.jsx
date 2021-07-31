import "./CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import React, { Component } from "react"

export default class CartWidget extends React.Component {
    render() {
        return (
            <a href="#" class="badge bg-secondary" onClick={() => alert("hiciste click en el carrito")}>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </a>
        )
    }
}