import './registro-animales.css';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/react';

export default function RegistroAnimales() {
    return (
        <div className="tabview-container">
            <h1 className="mb-5 text-xl font-bold text-center m-5">Registro Animal</h1>
            <form className="tabview-form">
                <Input 
                    type="text" 
                    label="Raza" 
                    required
                ></Input>
                <Input 
                    type="text" 
                    label="Edad" 
                    required
                ></Input>
                <Input 
                    type="text" 
                    label="Peso" 
                    required
                ></Input>
                <Button 
                    startContent={<i className="uil uil-upload"></i>}
                    color="primary"
                >Carga historial clinico</Button>
                <Input 
                    type="text" 
                    label="Cantidad de partos" 
                    required
                ></Input>                      
                <Button color="primary">Registrar Vaca</Button>
            </form>
        </div>
    )
}