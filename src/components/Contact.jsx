import "./Contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {useSpring,animated} from "react-spring"

export default function Contact() {
    const entrada = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
            <div className="contact-wrapper" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/frutas-rodrigo.appspot.com/o/madera.jpg?alt=media&token=15b35702-60bb-448e-bade-0ee31fa7cc83)"}}>
                <animated.div style={entrada}>
                    <div className="contact">
                        <animated.div style={entrada} className="image-wrapper">
                            <img src="https://firebasestorage.googleapis.com/v0/b/frutas-rodrigo.appspot.com/o/frutas.png?alt=media&token=f4048a90-f10d-4b0a-b328-e00f0605ce0e"/>
                        </animated.div>
                        <div className="info">
                            <h3>Frutas Rodrigo S.A.</h3>
                            <h4>Av. Rafael Gómez 1240, Córdoba Capital, Argentina.</h4>
                            <h4><FontAwesomeIcon icon={faWhatsapp}/>   +54 9 3513 351351</h4>
                            <h4><FontAwesomeIcon icon={faEnvelope}/>   info@frutasrodrigo.com</h4>
                            <div className="icons">
                                <FontAwesomeIcon icon={faFacebook}/>
                                <FontAwesomeIcon icon={faInstagram}/>
                                <FontAwesomeIcon icon={faTiktok}/>
                                <h6>frutasrodrigo</h6>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
    )
}