import "./ItemList.css"
import React, { useState,useEffect } from "react"
import Item from "./Item.jsx"

export default function ItemList(props) {
    const [products, setProducts]= useState([])

    useEffect(()=> {
        new Promise ((resolve,reject)=> {
            const data= [{
                foto: "./images/manzanas.jpg",
                tipo: "Manzanas",
                precio: 100
            },{
                foto:"./images/naranjas.jpg",
                tipo: "Naranja",
                precio: 80
            },{
                foto:"./images/bananas.jpg",
                tipo: "Bananas",
                precio: 130
            },{
                foto:"./images/peras.jpg",
                tipo: "Peras",
                precio: 70
            }]

            setTimeout(()=> resolve(data),2000)
        }).then((result) => {
            setProducts(result)
        })
    },[])
    
    return (
        <>
            <div class="alert alert-success" role="alert">
                {props.greeting}
            </div>
            <div className="item-list">
                {products.map((cadaUno) => (
                    <Item {...cadaUno} />
                ))}
            </div>
        </>        
    )
}