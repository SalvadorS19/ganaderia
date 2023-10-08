'use client'
import './login.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { useRouter } from 'next/navigation';

export default function Login() {

    const router = useRouter();
    
    function login() {
        localStorage.setItem('token', 'ADMIN');
        router.push('/dashboard');
    }

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
                    <Button color="primary" onPress={login}>Ingresar</Button>
                </form>
            </div>
        </section>
    );
}