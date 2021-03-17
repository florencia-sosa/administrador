import React, { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const RegistrarUsuario = (e) => {
        e.preventDefault()
        try {
            auth.createUserWithEmailAndPassword(email, password)
            alert('usuario registrado con éxito')
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className=" row  justify-content-center">
            <h1 className="col-12 text-center my-3">Bienvenido!</h1>
            <div className="col-5">
                <form onSubmit={RegistrarUsuario}
                    className='form-group' >
                    <input
                        onChange={(e) => { setEmail(e.target.value) }}
                        className='form-control my-3'
                        placeholder='Introduce tu Email'
                        type="email" />
                    <input
                        className='form-control my-3'
                        placeholder='Introduce tu Contraseña'
                        type="password" />
                    <input
                        onChange={(e) => { setPassword(e.target.value) }}
                        className='btn btn-dark btn-block my-3'
                        type="submit"
                        value="Registrar" />
                </form>
            </div>

        </div>
    )
}

export default Login