'use client'
import './login.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {

    const superUser = {usuario: 'admin', clave: 'admin'};

    const router = useRouter();
    const [loginForm, setLoginForm] = useState({usuario: '', clave: ''});
    
    function login() {
        if (loginForm.usuario === superUser.usuario 
            && loginForm.clave === superUser.clave
        ) {
            localStorage.setItem('token', 'ADMIN');
            router.push('/dashboard');
        }
    }

    function handleLoginForm(event: any) {
        const {name, value} = event.target;
        setLoginForm((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
        
    return (
        <section className="login-main">
            <div className="login-container">
                <h1 className="mb-5 text-xl font-bold text-center">Bienvenido</h1>
                <form className="login-form">
                    <Input 
                        name='usuario'
                        type="text" 
                        label="Usuario" 
                        value={loginForm.usuario}
                        onChange={handleLoginForm}
                        required
                    ></Input>
                    <Input 
                        name='clave'
                        type="password" 
                        label="Contraseña" 
                        value={loginForm.clave}
                        onChange={handleLoginForm}
                        required
                    ></Input>
                    <Checkbox>Recordarme</Checkbox>
                    <Button color="primary" onPress={login}>Ingresar</Button>
                </form>
            </div>
        </section>
    );
}