import "./Cart.css"
import React, { useContext } from "react"
import { CartContext } from "./context/CartContext"

export default function Cart() {
const {compra,removeItem,clear} = useContext(CartContext)

    var total= compra.reduce((suma, item)=> {
        var totalizador = suma+item.total
        return totalizador
    },0)

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Carrito de compras</h2>
                <h5>Total: ${total} </h5>
                <div className="button-wrapper">
                    <a className="btn btn-primary" onClick={()=> clear()} >Vaciar carrito</a>
                </div>
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
            
        </div>
    )
}

