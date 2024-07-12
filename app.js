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
        </div>
    )
}

////////////////////////////////////////////////////////////////////////////

function Navbar(){
    return(
        <header>
            <a id='logo'><i class='fa-solid fa-star-of-life'></i> MedPlus</a>
            <nav>
                <a href='#about'>About</a>
                <a href='#services'>Services</a>
                <a href='#doctors'>Doctors</a>
                <a href='#blog'>Blog</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
    )
}
////////////////////////////////////////////////////////////////////////////
function Hero(){
    return(
        <div id='hero' class='container my-5'> 
            <div class='row'>
                <div class='col'>
                    <small>MEDICAL</small>
                    <h1>Healthcare Solutions</h1>
                    <p class='mt-4'>Explore our healthcare solutions to enhance your well-being and quality of life. At MedPlus, we are dedicated to your health, providing excellent medical services and personalized care.</p>
                    <button class='btn btn-primary mt-4'>Learn More</button>
                </div>
                <div class='undraw col'>
                    <img src='/svg/hero.svg'/>
                </div>
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function OptionCards({children}){
    return(
        <div id='option-cards' class='container-2xl'>
            <div class='row col-11 mx-auto'>
                {children}
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function Card(props){
    let {title,text,textBtn} = props;
    return(
        <div class='card p-4 col-12 col-lg-3 col-md-8'>
            <div class='card-body'>
                <h3 class='card-title'>{title}</h3>
                <p class='card-text mt-4'>{text}</p>
                <button class='btn btn-primary mt-3'>{textBtn}</button>
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function Speciality(){
    return(
        <div id='speciality' class='container'>
            <div class='row'>
                <div class='col'>
                    <img src='/svg/speciality.svg' />
                </div>
                <div class='col'>
                    <small>FEATURES</small>
                    <h3>Our Speciality</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis alias enim optio nisi molestiae sit, atque quasi laudantium eos rem ab dolorem quod, pariatur eligendi? Numquam, repellat labore! Labore, dolores?</p>
                    <button class='btn btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
    )
}
////////////////////////////////////////////////////////////////////////////
function Services(){
    return(
        <div id='services' class='container'>
            <div class='row'>
                <div class='col text-center'>
                    <i class='fa-solid fa-tooth mb-4'></i>
                    <h4>Dental</h4>
                </div>
                <div class='col text-center'>
                <i class='fa-solid fa-eye mb-4'></i>
                    <h4>Eye Care</h4>
                </div>
                <div class='col text-center'>
                <i class='fa-solid fa-heart mb-4'></i>
                    <h4>Cardiology</h4>
                </div>
                <div class='col text-center'>
                <i class='fa-solid fa-stethoscope mb-4'></i>
                    <h4>Medicine</h4>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))