import "./ItemDetailContainer.css"
import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router"
import Loading from "./Loading"
import {collection, getDocs} from "firebase/firestore"
import { query, where } from "@firebase/firestore"
import { getData } from "../firebase";
import { Link } from "react-router-dom"


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
            <div className="item-detail-wrapper" style={{backgroundImage: "url(/images/madera.jpg)"}} >
                <div>
                    <Loading {...fruta} />
                </div>
                <div className="item-detail-container" style={{display: fruta? "block" : "none"}} >
                    <ItemDetail {...fruta}/>
                </div>
                <div className="no-product-alert" style={{display: fruta? "none" : "block", textAlign: "center"}}>
                    <h1>El producto "{params.tipo}" no existe</h1>
                    <Link to="/category/:Frutas" type="button" className="btn btn-secondary">
                        <h6>Volver a Frutas</h6>
                    </Link>
                </div>
            </div>
        </>  
    )
}