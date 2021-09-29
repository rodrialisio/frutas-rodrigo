import React from "react"

export default function Loading(props) {

    return (
        <div style={{textAlign:"center", color: "white", margin: "20px", position: "absolute"}}>
            {props.tipo === undefined? <h3>Loading...</h3> : <div>{}</div> }
        </div>
    )
}