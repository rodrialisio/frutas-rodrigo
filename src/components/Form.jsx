import React from "react";
import "./Form.css"
import { useContext,useState } from "react";
import { CartContext } from "./context/CartContext";
import { getData} from "../firebase";
import { collection,Timestamp, addDoc} from "@firebase/firestore";

export default function Form(props) {
    const [orderId, setOrderId]= useState("")
    const [error, setError]= useState("")
    const [loading,setLoading]= useState(false)
    const [nombre,setNombre]= useState("")
    const [apellido,setApellido]= useState("")
    const [telefono,setTelefono]= useState("")
    const [email, setEmail]= useState("")
    const [emailCheck, setEmailCheck]= useState("")
    const {compra,setCompra, setFormulario} = useContext(CartContext)

    async function comprar() {
        if (email===emailCheck && nombre && apellido && email && emailCheck && telefono) {
            setLoading(true)
            const newOrder = {
                buyer: {
                    name: nombre,
                    lastName: apellido,
                    phone: telefono,
                    email: email
                },
                items: compra.map(item=> ({
                        tipo: item.tipo,
                        kilos: item.cantidad,
                        costo: item.total
                    }) 
                ),
                fecha: Timestamp.fromDate(new Date()),
                "total": props.total
            }
            const orders = await addDoc(collection(getData(),"ordenes"),newOrder)
            .then((response) => {
                console.log(response.id)
                setOrderId(response.id)
                alert(`Tu orden fue enviada exitosamente! \n Código de compra: ${response.id} \n Te enviaremos un e-mail de confirmación con los detalles de tu pedido.`)
                setCompra([])
            })
            .catch((err) => setError(err))
            .finally(() => {
                setLoading(false)
                setFormulario("none")
                localStorage.clear()
                localStorage.setItem("orden de "+ newOrder.buyer.name+" "+newOrder.buyer.lastName, JSON.stringify(newOrder))
            })
        } else {
            alert("Por favor completa correctamente todos los campos del formulario")
        }
    }

    return (
        <div>
            <div className="loading" style={{display: loading? "block" : "none"}}><h3>Loading...</h3></div>
            <div className="form row" style={{display: loading? "none" : "flex"}}>
                <h2>Completa tus datos:</h2>
                <div className="col-6">
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Nombre" onChange={(e)=> setNombre(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Apellido" onChange={(e)=> setApellido(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Confirma tu E-mail" onChange={(e)=> setEmailCheck(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" placeholder="Teléfono" onChange={(e)=> setTelefono(e.target.value)}/>
                    </div>
                    <button className="btn btn-success" onClick={()=> comprar()}><h6>¡Enviar pedido!</h6></button>
                </div>
            </div>
        </div>
    )
}