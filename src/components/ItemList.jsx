import "./ItemList.css"
import React, { useState,useEffect } from "react"
import Item from "./Item.jsx"
import ItemDetailContainer from "./ItemDetailContainer.jsx"

export default function ItemList(props) {
    const [products, setProducts]= useState([])

    useEffect(()=> {
        new Promise ((resolve,reject)=> {
            const data= [{
                foto: "./images/manzanas.png",
                tipo: "Manzanas",
                precio: 100
            },{
                foto:"./images/naranjas.png",
                tipo: "Naranjas",
                precio: 80
            },{
                foto:"./images/bananas.png",
                tipo: "Bananas",
                precio: 130
            },{
                foto:"./images/peras.png",
                tipo: "Peras",
                precio: 70
            },{
                foto:"./images/frutillas.png",
                tipo: "Frutillas",
                precio: 250
            },{
                foto:"./images/duraznos.png",
                tipo: "Duraznos",
                precio: 200
            }]

            setTimeout(()=> resolve(data),2000)
        }).then((result) => {
            setProducts(result)
        })
    },[])

    return (
        <>
            <div className="oferta">
                <h1>¡OFERTA!</h1>
                <ItemDetailContainer/>
            </div>
            <div className="item-list row">
                <h3>Nuestras frutas:</h3>
                {products.map((cadaUno) => (
                    <div className="col">
                        <Item {...cadaUno} />
                    </div>
                ))}
            </div>
        </>        
    )
}