import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLemon} from "@fortawesome/free-solid-svg-icons"
import "./NavBar.css"
import CartWidget from "./CartWidget"

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-brand-container">
                <div className="navbar-logo">
                    <img className="logo" src="./images/logo.png" alt="" />
                </div>
            </div>
            <div className="navbar-menu-container">
                <div>
                    <a href="#" className="navbar-home" onClick={() => alert("hiciste click en HOME")}>HOME</a>
                </div>
                <div>
                    <a href="#" className="navbar-promos" onClick={() => alert("hiciste click en PROMOS")}>PROMOS</a>
                </div>
                <div>
                    <a href="#" className="navbar-contacto" onClick={() => alert("hiciste click en CONTACTO")}>CONTACTO</a>
                </div>
                <div>
                    <a className="cart-widget-container" >
                        <CartWidget id="cart"/>
                    </a>
                </div>  
            </div>
        </div>       
    )
}
