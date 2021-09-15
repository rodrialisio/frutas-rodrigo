import React from "react";
import { useState,useEffect} from "react";
import { useParams } from "react-router";
import { getData } from "../firebase";
import { collection,getDocs,query,where} from "@firebase/firestore";
import Item from "./Item";


export default function PremiumList() {
    const [frutas,setFrutas]= useState([])
    const params = useParams()

    useEffect(()=> {
        const getFrutas = async ()=> {
            const frutasCollection= collection(getData(),"productos")
            const frutasElegidas= query(frutasCollection, where("categoria","==",params.categoria))
            console.log("elegidas",frutasElegidas)
            const frutaSnapshot= await getDocs(frutasElegidas)
            console.log("snap",frutaSnapshot)
            setFrutas(frutaSnapshot.docs.map(doc => doc.data()))
        }
        getFrutas()
        console.log("frutas",frutas)
      },[])

    return (
        <>
            <div className="item-list row" style={{backgroundImage: "url(/images/madera.jpg)"}}>
                <h3>Frutas Premium</h3>
                {frutas.map((cadaUno) => (
                    <div className="col-sm-6 col-md-4">
                        <Item {...cadaUno} />
                    </div>
                ))}
            </div>
        </>        
    )
}