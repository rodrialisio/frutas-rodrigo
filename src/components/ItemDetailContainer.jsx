import "./ItemDetailContainer.css"
import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router"
import Loading from "./Loading"
import {collection, getDocs} from "firebase/firestore"
import { query, where } from "@firebase/firestore"
import { getData } from "../firebase";


export default function ItemDetailContainer() {
    const params = useParams()
    const [fruta, setFruta]= useState([])

    useEffect(()=> {
        const getFruta = async ()=> {
            const frutaCollection= collection(getData(),"productos")
            const frutaElegida= query(frutaCollection, where("tipo","==",params.tipo))
            const frutaSnapshot= await getDocs(frutaElegida)
            setFruta(frutaSnapshot.docs.map(doc => doc.data())[0])
        }
        getFruta()
      },[])

    return (
        <>
            <div className="item-detail-container">
                <ItemDetail {...fruta} />
            </div>
            <div>
                <Loading {...fruta} />
            </div>
        </>  
    )
}