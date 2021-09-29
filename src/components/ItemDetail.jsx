import "./ItemDetail.css"
import React from "react"
import ItemCount from "./ItemCount"
import { useSpring, animated } from "react-spring"

export default function ItemDetail(props) {
    const entrada = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <animated.div style={entrada}>
            <div className="item-detail">
                <div className="item-background-wrapper">
                    <img className="item-background" src={props.fotoB} alt="..."/> 
                </div>
                <div className="item-text-wrapper">
                    <h1>{props.tipo}</h1>
                    <h2>Origen:{props.origen}</h2>
                    <h2>${props.precio} x kg</h2>
                    <h2>(stock: {props.stock}kg)</h2>
                </div>
                <ItemCount {...props}/>
            </div>
        </animated.div>       
    )
}