'use client'
import "./dashboard.css"
import { useState } from "react";
import RegistroAnimales from "./registro-animales/registro-animales";
export default function Dashboard(){
    
    type Modules = {
        [key: number]: JSX.Element;
    };

    let [tabviewId, setTabviewId] = useState(1);

    const modules: Modules = {
        1: <RegistroAnimales></RegistroAnimales>,
    }

    function changeTabview(id: number) {
        setTabviewId(id)
    }

    return (
    <main className="flex">
        <aside className="dashboard-aside">
            <ul className="dashboard-modules">
                <h2 className="dashboard-title">Modulos</h2>
                <section className="dashboard-section">
                    <h2 className="dashboard-subtitle">Ganaderia</h2>
                    <hr className="mb-3"/>
                    <li className="dashboard-item" onClick={()=> changeTabview(1)}>
                        <i className="uil uil-archive"></i>
                        Registro animales
                    </li>
                    <li className="dashboard-item" onClick={()=> changeTabview(2)}>
                        <i className="uil uil-archive"></i>
                        Control de inventario
                    </li>
                    <li className="dashboard-item" onClick={()=> changeTabview(3)}>
                        <i className="uil uil-archive"></i>
                        Plan pastoreo
                    </li>
                    <li className="dashboard-item" onClick={()=> changeTabview(4)}>
                        <i className="uil uil-archive"></i>
                        Salud animales
                    </li>
                </section>

                <section className="dashboard-section">
                    <h2 className="dashboard-subtitle">Administrativo</h2>
                    <hr className="mb-3"/>
                    <li className="dashboard-item" onClick={()=> changeTabview(5)}>
                        <i className="uil uil-archive"></i>
                        Registro actividad
                    </li>
                    <li className="dashboard-item" onClick={()=> changeTabview(6)}>
                        <i className="uil uil-archive"></i>
                        Datos rendimiento
                    </li>
                    <li className="dashboard-item" onClick={()=> changeTabview(7)}>
                        <i className="uil uil-archive"></i>
                        Registro trabajadores
                    </li>
                </section>
            </ul>
        </aside>
        <section className="dashboard-tabview">
            { modules[tabviewId] }
        </section>
    </main>
    
    )
    
}
