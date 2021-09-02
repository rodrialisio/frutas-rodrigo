import "./CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useContext} from "react"
import { CartContext } from "./context/CartContext"

export default function CartWidget() {
    const {compra} = useContext(CartContext)

    return (
        <Link to="/cart" className="badge bg-primary" style={{display: compra.length > 0 ? "block" : "none"}} >
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className="badge bg-secondary">{compra.length}</span>
        </Link>
    )
}