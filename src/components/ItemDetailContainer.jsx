import "./ItemDetailContainer.css"
import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail.jsx"


export default function ItemDetailContainer(props) {
    const [oferta, setOferta]= useState([])

    const getOferta = async ()=> {
        try {
            const respuesta= await setTimeout(()=> {
                setOferta({
                    foto: "./images/kiwis.png",
                    tipo:"Kiwis",
                    precio: 190
                })
            },2000)
    
        } catch(error) {
            setOferta([])
        }
    }

    console.log(oferta)

    useEffect(()=> {
        getOferta()
    },[])

    return (
        <div className="item-detail-container"  >
            <ItemDetail {...oferta} />
        </div>
    )
}