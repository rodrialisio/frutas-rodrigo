import React, {useState, useEffect} from "react"
import "./SandBox.css"

export default function SandBox(){
    const [characters, setCharacters] = useState([])
    
    const getData = async ()=> {
        try {
            const response= await fetch("https://pokeapi.co/api/v2/pokemon", {
                method: "GET"
            })
    
            const data = await response.json()
            console.log(data)
            setCharacters(data.results)
        } catch(error) {
            setCharacters([])
        }
    }

    useEffect(()=> {
        getData()
    },[])
    
    return (
        <div className="sandbox-wrapper">
            {characters.map((eachCharacter) => <>
                <div>{eachCharacter.name}</div>
            </>)}
        </div>   
    )
}