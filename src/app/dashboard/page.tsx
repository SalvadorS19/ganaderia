'use client'
import "./dashboard.css"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button";
import { Link } from '@nextui-org/link';
export default function Dashboard(){
    return (
    <main className="flex">
        <aside className="dashboard-aside">
            <ul className="dashboard-modules">
                <h2 className="dashboard-title">Modulos</h2>
                <section className="dashboard-section">
                    <h2 className="dashboard-subtitle">Ganaderia</h2>
                    <hr className="mb-3"/>
                    <li className="dashboard-item"> <i className="uil uil-archive"></i>   Registro animales</li>
                    <li className="dashboard-item"> <i className="uil uil-archive"></i>   Control animales</li>
                    <li className="dashboard-item"> <i className="uil uil-archive"></i>   Plan pastoreo</li>
                    <li className="dashboard-item"> <i className="uil uil-archive"></i>   Salud animales</li>
                </section>
                <section className="dashboard-section">
                    <h2 className="dashboard-subtitle">Administrativo</h2>
                    <hr className="mb-3"/>
                    <li className="dashboard-item"> <i className="uil uil-archive"></i>   Registro actividad</li>
                    <li className="dashboard-item"> <i className="uil uil-archive"></i>   Datos rendimiento</li>
                    <li className="dashboard-item"> <i className="uil uil-archive"></i>   Registro trabajadores</li>
                </section>
            </ul>
        </aside>
        <section className="dashboard-tabview">
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
        </section>
    </main>
    
    )
    
}
