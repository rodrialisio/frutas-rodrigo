import "./Cart.css"
import React, { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons"

export default function Cart() {
    const [order,setOrder]= useState([])
    const {compra,removeItem,clear} = useContext(CartContext)

    var total= compra.reduce((suma, item)=> {
        var totalizador = suma+item.total
        return totalizador
    },0)

    function comprar() {}

    function carritoLleno() {
        if (compra.length > 0) {
            return  (
                <div className="boton-comprar">
                    <button type="button" className="btn btn-success" onClick={comprar()} >
                        <h6>Comprar!</h6>
                    </button>
                </div>
            )
        } else return compra.length === 0? <h6>No hay productos en tu carrito...</h6> : <></>
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
        <div className="cart">
            <div className="cart-header">
                <h2>Carrito de compras</h2>
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
    )
}

