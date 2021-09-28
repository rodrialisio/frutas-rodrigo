import React from "react"

export default function Loading(props) {

    return (
        <div style={{textAlign:"center", color: "white", margin: "20px"}}>
            {props.tipo === undefined? <h4>Loading...</h4> : <div>{}</div> }
        </div>
    )
}