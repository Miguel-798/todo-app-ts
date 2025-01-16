/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import logo from './assets/img/motoalejotrans.png'
// import llaves from './assets/img/portfolio/fullsize/llaves.png'
import muro from './assets/img/portfolio/fullsize/muro.png'
import motor from './assets/img/portfolio/fullsize/motor.png'
import repuestos from './assets/img/portfolio/fullsize/repos.png'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from 'react-router-dom';

import { saveAgenda } from './AgendaApi';
import Agenda from './Agenda';

function Landing() {

    const agenda: Agenda = {};
    const history = useNavigate();

    const save = () => {
            saveAgenda(agenda);
            history('/agendas');
        }

    return (
        <div className='fondo'>
      {/* Navigation 
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light" >
      <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto my-2 my-lg-0">
                  <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
    </nav>*/}

    {/* Mobile topbar */}
    <Navbar expand="lg" className="bg-body-tertiary shadow col-12 col-sm-12 col-md-12 col-lg-12 fixed-top">
                <div className="container px-4 px-lg-5">
                    <div className='d-flex '>
                        <img src={logo} className="App-logo2 mx-4" alt="logo" />
                        <Navbar.Brand className='mt-2' href="#inicio">Inicio</Navbar.Brand>
                        
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#taller">Taller</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">A tu servicio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Agendar</a></li>
                        <NavDropdown title="Sesión" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Usuario</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Carrito
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/agendas">Citas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Cerrar Sesión
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </div>
                </Navbar>

    {/* Masthead */}
    <header className="masthead" id='inicio'>
      <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8 align-self-end">
                  <h1 className="text-white font-weight-bold">Taller de motos &apos;Moto Alejo&apos;</h1>
                  <hr className="divider" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                  <p className="text-white-75 mb-5">Mantenimiento y reparacion de motos, toda marca, todo modelo!</p>
                  <a className="btn btn-primary btn-xl" href="#taller">Ver mas</a>
              </div>
          </div>
      </div>
    </header>

    {/* about */}
    <section className="page-section bg-primary" id="taller">
      <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">Tenemos lo que necesitas!</h2>
                  <hr className="divider divider-light" /> 
                  <p className="text-white-75 mb-4">En el taller MotoAlejo tenemos todo lo que tu moto requiere para funcionar al 100%! Escoge nuestros servicios de reparacion y mantenimiento, tambien compra algunos repuestos, tu moto esta en buenas manos!</p>
                  <a className="btn btn-light btn-xl" href="#services">Empecemos!</a>
              </div>
          </div>
      </div>
    </section>
    {/* services */}
    <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0 text-light">A Tu Servicio</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-gem fs-1 text-light"></i></div>
                            <h3 className="h4 mb-2 text-primary">Servicio profesional</h3>
                            <p className="text-light mb-0">Ofrecemos un servicio de calidad y garantías de reparación o mantenimiento</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2 text-primary">Trato</h3>
                            <p className="text-light mb-0">Ofrecemos un buen trato personalizado</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2 text-primary">Calidad-precio </h3>
                            <p className="text-light mb-0">Ofrecemos el mejor servicio posible a un precio competitivo</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2 text-primary">Hecho con amor</h3>
                            <p className="text-light mb-0"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* portfolio */}
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={motor} title="Project Name">
                            <img className="img-fluid" src={motor} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Observar</div>
                                <div className="project-name">Servicios</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="/agenda" title="Project Name">
                            <img className="img-fluid" src={muro} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Agenda</div>
                                <div className="project-name">Citas</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={repuestos} title="Project Name">
                            <img className="img-fluid" src={repuestos} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Mirar</div>
                                <div className="project-name">Productos</div>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* */}
        <section className="page-section bg-dark text-white">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">Nos gustaria escucharte!</h2>
                <a className="btn btn-light btn-xl" href="#inicio">coméntanos!</a>
            </div>
            
        </section> 
        {/* Contact */}
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-0 text-primary">Agenda una cita!</h2>
                        <hr className="divider" />
                        <p className="text-light mb-5 ">¿Deseas que se te aparte una hora del día para ser atendido/a? <br></br>¡llena el siguiente formulario para agendar una cita!</p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                       {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *--> 
                        <!-- This form is pre-integrated with SB Forms.-->   */}
                         {/* <!-- To make this form functional, sign up at--> */}
                         {/* https://startbootstrap.com/solution/contact-forms */}
                         {/* to get an API token! */}
                    <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-light">
                        Nombre y/o modelo
                        </label>
                        <input type="text" className="form-control" id="name" onChange={e => agenda.nombre_modelo = String(e.target.value)} defaultValue={agenda.nombre_modelo} placeholder="Ingresa tu nombre y/o modelo" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label text-light">
                        Teléfono
                        </label>
                        <input type="tel" className="form-control" id="phone" onChange={e => agenda.telefono = String(e.target.value)} defaultValue={agenda.telefono} placeholder="Ingresa tu número de teléfono" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label text-light">
                        Fecha
                        </label>
                        <input type="date" className="form-control" id="date" onChange={e => agenda.fecha = String(e.target.value)} defaultValue={agenda.fecha} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label text-light">
                        Hora
                        </label>
                        <input type="time" className="form-control" id="time" onChange={e => agenda.hora = String(e.target.value)} defaultValue={agenda.hora} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service" className="form-label text-light">
                        Servicio
                        </label>
                        <select className="form-select" id="service" onChange={e => agenda.servicio = String(e.target.value)} defaultValue={agenda.servicio} required>
                        <option value=""  disabled selected>
                            Selecciona un servicio
                        </option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="reparacion">Reparación</option>
                        <option value="revision">Revisión general</option>
                        </select>
                    </div>
                    <button type="submit" onClick={save} className="btn btn-success w-100">
                        Agendar Cita
                    </button>
                    </form>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-4 text-center mb-5 mb-lg-0">
                        <i className="bi-phone fs-2 mb-3 text-muted"></i>
                        <div className='text-light'>Gracias</div>
                    </div>
                </div> 
            </div>
            
        </section> 
        {/* Footer */}
            <footer className="bg-light py-5">
                <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Copyright &copy; 2024 - MotoAlejo</div></div>
                <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Contacto: +57 (321) 811 4056</div></div>
            </footer>
        </div>
    );
}

export default Landing;