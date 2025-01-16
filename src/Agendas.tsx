/* eslint-disable react/react-in-jsx-scope */
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'; // Table
import logo from './assets/img/motoalejotrans.png'
import './App.css'
import { useEffect, useState } from 'react';
import { removeAgenda, searchAgendas } from './AgendaApi';
import { useNavigate } from 'react-router-dom';
import Agenda from './Agenda';





function Agendas() {

    const [agendas, setAgendas] = useState<Agenda[]>([]);
    const history = useNavigate();

    useEffect (() => {
        search();
    }, []);

    const addCita = () => {
            history('/agenda/new');
        }

    const editCita = (id: string) => {
        history('/agenda/' + id);
    }

    const search = async () => {
        const result = await searchAgendas();
        setAgendas(result);
    }

    const remove = async (id: string) => {
        await removeAgenda(id);
        search();
    }

    return (
        <div className='fondo'>
            {/* Navigation */}
            <Navbar expand="lg" className="bg-body-tertiary shadow  col-12 col-sm-12 col-md-12 col-lg-12 fixed-top">
                <div className="container px-4 px-lg-5">
                    <div className='d-flex '>
                        <img src={logo} className="App-logo2 mx-4" alt="logo" />
                        <Navbar.Brand className='mt-2 ' href='/'>Inicio</Navbar.Brand>

                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Sesión" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Usuario</NavDropdown.Item>
                                <NavDropdown.Item href="/agenda/new">
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
            <br></br>


            {/* <section className="page-section bg-dark text-white">
        
         <Table striped bordered hover className='bg-light text-center container'>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={1}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
            </section>*/}


            {/* Listar citas */}
            <div className='container'>
                <h1 className='mt-5 text-white text-center'>Agenda</h1>
                <button onClick={addCita} className="btn btn-success w-10 my-2">
                    Añadir
                </button>

                <div className='table-responsive'>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className='table-dark'>
                            
                            <th scope="col">Nombre y/o modelo</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Servicio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>

                    {agendas.map((agenda: Agenda) => 
                    // eslint-disable-next-line react/jsx-key
                    <tbody>
                        <tr className="table-light">
                            
                            <th scope="row">{agenda.nombre_modelo}</th>
                            <td>{agenda.telefono}</td>
                            <td>{agenda.fecha}</td>
                            <td>{agenda.hora}</td>
                            <td>{agenda.servicio}</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => remove(String(agenda.id))} color='red' type='button' width="16" height="16" fill="currentColor" className="bi bi-calendar-x me-4" viewBox="0 0 16 16">
                                    <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => editCita(String(agenda.id))} color='blue' type='button' width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                                </svg>
                            </td>
                        </tr>

                    </tbody>
                    )}


                </table>
                </div>
            </div>


           
            


        </div>
    );
}

export default Agendas;