import React from"react"
import "./HomeInfo.css"
import { Link } from "react-router-dom"

export default function HomeInfo() {
    return (
        <div className="card">
            <Link to="/item-list" className="card-body">
                <h1 className="card-title">¡Bienvenidos a nuestra tienda!</h1>
                <h2 className="card-text">Esperamos tu pedido...</h2>
            </Link>
      </div>
    )
}