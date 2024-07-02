import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css'
export const Footer =()=>{
return (<div className="container-fluid col-12">
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 my-5 border-top espaciosdiv">
        <div className="col mb-4 ">
            <h5>Section</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="./Home" className="nav-link p-0 text-body-secondary"><i class="bi bi-house-door-fill iconosEs"></i>Home</a></li>
                <li className="nav-item mb-2"><a href="../Home" className="nav-link p-0 text-body-secondary"><i class="bi bi-dribbble iconosEs"></i>Deportes</a></li>
                <li className="nav-item mb-2"><a href="./Tecnologias" className="nav-link p-0 text-body-secondary"><i class="bi bi-pc-display-horizontal iconosEs"></i>Tecnologia</a></li>
                <li className="nav-item mb-2"><a href="./Noticias" className="nav-link p-0 text-body-secondary"><i class="bi bi-globe-americas iconosEs"></i>Noticias Mundiales</a></li>
            </ul>
        </div>

        <div className="col mb-4">
            <h5>Repositorios GitHub</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://github.com/luispolonio1" target='_bank' className="nav-link p-0 text-body-secondary"><i class="bi bi-github iconosEs"></i>Luis Polonio</a></li>
                <li className="nav-item mb-2"><a href="https://github.com/StevenP09/StevenPs09" target='_bank' className="nav-link p-0 text-body-secondary"><i class="bi bi-github iconosEs"></i>Steven Perez</a></li>
                <li className="nav-item mb-2"><a href="#" target='_bank' className="nav-link p-0 text-body-secondary"><i class="bi bi-github iconosEs"></i>Anthony Bermudez</a></li>
            </ul>
        </div>

        <div className="col mb-4">
            <h5>Redes social</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://x.com/?lang=es" target='_bank' className="nav-link p-0 text-body-secondary"><i class="bi bi-instagram iconosEs"></i></a></li>
                <li className="nav-item mb-2"><a href="https://www.instagram.com/" target='_bank' className="nav-link p-0 text-body-secondary"><i class="bi bi-facebook iconosEs"></i></a></li>
                <li className="nav-item mb-2"><a href="https://www.facebook.com/" target='_bank' className="nav-link p-0 text-body-secondary"><i class="bi bi-twitter-x iconosEs"></i></a></li>
            </ul>
        </div>
        <div className='col container-fluid col-md-12' >
        <p className="text-body-secondary" style={{textAlign:'center'}}>&copy; 2024</p>
        </div>
    </footer>
</div>
)}