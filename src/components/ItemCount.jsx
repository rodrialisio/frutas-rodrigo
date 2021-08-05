import React, {useState, useEffect} from "react"
import "./ItemCount.css"
import NavBar from "./NavBar"

export default function ItemCount() {
    const [count, setCount] = useState(0)

    function addToCart() {
        console.log(count)
        setCount(0)
    }
    
    return(
        <div className="item-counter-container">
            <div class="count-total">{count}</div>
            <div className="counter-buttons">
                <button type="button" class="btn btn-primary" onClick={()=> setCount(count+1)}>+</button>
                <button type="button" class="btn btn-primary" onClick={()=> setCount(count == 0? count -0 : count-1)}>-</button>
            </div>
            <div className="add-cart">
                <button type="button" class="btn btn-secondary" onClick={()=> addToCart(0)}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}