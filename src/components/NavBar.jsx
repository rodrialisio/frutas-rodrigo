import { Link } from "react-router-dom"
import "./NavBar.css"
import CartWidget from "./CartWidget"

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-brand-container">
                <Link to="/" className="navbar-logo">
                    <img className="logo" src="./images/logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-menu-container">
                <div>
                    <Link to="/category/:Home" className="navbar-home">HOME</Link>
                </div>
                <div>
                    <Link to="/category/:Frutas" className="navbar-promos">FRUTAS</Link>
                </div>
                <div>
                    <Link to="/category/:Contacto" className="navbar-contacto">CONTACTO</Link>
                </div>
                <div>
                    <a className="cart-widget-container">
                        <CartWidget id="cart"/>
                    </a>
                </div>  
            </div>
        </div>       
    )
}
