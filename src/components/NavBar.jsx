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
                    <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/frutas-rodrigo.appspot.com/o/logo.png?alt=media&token=c325dd1e-a4a0-4ef7-8199-a4f1e497a395" alt="" />
                </Link>
            </div>
            <div className="navbar-menu-container">
                <div>
                    <Link to="/category/Home" className="navbar-item">HOME</Link>
                </div>
                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    FRUTAS
                </div>
                <div className="dropdown-menu navbar-item" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/category/Frutas" className="navbar-promos"><li><a class="dropdown-item" href="#">TODAS</a></li></Link>
                    <Link to={`/premium/${premium.categoria}`}><li><a class="dropdown-item" href="#">PREMIUM</a></li></Link>
                </div>
                <div>
                    <Link to="/contacto" className="navbar-item">CONTACTO</Link>
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
