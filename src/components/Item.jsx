import "./Item.css"
import React from "react"
import { Link } from "react-router-dom"
import {useSpring,animated} from "react-spring"

export default function Item(props) {
    const entrada = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <animated.div style={entrada}>
            <div className="item" style={{backgroundImage: `url(${props.fotoB})`, entrada}}>
                <Link to={`/item/${props.tipo}`} className="item-info" >
                    <div className="item-text-wrapper">
                        <h1>{props.tipo}</h1>
                    </div>
                </Link>
            </div>
        </animated.div>
    )
}