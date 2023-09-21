import "./dashboard.css"
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
            no
        </section>
    </main>
    
    )
    
}
