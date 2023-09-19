import "./dashboard.css"
export default function Dashboard(){
    return (
    <main className="flex">
        <aside className="dashboard-aside">
            <ul className="dashboard-modules">
                <li> <h2 className="dashboard-title">Modulos</h2></li>
                <li> <h2 className="dashboard-subtitle">Ganaderia</h2></li>
                <hr />
                <li className="dashboard-item"> <i className="uil uil-archive"></i>   Registro animales</li>
                <li className="dashboard-item"> <i className="uil uil-archive"></i>   Control animales</li>
                <li className="dashboard-item"> <i className="uil uil-archive"></i>   Plan pastoreo</li>
                <li className="dashboard-item"> <i className="uil uil-archive"></i>   Salud animales</li>
                <li> <h2 className="dashboard-subtitle">Administrativo</h2></li>
                <hr />
                <li className="dashboard-item"> <i className="uil uil-archive"></i>   Registro actividad</li>
                <li className="dashboard-item"> <i className="uil uil-archive"></i>   Datos rendimiento</li>
                <li className="dashboard-item"> <i className="uil uil-archive"></i>   Registro trabajadores</li>
            </ul>
        </aside>
        <section className="dashboard-tabview">
            no
        </section>
    </main>
    
    )
    
}
