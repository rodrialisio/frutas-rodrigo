import "./Cart.css"
import Form from "./Form"
import React, { useContext, useEffect} from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated } from "react-spring"

export default function Cart() {
    const {compra,formulario,setFormulario,removeItem,clear} = useContext(CartContext)
    const entrada = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    useEffect(()=> {   
        setFormulario("none")
    },[])
    
    var total= compra.reduce((suma, item)=> {
        var totalizador = suma+item.total
        return totalizador
    },0)

    function carritoLleno() {
        if (compra.length > 0) {
            return  (
                <div className="boton-comprar">
                    <button type="button" className="btn btn-success" onClick={()=> setFormulario("block")}>
                        <h6>Confirmar compra</h6>
                    </button>
                </div>
            )
        } else return <h6>No hay productos en tu carrito...</h6>
    }

    function volver() {
        return  (
            <div className="carrito-vacio">
                <Link to="/category/:Frutas" type="button" className="btn btn-secondary">
                    <h6>Volver a Frutas</h6>
                </Link>
            </div>
        )
    }

    return (
            <div className="cart-wrapper" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/frutas-rodrigo.appspot.com/o/madera.jpg?alt=media&token=15b35702-60bb-448e-bade-0ee31fa7cc83)"}} >
                <animated.div style={entrada}>
                    <div className="form-container" style= {{display: formulario}} >
                        <Form total={total}/>
                    </div>
                    <div className="cart" >
                        <div className="cart-header">
                            <h2><FontAwesomeIcon icon={faShoppingCart}/>   Carrito de compras</h2>
                            <h5>Total: ${total} </h5>
                            {carritoLleno()}
                            {volver()}
                        </div>
                        <div className="cart-products">
                            {compra.map((item)=> (
                                <div className="card" style={{width: "10rem", margin:"20px", backgroundImage: `url(${item.foto})`}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.tipo}</h5>
                                        <p className="card-text">{item.cantidad}Kg</p>
                                        <p className="card-text">${item.total}</p>
                                        <a href="#" className="btn btn-primary" onClick={()=> removeItem(item.tipo)}>Quitar del carrito</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="button-wrapper">
                            <a className="btn btn-primary" onClick={()=> clear()} style={{display: compra.length > 0 ? "block" : "none"}}>Vaciar carrito</a>
                        </div>
                    </div>
                </animated.div>
            </div>
    )
}

