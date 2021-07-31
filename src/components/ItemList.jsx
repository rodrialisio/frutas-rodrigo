import "./ItemList.css"
import React from "react"

export default class ItemList extends React.Component {
    render() {
        return (
            <div class="alert alert-primary" role="alert">
                {this.props.greeting}
            </div>
        )
    }
}