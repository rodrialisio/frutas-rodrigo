import React, {useState, useEffect} from "react"
import "./ItemCount.css"

export default function ItemCount() {
    const [count, setCount] = useState(0)

    function addToCart() {
        console.log(count)
        setCount(0)
    }
    
    return(
        <div className="item-counter-container">
            <div class="count-total">{count} Kg</div>
            <div className="counter-buttons">
                <button type="button" class="btn btn-secondary" onClick={()=> setCount(count+0.5)}>+</button>
                <button type="button" class="btn btn-secondary" onClick={()=> setCount(count == 0? count -0 : count-0.5)}>-</button>
            </div>
            <div className="add-cart">
                <button type="button" class="btn btn-secondary" onClick={()=> addToCart(0)}>
                    Añadir al carrito
                </button>
            </div>
        </div>
    )
}