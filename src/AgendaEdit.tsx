/* eslint-disable react/react-in-jsx-scope */
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap'; // Table
import logo from './assets/img/motoalejotrans.png'
import './App.css'
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { saveAgenda, searchAgendaByNombre } from './AgendaApi';
import { useEffect, useState } from 'react';
import Agenda from './Agenda';



function AgendaEdit() {

    const {Nombre} = useParams<{Nombre: string;}>();
    
    const [agenda, setAgenda]= useState<Agenda>({});
    const history = useNavigate();

   const routeMatch= useMatch("/agenda/:id");
    const id = routeMatch?.params?.id;
    
    const search = async () =>{

        
        if (id !== 'new') {
            const result = await searchAgendaByNombre(String(id));
            setAgenda(result);
        }
    }

   
    useEffect(() =>{
        
    search();
    
    }, []);
    
    
     
   

    const save = () => {
        saveAgenda(agenda);
        history('/agendas');
    }

    
    

    return (
        <div className='fondo'>
            {/* Navigation */}
            <Navbar expand="lg" className="bg-body-tertiary shadow  col-12 col-sm-12 col-md-12 col-lg-12 fixed-top">
                <div className="container px-4 px-lg-5">
                    <div className='d-flex '>
                        <img src={logo} className="App-logo2 mx-4" alt="logo" />
                        <Navbar.Brand className='mt-2 ' href="/">Inicio</Navbar.Brand>
                        
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
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


                <br className='my-5'></br>
                <br className='my-5'></br>

                

                
            
            {/* Editar citas */}
           
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <h2 className="mt-5 text-light">{Nombre === 'new' ? 'Agregar Cita!' : 'Editar Cita!'}</h2>
                        <hr className="divider" />
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5 text-light">
                    <div className="col-lg-6">
                       {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *--> 
                        <!-- This form is pre-integrated with SB Forms.-->   */}
                         {/* <!-- To make this form functional, sign up at--> */}
                         {/* https://startbootstrap.com/solution/contact-forms onChange={e => setAgenda({'Nombremodelo': e.target.value})} value={agenda.Nombremodelo} */}
                         {/* to get an API token! agenda.Nombremodelo = e.target.value */}
                    <form >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                        Nombre y/o modelo
                        </label>
                        <input type="text" className="form-control" id="name" onChange={e => agenda.nombre_modelo = String(e.target.value)} defaultValue={agenda.nombre_modelo} placeholder="Ingresa tu nombre y/o modelo" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                        Teléfono
                        </label>
                        <input type="tel" className="form-control" id="phone" onChange={e => agenda.telefono = String(e.target.value)} defaultValue={agenda.telefono} placeholder="Ingresa tu número de teléfono" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                        Fecha
                        </label>
                        <input type="date" className="form-control" id="date" onChange={e => agenda.fecha = String(e.target.value)} defaultValue={agenda.fecha} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label">
                        Hora
                        </label>
                        <input type="time" className="form-control" id="time" onChange={e => agenda.hora = String(e.target.value)} defaultValue={agenda.hora} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service" className="form-label">
                        Servicio
                        </label>
                        <select className="form-select" id="service" onChange={e => agenda.servicio = String(e.target.value)} defaultValue={agenda.servicio} required>
                        <option value="" disabled selected>
                            Selecciona un servicio
                        </option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="reparacion">Reparación</option>
                        <option value="revision">Revisión general</option>
                        </select>
                    </div>
                    <button type='submit' onClick={save} className="btn btn-success w-100">
                    Agendar Cita
                </button>
                    </form>
                    
                    </div>
                </div>
                
            </div>
            
        


    </div>
    );
}

export default AgendaEdit;