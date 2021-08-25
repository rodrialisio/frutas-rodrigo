import "./CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"

export default function CartWidget() {
    const [countCarrito, setCount] = useState(0)

    useEffect(()=> {
        setCount(0)
    },[])

    return (
        <Link to="/cart" className="badge bg-secondary">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className="badge bg-secondary">{countCarrito}</span>
        </Link>
    )
}