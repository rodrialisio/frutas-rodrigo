import "./ItemList.css"
import React from "react"

export default function ItemList(props) {
    return (
        <div class="item-list">
            <div class="alert alert-primary" role="alert">
                {props.greeting}
                {props.children}
            </div>
        </div>
    )
}