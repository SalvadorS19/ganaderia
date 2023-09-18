'use client'
import './login.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from '@nextui-org/link';
import { useState } from 'react';

export default function Login() {

    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    function LoginForm() {
        return (
            <section className="login-main">
                <div className="login-container">
                    <h1 className="mb-5 text-xl font-bold text-center">Bienvenido</h1>
                    <form className="login-form">
                        <Input 
                            type="text" 
                            label="Usuario" 
                            required
                        ></Input>
                        <Input 
                            type="password" 
                            label="Contraseña" 
                            required
                        ></Input>
                        <Checkbox>Recordarme</Checkbox>
                        <Button color="primary">Ingresar</Button>
                        <p>
                            ¿No tienes cuenta? 
                            <Link 
                                className='cursor-pointer ml-3' 
                                onClick={toggleForm}
                            >Registrate</Link> 
                        </p>
                    </form>
                </div>
            </section>
        );
    }

    function RegisterForm() {
        return (
            <section className="register-main">
                <div className="register-container">
                    <h1 className="mb-5 text-xl font-bold text-center m-5">Registro</h1>
                    <form className="register-form">
                        <Input 
                            type="text" 
                            label="Nombres" 
                            required
                        ></Input>
                        <Input 
                            type="text" 
                            label="Apellidos" 
                            required
                        ></Input>
                        <Input 
                            type="text" 
                            label="Correo" 
                            required
                        ></Input>
                        <Input 
                            type="text" 
                            label="Documento" 
                            required
                        ></Input>
                        <Input 
                            type="text" 
                            label="Contraseña" 
                            required
                        ></Input>
                        <Input 
                            type="text" 
                            label="Fecha vinculación" 
                            required
                        ></Input>                      
                        <Button color="primary">Registrarme</Button>
                        <p>
                            ¿Ya tienes una cuenta?
                            <Link 
                                className='cursor-pointer ml-3' 
                                onClick={toggleForm}
                            >Ingresar</Link>
                        </p>
                    </form>
                </div>
            </section>
        )
    };

    return isLoginForm ? <LoginForm /> : <RegisterForm />;
}