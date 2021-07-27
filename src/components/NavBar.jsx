import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLemon} from "@fortawesome/free-solid-svg-icons"

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-brand-container">
                <div className="navbar-brand-logo" >
                    <FontAwesomeIcon icon={faLemon}></FontAwesomeIcon>
                </div>
                <div className="navbar-brand-name">
                    frutas rodrigo
                </div>
            </div>
            <a href="#" className="navbar-home" onClick={() => alert("hiciste click en HOME")}>HOME</a>
            <a href="#" className="navbar-promos" onClick={() => alert("hiciste click en PROMOS")}>PROMOS</a>
            <a href="#" className="navbar-contacto" onClick={() => alert("hiciste click en CONTACTO")}>CONTACTO</a>
        </div>       
    )
}

export default NavBar