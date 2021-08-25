import "./ItemList.css"
import React, { useState,useEffect } from "react"
import Item from "./Item.jsx"
import {data} from "./Data.jsx"

export default function ItemList() {
    const [products, setProducts]= useState([])

    useEffect(()=> {
        new Promise ((resolve,reject)=> {
            setTimeout(()=> resolve(data),2000)
        }).then((result) => {
            setProducts(result)
        })
    },[])

    return (
        <>
            <div className="item-list row">
                <h3>Nuestras frutas:</h3>
                {products.map((cadaUno) => (
                    <div className="col-sm-6 col-md-4">
                        <Item {...cadaUno} />
                    </div>
                ))}
            </div>
        </>        
    )
}