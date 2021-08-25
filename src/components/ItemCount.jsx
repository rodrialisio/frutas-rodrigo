import React, {useState, useEffect} from "react"
import "./ItemCount.css"
import { Link } from "react-router-dom" 

export default function ItemCount(props) {
    const [count, setCount] = useState(0)
    const [displayBoton, setDisplayBoton] = useState("none")
    
    useEffect(()=> {
        setCount(0)
    },[])
    
    return(
        <>
            <div className="item-counter-container" style= {{display: displayBoton=="none"? "block" : "none"}}>
                <div className="count-total">{count} Kg</div>
                <div className="counter-buttons">
                    <button type="button" className="btn btn-secondary" onClick={()=> setCount(count+0.5)}><h4>+</h4></button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCount(count === 0? count -0 : count-0.5)}><h4>-</h4></button>
                </div>
                <div className="add-cart" >
                    <button to="/" type="button" className="btn btn-secondary" onClick={() => {
                        props.onAdd(count)
                        setCount(0)
                        setDisplayBoton("block")
                    }}>
                        <h6>Añadir al carrito</h6>
                    </button>
                </div>
            </div>
            <Link to="/cart" className="item-button-container" style={{display:displayBoton}}>
                <div className="add-cart">
                    <button type="button" className="btn btn-secondary">
                        <h5>Terminar mi compra</h5>
                    </button>
                </div>
            </Link>
        </>
    )
}