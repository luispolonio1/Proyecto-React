import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css'
export const Footer =()=>{
return (<div className="container-fluid col-12 espaciosdiv2">
    <footer className="row row-cols-1  row-cols-md-3">
        <div className="col mb-4">
            <h5 style={{ color: '#fff', fontFamily: 'Garamond', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} >Secciones</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="./Home" className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-house-door-fill"></i>Home</a></li>
                <li className="nav-item mb-2"><a href="../Home" className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-dribbble"></i>Deportes</a></li>
                <li className="nav-item mb-2"><a href="./Tecnologias" className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-pc-display-horizontal"></i>Tecnologia</a></li>
                <li className="nav-item mb-2"><a href="./Noticias" className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-globe-americas"></i>Noticias Mundiales</a></li>
            </ul>
        </div>

        <div className="col mb-4">
            <h5 style={{ color: '#fff', fontFamily: 'Garamond', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} >GitHub</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://github.com/luispolonio1" target='_bank' className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-github"></i>Luis Polonio</a></li>
                <li className="nav-item mb-2"><a  href="https://github.com/StevenP09" target='_bank' className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-github"></i>Steven Perez</a></li>
                <li className="nav-item mb-2"><a href="https://github.com/AnthonyBermudez19" target='_bank' className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-github"></i>Anthony Bermudez</a></li>
            </ul>
        </div>

        <div  style={{ color: '#fff', fontFamily: 'Garamond', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} className="col mb-4">
            <h5>Redes sociales</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://www.instagram.com/" target='_bank' className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-instagram"></i></a></li>
                <li className="nav-item mb-2"><a href="https://www.facebook.com/" target='_bank' className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-facebook"></i></a></li>
                <li className="nav-item mb-2"><a href="https://www.x.com/" target='_bank' className="nav-link p-0 text-body-secondary"><i style={{ color: '#fff', fontFamily: 'Arial', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} class="bi bi-twitter-x"></i></a></li>
            </ul>
        </div>
    </footer>
</div>
)}
