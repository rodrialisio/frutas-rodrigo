import "./Contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    return (
        <div className="contact-wrapper" style={{backgroundImage: "url(/images/madera.jpg)"}}>
            <div className="contact">
                <div className="image-wrapper">
                    <img src="https://firebasestorage.googleapis.com/v0/b/frutas-rodrigo.appspot.com/o/frutas.png?alt=media&token=f4048a90-f10d-4b0a-b328-e00f0605ce0e"/>
                </div>
                <div className="info">
                    <h3>Frutas Rodrigo S.A.</h3>
                    <h4>Av. Rafael Gómez 1240, Córdoba Capital, Argentina.</h4>
                    <h4><FontAwesomeIcon icon={faWhatsapp}/>   +54 9 3513 431454</h4>
                    <h4><FontAwesomeIcon icon={faEnvelope}/>   info@frutasrodrigo.com</h4>
                    <div className="icons">
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faTiktok}/>
                        <h6>frutasrodrigo</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}