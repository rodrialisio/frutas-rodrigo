import "./ItemList.css"
import React, { useState,useEffect} from "react"
import Item from "./Item.jsx"
import { getData } from "../firebase";
import { collection,getDocs,} from "@firebase/firestore";

export default function ItemList() {
    const [frutas, setFrutas]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=> {
        setLoading(true)
        const getFrutas = async ()=> {
            const frutaCollection= collection(getData(),"productos")
            const frutaSnapshot= await getDocs(frutaCollection)
            const frutaList = frutaSnapshot.docs.map(doc =>  ({id: doc.id, ...doc.data()}))
            setFrutas(frutaList)
            setLoading(false)
          }
          getFrutas()
        },[])

    return (
        <div>
            <div className="item-list row">
                <h3>{loading? "Loading...":"Nuestras frutas:"}</h3>
                {frutas.map((cadaUno) => (
                    <div className="col-sm-6 col-md-4">
                        <Item {...cadaUno} />
                    </div>
                ))}
            </div>
        </div>        
    )
}