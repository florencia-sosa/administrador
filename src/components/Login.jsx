import React from "react";

const Login = () => {
    return (
        <div className=" row  justify-content-center">
            <h1 className="col-12 text-center my-3">Bienvenido!</h1>
            <div className="col-5">
                <form className='form-group' action="">
                    <input
                        className='form-control my-3'
                        placeholder='Introduce tu Email'
                        type="text" />
                    <input
                        className='form-control my-3'
                        placeholder='Introduce tu Contraseña'
                        type="password" />
                    <input
                        className='btn btn-dark btn-block my-3'
                        type="submit"
                        value="Iniciar sesión" />
                </form>
            </div>

        </div>
    )
}

export default Login