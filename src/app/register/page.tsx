import './register.css';
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import {Link} from "@nextui-org/link";

export default function Register() {
    return (
        <section className="main">
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

                    <Button color="primary">Registar</Button>
                </form>
            </div>
        </section>
    )
}