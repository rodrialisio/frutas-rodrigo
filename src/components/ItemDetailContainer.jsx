import "./ItemDetailContainer.css"
import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail.jsx"


export default function ItemDetailContainer(props) {
    const [item, setItem]= useState([])

    const getItem = async ()=> {
        try {
            const respuesta= await setTimeout(()=> {
                setItem({
                    foto: "./images/kiwis.png",
                    tipo:"Kiwis",
                    precio: 190
                })
            },2000)
    
        } catch(error) {
            setItem([])
        }
    }

    console.log(item)

    useEffect(()=> {
        getItem()
    },[])

    return (
        <div className="item-detail-container"  >
            <ItemDetail {...item} />
        </div>
    )
}