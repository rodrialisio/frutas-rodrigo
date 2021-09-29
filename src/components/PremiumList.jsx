import React from "react";
import { useState,useEffect} from "react";
import { useParams } from "react-router";
import { getData } from "../firebase";
import { collection,getDocs,query,where} from "@firebase/firestore";
import Item from "./Item";
import "./PremiumList.css"

export default function PremiumList() {
    const [frutas,setFrutas]= useState([])
    const params = useParams()
    const [loading, setLoading]= useState(true)

    useEffect(()=> {
        setLoading(true)
        const getFrutas = async ()=> {
            const frutasCollection= collection(getData(),"productos")
            const frutasElegidas= query(frutasCollection, where("categoria","==",params.categoria))
            const frutaSnapshot= await getDocs(frutasElegidas)
            setFrutas(frutaSnapshot.docs.map(doc => doc.data()))
            setLoading(false)
        }
        getFrutas()
      },[])

    return (
        <div className= "premium-list-wrapper" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/frutas-rodrigo.appspot.com/o/madera.jpg?alt=media&token=15b35702-60bb-448e-bade-0ee31fa7cc83)"}}>
            <div className="item-list row">
                <h3>{loading? "Loading...":"Frutas Premium:"}</h3>
                {frutas.map((cadaUno) => (
                    <div className="col-sm-6 col-md-4">
                        <Item {...cadaUno} />
                    </div>
                ))}
            </div>
        </div>        
    )
}