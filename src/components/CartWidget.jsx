import "./CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function CartWidget() {

    return (
        <Link to="/cart" className="badge bg-secondary">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className="badge bg-secondary"></span>
        </Link>
    )
}