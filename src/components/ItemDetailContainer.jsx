import "./ItemDetailContainer.css"
import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router"
import {data} from "./Data.jsx"


export default function ItemDetailContainer() {
    const params = useParams()
    const [item, setItem]= useState([])

    const getItem = async ()=> {
        try {
            const respuesta= await setTimeout(()=>{
                setItem(data.find(cadaFruta => cadaFruta.tipo === params.tipo))
            },2000)
        } catch(error) {
            setItem([])
        }
    }

    useEffect(()=> {
        getItem()
    },[])

    return (
        <div className="item-detail-container">
            <ItemDetail {...item} />
        </div>
    )
}