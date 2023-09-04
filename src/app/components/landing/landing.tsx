import "./landing.css"
import Button from '@mui/joy/Button';

function Landing(){
    return (
    <section className="banner">
        <div className="banner-container">
            <div className="banner-container-two">
                <div className="banner-container-info">
                    <h2 className="banner-title">Bienestar que se saborea.</h2>
                    <p className="banner-text">
                        Nos comprometemos a brindar un entorno enriquecedor y cuidados expertos, 
                        garantizando la salud y felicidad de nuestros animales. 
                        Descubre cómo nuestro enfoque dedicado asegura la calidad y sostenibilidad en cada paso.
                    </p>
                    <a className="btn btn-secondary btn-style mt-5 me-2" href="#discover"> Ver Ganado </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Landing