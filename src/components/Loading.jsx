import { directive } from "@babel/types"
import React from "react"

export default function Loading(props) {

    return (
        <div style={{textAlign:"center"}}>
            {props.tipo === undefined? <h4>Loading...</h4> : <div>{}</div> }
        </div>
    )
}