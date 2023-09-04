import "./landing.css"
import Button from '@mui/joy/Button';

function Landing(){
    return (
    <section className="banner">
        <div className="banner-container">
            <div className="banner-container-two">
                <div className="banner-container-info">
                    <h2 className="banner-title">Bienestar que se saborea.</h2>
                    <p className="banner-text">Lorem ipsum dolor sit amet elit. Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac cursus quis, leo. Non quae, fugiat nihil ad, in ligula.</p>
                    <a className="btn btn-secondary btn-style mt-5 me-2" href="#discover"> Ver Ganado </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Landing