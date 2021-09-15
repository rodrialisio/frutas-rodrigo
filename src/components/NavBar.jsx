import { Link } from "react-router-dom"
import "./NavBar.css"
import CartWidget from "./CartWidget"

export default function NavBar() {

    const premium= {
        categoria: "premium"
    }

    return (
        <div className="navbar-container">
            <div className="navbar-brand-container">
                <Link to="/" className="navbar-logo">
                    <img className="logo" src="/images/logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-menu-container">
                <div>
                    <Link to="/category/Home" className="navbar-home">HOME</Link>
                </div>
                <div>
                    <Link to="/category/Frutas" className="navbar-promos">FRUTAS</Link>
                </div>
                <div>
                    <Link to={`/premium/${premium.categoria}`} className="navbar-contacto">PREMUIM</Link>
                </div>
                <div>
                    <div className="cart-widget-container">
                        <CartWidget id="cart"/>
                    </div>
                </div>  
            </div>
        </div>       
    )
}
