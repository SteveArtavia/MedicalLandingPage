function App(){
    return(
        <div>
            <Navbar />
            <Hero />
            <OptionCards>
                <Card
                    title='Appointment'
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi nulla ipsa."
                    textBtn='Request'
                />
                <Card 
                    title='Find Doctors'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi nulla ipsa.'
                    textBtn='Doctors'
                />
                <Card 
                    title='Find locations'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi nulla ipsa.'
                    textBtn='Locations'
                />
            </OptionCards>
            <Speciality />
            <Services />
            <Form />
            <Footer />
        </div>
    )
}

////////////////////////////////////////////////////////////////////////////

function Navbar(){
    return(
        <header className="container-full">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
          <div className="container-fluid">
            <a id="logo" className="navbar-brand" href="#">
              <i className="fa-solid fa-star-of-life"></i> MedPlus
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#doctors">Doctors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}
////////////////////////////////////////////////////////////////////////////
function Hero(){
    return(
        <div id='hero' className=' container my-5'> 
            <div className='row'>
                <div className='col'>
                    <small>MEDICAL</small>
                    <h1>Healthcare Solutions</h1>
                    <p>Explore our healthcare solutions to enhance your well-being and quality of life. At MedPlus, we are dedicated to your health, providing excellent medical services and personalized care.</p>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
                <div className='undraw col-12 col-md-7 mt-5'>
                    <img src='/svg/hero.svg'/>
                </div>
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function OptionCards({children}){
    return(
        <div id='option-cards' className='container-2xl'>
            <div className='row col-11 mx-auto'>
                {children}
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function Card(props){
    let {title,text,textBtn} = props;
    return(
        <div className='card p-4 col-12 col-lg-3 col-md-8'>
            <div className='card-body'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-text mt-4'>{text}</p>
                <button className='btn btn-primary mt-3'>{textBtn}</button>
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function Speciality(){
    return(
        <div id='speciality' className='container'>
            <div className='row'>
                <div className='col-12 col-md-5 mb-4'>
                    <img src='/svg/speciality.svg' />
                </div>
                <div className='col'>
                    <small>FEATURES</small>
                    <h3>Our Speciality</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis alias enim optio nisi molestiae sit, atque quasi laudantium eos rem ab dolorem quod, pariatur eligendi? Numquam, repellat labore! Labore, dolores?</p>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function Services(){
    return(
        <div id='services' className='container'>
            <div className='row'>
                <div className='col-6 col-md-3 text-center'>
                    <i className='fa-solid fa-tooth my-4'></i>
                    <h4>Dental</h4>
                </div>
                <div className='col-6 col-md-3 text-center'>
                <i className='fa-solid fa-eye my-4'></i>
                    <h4>Eye Care</h4>
                </div>
                <div className='col-6 col-md-3 text-center'>
                <i className='fa-solid fa-heart my-4'></i>
                    <h4>Cardiology</h4>
                </div>
                <div className='col-6 col-md-3 text-center'>
                <i className='fa-solid fa-stethoscope my-4'></i>
                    <h4>Medicine</h4>
                </div>
            </div>
        </div>
    )
}

const Form = () => {
    return(
        <div className="container my-5">
        <h2>Contacto</h2>
        <form action="/submit-form" method="POST">
            <div className="mb-3">
                <label for="nombre" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="nombre" name="nombre" required/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Correo electrónico:</label>
                <input type="email" className="form-control" id="email" name="email" required/>
            </div>
            <div className="mb-3">
                <label for="mensaje" className="form-label">Mensaje:</label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-5">Enviar</button>
        </form>
    </div>
    )
}

const Footer = () => {
    return(
        <footer className="footer text-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4 my-3">
                <h5>Contact Us</h5>
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-phone-alt"></i> Phone: +123456789</li>
                    <li><i className="fas fa-envelope"></i> Email: info@medplus.com</li>
                    <li><i className="fas fa-map-marker-alt"></i> Address: Clinic Address</li>
                </ul>
            </div>
            <div className="col-md-4 my-3">
                <h5>Useful Links</h5>
                <ul className="list-unstyled mb-0">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Specialties</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col-md-4 my-3">
                <h5>Follow Us</h5>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 my-5">
                <p>&copy; 2024 Medical Clinic. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))