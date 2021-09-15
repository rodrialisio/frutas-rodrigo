import "./Cart.css"
import React, { useContext, useState} from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import { getData} from "../firebase";
import { collection,Timestamp, addDoc} from "@firebase/firestore";

export default function Cart() {
    const [orderId, setOrderId]= useState("")
    const [error, setError]= useState("")
    const [loading,setLoading]= useState(false)
    const {compra,setCompra,removeItem,clear} = useContext(CartContext)

    var total= compra.reduce((suma, item)=> {
        var totalizador = suma+item.total
        return totalizador
    },0)

    async function comprar() {
        setLoading(true)
        const newOrder = {
            buyer: {
                name: prompt("Nombre completo"),
                phone: prompt("Teléfono:"),
                email: prompt("E-mail")
            },
            items: compra.map(item=> ({
                    tipo: item.tipo,
                    kilos: item.cantidad,
                    costo: item.total
                }) 
            ),
            fecha: Timestamp.fromDate(new Date()),
            "total": total
        }
        localStorage.setItem("orden de"+ newOrder.buyer.name, JSON.stringify(newOrder))
        const orders = await addDoc(collection(getData(),"ordenes"),newOrder)
        .then(({id}) => {
            setOrderId(id)
            setCompra([])
        })
        .catch((err) => setError(err))
        .finally(() => {setLoading(false)
        })
        alert("Tu orden fue enviada exitosamente! Te enviaremos un e-mail de confirmación con los detalles de tu compra.")
    }

    function carritoLleno() {
        if (compra.length > 0) {
            return  (
                <div className="boton-comprar">
                    <button type="button" className="btn btn-success" onClick={()=> comprar()} >
                        <h6>Ordenar</h6>
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
        <div className="cart">
            <div style={{textAlign:"center"}}>
                {loading? <h4>Loading...</h4> : <div>{}</div> }
            </div>
            <div className="cart-header" style={{display: loading? "none" : "block"}} >
                <h2>Carrito de compras</h2>
                <h5>Total: ${total} </h5>
                {carritoLleno()}
                {volver()}
            </div>
            <div className="cart-products" style={{display: loading? "none" : "flex"}} >
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
            <div className="button-wrapper" style={{display: loading? "none" : "block"}}>
                <a className="btn btn-primary" onClick={()=> clear()} style={{display: compra.length > 0 ? "block" : "none"}}>Vaciar carrito</a>
            </div>
        </div>
    )
}

