import './login.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from '@nextui-org/link';

export default function Login() {
    return (
        <section className="main">
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
                    <p>¿No tienes cuenta? <Link href='#' >Registrate</Link> </p>
                </form>
            </div>
        </section>
    )
}